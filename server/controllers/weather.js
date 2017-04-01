import unirest from 'unirest';

const apiKey = '06441ace6a91d11f';
const apiKeyPete = '1ff03b245deee1f8';

export function getWeatherByLatLon(req, res, next) {
  const lat = 37.7911137;
  const lon = -122.41570489999998;
  const reqString =
    'http://api.wunderground.com/api/'
    + apiKey + '/conditions/q/'
    + lat + ',' + lon + '.json';
    // console.log('lat + lon', req.body.lat, req.body.lon);

  var Request = unirest.get(reqString)
    .type('json')
    .end(response => {
      res.json(response.body).end();
    });
  // const weather = { response:
  //  { version: '0.1',
  //    termsofService: 'http://www.wunderground.com/weather/api/d/terms.html',
  //    features: { conditions: 1 } },
  // current_observation:
  //  { image:
  //     { url: 'http://icons.wxug.com/graphics/wu2/logo_130x80.png',
  //       title: 'Weather Underground',
  //       link: 'http://www.wunderground.com' },
  //    display_location:
  //     { full: 'San Francisco, CA',
  //       city: 'San Francisco',
  //       state: 'CA',
  //       state_name: 'California',
  //       country: 'US',
  //       country_iso3166: 'US',
  //       zip: '94108',
  //       magic: '1',
  //       wmo: '99999',
  //       latitude: '37.790000',
  //       longitude: '-122.410000',
  //       elevation: '57.9' },
  //    observation_location:
  //     { full: 'Russian Hill at Broadway, San Francisco, California',
  //       city: 'Russian Hill at Broadway, San Francisco',
  //       state: 'California',
  //       country: 'US',
  //       country_iso3166: 'US',
  //       latitude: '37.795799',
  //       longitude: '-122.418526',
  //       elevation: '233 ft' },
  //    estimated: {},
  //    station_id: 'KCASANFR989',
  //    observation_time: 'Last Updated on March 31, 5:45 PM PDT',
  //    observation_time_rfc822: 'Fri, 31 Mar 2017 17:45:07 -0700',
  //    observation_epoch: '1491007507',
  //    local_time_rfc822: 'Fri, 31 Mar 2017 17:45:24 -0700',
  //    local_epoch: '1491007524',
  //    local_tz_short: 'PDT',
  //    local_tz_long: 'America/Los_Angeles',
  //    local_tz_offset: '-0700',
  //    weather: 'Clear',
  //    temperature_string: '73.1 F (22.8 C)',
  //    temp_f: 73.1,
  //    temp_c: 22.8,
  //    relative_humidity: '35%',
  //    wind_string: 'From the NW at 2.0 MPH',
  //    wind_dir: 'NW',
  //    wind_degrees: 315,
  //    wind_mph: 2,
  //    wind_gust_mph: 0,
  //    wind_kph: 3.2,
  //    wind_gust_kph: 0,
  //    pressure_mb: '1013',
  //    pressure_in: '29.91',
  //    pressure_trend: '-',
  //    dewpoint_string: '44 F (7 C)',
  //    dewpoint_f: 44,
  //    dewpoint_c: 7,
  //    heat_index_string: 'NA',
  //    heat_index_f: 'NA',
  //    heat_index_c: 'NA',
  //    windchill_string: 'NA',
  //    windchill_f: 'NA',
  //    windchill_c: 'NA',
  //    feelslike_string: '73.1 F (22.8 C)',
  //    feelslike_f: '73.1',
  //    feelslike_c: '22.8',
  //    visibility_mi: '10.0',
  //    visibility_km: '16.1',
  //    solarradiation: '--',
  //    UV: '3',
  //    precip_1hr_string: '0.00 in ( 0 mm)',
  //    precip_1hr_in: '0.00',
  //    precip_1hr_metric: ' 0',
  //    precip_today_string: '0.00 in (0 mm)',
  //    precip_today_in: '0.00',
  //    precip_today_metric: '0',
  //    icon: 'clear',
  //    icon_url: 'http://icons.wxug.com/i/c/k/clear.gif',
  //    forecast_url: 'http://www.wunderground.com/US/CA/San_Francisco.html',
  //    history_url: 'http://www.wunderground.com/weatherstation/WXDailyHistory.asp?ID=KCASANFR989',
  //    ob_url: 'http://www.wunderground.com/cgi-bin/findweather/getForecast?query=37.795799,-122.418526',
  //    nowcast: '' } };
  // res.json(weather).end();

}
