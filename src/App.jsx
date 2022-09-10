import React from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { GlobalStyle } from "./global-styles";
import { GithubContextProvider } from "./context/GithubContext";

import { Dashboard, Login, Error, ProtectedRoute } from "./pages";
const App = () => {
  return (
    <GithubContextProvider>
      <Router>
        <Wrapper>
          <GlobalStyle />
          <Routes>
            <Route
              path="/"
              element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              }
            ></Route>

            <Route path="/login" element={<Login />}></Route>
            <Route path="*" element={<Error />}></Route>
          </Routes>
        </Wrapper>
      </Router>
    </GithubContextProvider>
  );
};

const Wrapper = styled.main`
`;

export default App;
