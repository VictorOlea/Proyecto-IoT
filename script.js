//Get current sensor readings when the page loads  
window.addEventListener('load', getReadings);

// Create Temperature Gauge
var gaugeTemp = new LinearGauge({
  renderTo: 'gauge-temperature',
  width: 120,
  height: 400,
  units: "Temperatura C",
  minValue: 0,
  startAngle: 90,
  ticksAngle: 180,
  maxValue: 40,
  colorValueBoxRect: "#049faa",
  colorValueBoxRectEnd: "#049faa",
  colorValueBoxBackground: "#f1fbfc",
  valueDec: 2,
  valueInt: 2,
  majorTicks: [
      "0",
      "5",
      "10",
      "15",
      "20",
      "25",
      "30",
      "35",
      "40"
  ],
  minorTicks: 4,
  strokeTicks: true,
  highlights: [
      {
          "from": 30,
          "to": 40,
          "color": "rgba(200, 50, 50, .75)"
      }
  ],
  colorPlate: "#fff",
  colorBarProgress: "#CC2936",
  colorBarProgressEnd: "#049faa",
  borderShadowWidth: 0,
  borders: false,
  needleType: "arrow",
  needleWidth: 2,
  needleCircleSize: 7,
  needleCircleOuter: true,
  needleCircleInner: false,
  animationDuration: 1500,
  animationRule: "linear",
  barWidth: 10,
}).draw();
  
// Create Temperature Chart
var chartTemp = new Highcharts.Chart({
  chart: {renderTo: 'chart-temperature'},
  title: {text:'Temperatura Ambiental'},
  series: [{
    showInLegend: false,
    data:[]
  }],
  plotOptions: {
    line: {animation: false,
    dataLabels: {enabled: true}
  },
  series: {color: '#059e8a'}
  },
  xAxis: {type: 'datetime',
    dateTimeLabelFormats: {second: '%H:%M:%S'}
  },
  yAxis: {
    title: { text: 'Temperatura (celsius)' }
  },
  credits: {enabled: false}
}); 

// Create Humidity Gauge
var gaugeHum = new RadialGauge({
  renderTo: 'gauge-humidity',
  width: 300,
  height: 300,
  units: "Humedad (%)",
  minValue: 0,
  maxValue: 100,
  colorValueBoxRect: "#049faa",
  colorValueBoxRectEnd: "#049faa",
  colorValueBoxBackground: "#f1fbfc",
  valueInt: 2,
  majorTicks: [
      "0",
      "20",
      "40",
      "60",
      "80",
      "100"

  ],
  minorTicks: 4,
  strokeTicks: true,
  highlights: [
      {
          "from": 80,
          "to": 100,
          "color": "#03C0C1"
      }
  ],
  colorPlate: "#fff",
  borderShadowWidth: 0,
  borders: false,
  needleType: "line",
  colorNeedle: "#007F80",
  colorNeedleEnd: "#007F80",
  needleWidth: 2,
  needleCircleSize: 3,
  colorNeedleCircleOuter: "#007F80",
  needleCircleOuter: true,
  needleCircleInner: false,
  animationDuration: 1500,
  animationRule: "linear"
}).draw();

// Create Humidity Chart
var chartH = new Highcharts.Chart({
  chart:{ renderTo:'chart-humidity' },
  title: { text: 'Humedad Ambiental' },
  series: [{
    showInLegend: false,
    data: []
  }],
  plotOptions: {
    line: { animation: false,
      dataLabels: { enabled: true }
    }
  },
  xAxis: {
    type: 'datetime',
    dateTimeLabelFormats: { second: '%H:%M:%S' }
  },
  yAxis: {
    title: { text: 'Humidity (%)' }
  },
  credits: { enabled: false }
})

// Create Humidity Soil Gauge
var gaugeHumSoil = new RadialGauge({
  renderTo: 'gauge-humidity-soil',
  width: 300,
  height: 300,
  units: "Humedad (%)",
  minValue: 0,
  maxValue: 100,
  colorValueBoxRect: "#049faa",
  colorValueBoxRectEnd: "#049faa",
  colorValueBoxBackground: "#f1fbfc",
  valueInt: 2,
  majorTicks: [
      "0",
      "20",
      "40",
      "60",
      "80",
      "100"

  ],
  minorTicks: 4,
  strokeTicks: true,
  highlights: [
      {
          "from": 80,
          "to": 100,
          "color": "#03C0C1"
      }
  ],
  colorPlate: "#fff",
  borderShadowWidth: 0,
  borders: false,
  needleType: "line",
  colorNeedle: "#007F80",
  colorNeedleEnd: "#007F80",
  needleWidth: 2,
  needleCircleSize: 3,
  colorNeedleCircleOuter: "#007F80",
  needleCircleOuter: true,
  needleCircleInner: false,
  animationDuration: 1500,
  animationRule: "linear"
}).draw();

