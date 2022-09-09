import { useState, createContext, useEffect } from "react";
import { userMock } from "../mockData/userMock";
import { followersMock } from "../mockData/followerMock";
import { reposMock } from "../mockData/reposMock";
import axios from "axios";
const GithubContext = createContext();

const rootURL = "https://api.github.com";

const GithubContextProvider = ({ children }) => {
  const [user, setUser] = useState(userMock);
  const [followers, setFollowers] = useState(followersMock);
  const [repos, setRepos] = useState(reposMock);
  const [toggleError, setToggleError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [rateLimit, setRateLimit] = useState({});

  const fetchData = async (user = "wesbos") => {
    // set loading
    setIsLoading(true);
    console.log(toggleError, rateLimit.remaining);

    if (rateLimit.remaining === 0) {
      setToggleError("Request limit exceeded.");
      setIsLoading(false);
      return;
    }

    Promise.allSettled([
      axios(`${rootURL}/users/${user}`),
      axios(`${rootURL}/users/${user}/followers`),
      axios(`${rootURL}/users/${user}/repos?per_page=100`),
      axios(`${rootURL}/rate_limit`),
    ])
      .then((array) => {
        const [user, followers, repos, rate] = array;

        if (user.status === "fulfilled") {
          setUser(user.value.data);
        }

        if (followers.status === "fulfilled") {
          setFollowers(followers.value.data);
        }

        if (repos.status === "fulfilled") {
          setRepos(repos.value.data);
        }
        if (rate.status === "fulfilled") {
          const { remaining, limit } = rate.value.data.rate;
          setRateLimit({ remaining, limit });
          if (remaining === 0) {
            setToggleError("Request limit exceeded.");
          }
        }

        // set loading false
        setIsLoading(false);
      })
      .catch((error) => {
        console.log("error >>");
      });
  };

  useEffect(() => {
    fetchData();
    return () => {};
  }, []);

  return (
    <GithubContext.Provider
      value={{
        user,
        followers,
        repos,
        isLoading,
        rateLimit,
        toggleError,
        fetchData,
        setToggleError,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};

export { GithubContext, GithubContextProvider };
