class Weather {
  constructor($) {
    this.temperature = $(".CurrentConditions--tempValue--3KcTQ").text();
    this.feelsLike = $(".TodayDetailsCard--feelsLikeTempValue--2aogo").text();
    this._initialize($);
    this.AirQualityIndex = $(".DonutChart--innerValue--k2Z7I").text()
  }
  _initialize($) {
    const c = this;
    $(".SunriseSunset--dateValue--2nwgx").each(function (i, elem) {
      i === 0
        ? (c.sunriseTime = $(this).text())
        : (c.sunsetTime = $(this).text());
    });
    $(".WeatherDetailsListItem--wxData--23DP5").each(function (i, elem) {
      switch (i) {
        case 0:
          c.highest = $(this).text().split("/")[0];
          c.lowest = $(this).text().split("/")[1];
          break;
        case 1:
          c.windSpeed = $(this).text();
          break;
        case 2:
          c.humidity = $(this).text();
          break;
        case 3:
          c.dewPoint = $(this).text();
          break;
        case 4:
          c.pressure = $(this).text();
          break;
        case 5:
          c.UVIndex = $(this).text();
          break;
        case 6:
          c.visibiliy = $(this).text();
          break;
        case 7:
          c.moonPhase = $(this).text();
          break;
      }
    });
  }
}
module.exports = Weather;
