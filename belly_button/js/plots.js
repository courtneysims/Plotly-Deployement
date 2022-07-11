function init() {
    var selector = d3.select("#selDataset");
  
    d3.json("samples.json").then((data) => {
      console.log(data);
      var sampleNames = data.names;
      sampleNames.forEach((sample) => {
        selector
          .append("option")
          .text(sample)
          .property("value", sample);
      });
  })}
  
  init();

  function optionChanged(newSample) {
    buildMetadata(newSample);
    buildCharts(newSample);
  }

  function buildMetadata(sample) {

    var PANEL = d3.select("#sample-metadata");
    PANEL.html("");

    d3.json("samples.json").then((data) => {
      var metadata = data.metadata
      var filteredMetadata = metadata.filter(sampleObj => sampleObj.id == sample)[0];
      console.log(filteredMetadata)
      Object.entries(filteredMetadata).forEach(([key, value]) =>
        PANEL.append("h6").text(key + ': ' + value));});

    }
  


// function buildMetadata(sample) {
//   d3.json("samples.json").then(function(data){
//     var metadata = data.metadata;
//     var PANEL = d3.select("#sample-metadata");
//     var filteredMetadata = metadata.filter(bacteriaInfo => bacteriaInfo.id == patientID)[0]
//     Object.entries(filteredMetadata).forEach(([key, value]) =>
//       {console.log(filteredMetadata);});
// });

// console.log("hello")

// d3.json("samples.json").then(function(data){
//     console.log(data);
// });

// // extract washing frequency of each person
// d3.json("samples.json").then(function(data){
//     wfreq = data.metadata.map(person => person.wfreq);
//     console.log(wfreq);
// });

// // sort washing frequency in descending order
// d3.json("samples.json").then(function(data){
//     wfreq = data.metadata.map(person =>
// person.wfreq).sort((a,b) => b - a);
//     console.log(wfreq);
// });

// // filter out null values from wfreq aray
// d3.json("samples.json").then(function(data){
//     wfreq = data.metadata.map(person =>
// person.wfreq).sort((a,b) => b - a);
//     filteredWfreq = wfreq.filter(element => element !=
// null);
//     console.log(filteredWfreq);
// });

// // print metadata of specific person in data
// d3.json("samples.json").then(function(data){
//     firstPerson = data.metadata[0];
//     Object.entries(firstPerson).forEach(([key, value]) =>
//       {console.log(key + ': ' + value);});
// });

// d3.json("samples.json").then(function(data){
//     firstPerson = data.metadata[1];
//     Object.entries(firstPerson).forEach(([key, value]) =>
//       {console.log(key + ': ' + value);});
// });

