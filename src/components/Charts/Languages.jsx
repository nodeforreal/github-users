// Step 1 - Include react
import React from "react";

// Step 2 - Include the react-fusioncharts component
import ReactFC from "react-fusioncharts";

// Step 3 - Include the fusioncharts library
import FusionCharts from "fusioncharts";

// Step 4 - Include the chart type
import Column2D from "fusioncharts/fusioncharts.charts";

// Step 5 - Include the theme as fusion
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";

import {GithubContext} from '../../context/GithubContext'

// Adding the chart and theme as dependency to the core fusioncharts
ReactFC.fcRoot(FusionCharts, Column2D, FusionTheme);

// STEP 4 - Creating the DOM element to pass the react-fusioncharts component
const Languages = () => {
  const {repos} = React.useContext(GithubContext)
  const data = repos.reduce((accumulator,current)=>{
    if(!current.language) return accumulator
    accumulator[current.language] = accumulator[current.language] ? accumulator[current.language]+1 : 1
    return accumulator
  },{})
  const chartData = Object.keys(data).map((key)=>{
    return {label:key , value:data[key] }
  }).sort((a,b)=>{
    return b.value - a.value
  }).slice(0,5)

  // STEP 3 - Creating the JSON object to store the chart configurations
  const chartConfigs = {
    type: "pie2d", // The chart type
    width: "100%", // Width of the chart
    height: "100%",
    dataFormat: "json", // Data type
    dataSource: {
      // Chart Configuration
      chart: {
        //Set the chart caption
        caption: "Languages Used",
        //Set the chart subcaption
        subCaption: "Repository",
    
        //Set the theme for your chart
        theme: "fusion",
      },
      // Chart Data
      data: chartData,
    },
  };
  return <ReactFC {...chartConfigs} />;
};

export default Languages;