// Create Humidity Soil Chart
var chartHS = new Highcharts.Chart({
  chart:{ renderTo:'chart-humidity-soil' },
  title: { text: 'Humedad del Suelo' },
  series: [{
    showInLegend: false,
    data: []
  }],
  plotOptions: {
    line: { animation: false,
      dataLabels: { enabled: true }
    },
    series: { color: '#18009c' }
  },
  xAxis: {
    type: 'datetime',
    dateTimeLabelFormats: { second: '%H:%M:%S' }
  },
  yAxis: {
    title: { text: 'Humedad (%)' }
  },
  credits: { enabled: false }
});

// Plot temperature in the temperature chart
function plotTemperature(jsonValue) {

  var keys = Object.keys(jsonValue);
  console.log(keys);
  console.log(keys.length);

    var x = (new Date()).getTime();
    console.log(x);
    const key = keys[0];
    var y = Number(jsonValue[key]);
    console.log(y);

    if(chartTemp.series[0].data.length > 40) {
      chartTemp.series[0].addPoint([x, y], true, true, true);
    } else {
      chartTemp.series[0].addPoint([x, y], true, false, true);
    }
}

// Plot humidity in the humidity chart
function plotHumidity(jsonValue) {

  var keys = Object.keys(jsonValue);
  console.log(keys);
  console.log(keys.length);

  //for (var i = 0; i < keys.length; i++){
    var x = (new Date()).getTime();
    console.log(x);
    const key = keys[1];
    var y = Number(jsonValue[key]);
    console.log(y);

    if(chartH.series[0].data.length > 40) {
      chartH.series[0].addPoint([x, y], true, true, true);
    } else {
      chartH.series[0].addPoint([x, y], true, false, true);
    }

  //}
}

// Plot humidity soil in the humidity soil chart
function plotHumiditySoil(jsonValue) {

  var keys = Object.keys(jsonValue);
  console.log(keys);
  console.log(keys.length);

  //for (var i = 0; i < keys.length; i++){
    var x = (new Date()).getTime();
    console.log(x);
    const key = keys[2];
    var y = Number(jsonValue[key]);
    console.log(y);

    if(chartHS.series[0].data.length > 40) {
      chartHS.series[0].addPoint([x, y], true, true, true);
    } else {
      chartHS.series[0].addPoint([x, y], true, false, true);
    }

  //}
}

// Function to get current readings on the webpage when it loads for the first time
function getReadings(){
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      //var x = (new Date()).getTime(); 
      var myObj = JSON.parse(this.responseText);
      console.log(myObj);
      plotTemperature(myObj)
      plotHumidity(myObj);
      plotHumiditySoil(myObj);
      var temp = myObj.temperature;
      var hum = myObj.humidity;
      var humSoil = myObj.humiditySoil;
      gaugeTemp.value = temp;
      gaugeHum.value = hum;
      gaugeHumSoil.value = humSoil;
      //chartTemp.value = x;
    }
  }; 
  xhr.open("GET", "/readings", true);
  xhr.send();
}

if (!!window.EventSource) {
  var source = new EventSource('/events');
  
  source.addEventListener('open', function(e) {
    console.log("Events Connected");
  }, false);

  source.addEventListener('error', function(e) {
    if (e.target.readyState != EventSource.OPEN) {
      console.log("Events Disconnected");
    }
  }, false);
  
  source.addEventListener('message', function(e) {
    console.log("message", e.data);
  }, false);
  
  source.addEventListener('new_readings', function(e) {
    console.log("new_readings", e.data);
    var myObj = JSON.parse(e.data);
    console.log(myObj);
    plotTemperature(myObj);
    plotHumidity(myObj);
    plotHumiditySoil(myObj);
    gaugeTemp.value = myObj.temperature;
    gaugeHum.value = myObj.humidity;
    gaugeHumSoil.value = myObj.humiditySoil;
  }, false);
}