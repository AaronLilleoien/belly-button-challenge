//Get data
const url = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json";

//I have no idea what I'm doing. We did not have an example where we did anything w/ json data other than console.log it
//Fetch the JSON data and console log it
d3.json(url).then(function(data) {
    console.log(data);
  });

//This is the part from the horizontal bar chart that we did

  slicedData = data.slice(0,10);

  reversedData = slicedData.reverse();

  let trace1 = {
  
    x: reversedData.map(object => object.),
    y: reversedData.map(object => object.),
    text: reversedData.map(object => object.),
    name: "No idea what I'm doing",
    type: "bar",
    orientation: "h"
  }

  // Data array
// `data` has already been defined, so we must choose a new name here:
let traceData = [trace1];

// Apply a title to the layout
let layout = {
  title: "Belly Button Stuff",
  margin: {
    l: 100,
    r: 100,
    t: 100,
    b: 100
  }
};

// Render the plot to the div tag with id "plot"
// Note that we use `traceData` here, not `data`
Plotly.newPlot("plot", traceData, layout);
