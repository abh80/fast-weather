const Weather = require("../index")
//Weather.search("chicago").then(console.log)
Weather.search("chicago",{language:"en-US"}).then(x=>x.results[0].weather().then(console.log(c)))
/*
Weather {
  temperature: '12°',
  feelsLike: '11°',
  sunriseTime: '06:29',
  sunsetTime: '16:37',
  highest: '22°',
  lowest: '11°',
  windSpeed: '8 km/h',
  humidity: '67%',
  dewPoint: '6°',
  pressure: '1021.3 mb',
  UVIndex: '0 of 10',
  visibiliy: 'Unlimited',
  moonPhase: 'Waning Gibbous',
  AirQualityIndex: '43'
}
*/