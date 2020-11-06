# Fast Weather

Fast-Weather is an easy to use module with no api key!

# Installation

```bash
npm i @abh78989/fast-weather
```

# Quick Intro

- searching

```js
const weather = require("@abh78989/fast-weather");
weather.search("chicago").then(console.log);
/*
Search {
  results: [
    SearchRes {
      address: 'Chicago, Illinois, United States',
      district: [Object],
      city: 'Chicago',
      country: [Object],
      name: 'Chicago',
      timezone: 'America/Chicago',
      latitude: 41.876,
      postalCode: '60605',
      iataCode: 'MDW',
      icaoCode: 'KMDW'
    }
  ]
}
*/
//example is shortened
```
- Getting Weather
```js
const weather = require("@abh78989/fast-weather");
Weather.search("chicago").then(x=>x.results[0].weather().then(console.log))
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
```
# Note
Please use languages to specify fahrenheit or celcius by default language is set to `en-GB` for celsius you can use `en-US` for fahrenheit

- Example 
```js
Weather.search("chicago",{language : "en-US"})
```

#
```
source : Weather.com
```