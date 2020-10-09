var request = require('request');
var aggregation =  require('../utilities/aggregation');
var weather_api = require('../utilities/weather_api');
var cron = require('node-cron');

var schedular_task = () => {
    cron.schedule('* * * * *', () => {
        console.log("latest weather data stored in firebase every minute.");
        var options = {
          'method': 'GET',
          'url': 'https://opendata.cwb.gov.tw/api/v1/rest/datastore/O-A0001-001?Authorization=CWB-BE9C772C-80C8-4293-8795-7ED7DCD144EB&parameterName%EF%BC%8C=CITY\n',
        };
        request(options, function (error, response) {
          if (error) throw new Error(error);
          var data = JSON.parse(response.body);
          var taipei = [];
          var new_taipei = [];
          var taoyuan = [];
    
          for(var loc in data.records.location){
            if(data.records.location[loc].parameter[0].parameterValue == '臺北市'){
              taipei.push(data.records.location[loc].weatherElement);
            }else if(data.records.location[loc].parameter[0].parameterValue == '新北市'){
              new_taipei.push(data.records.location[loc].weatherElement);
            }else if(data.records.location[loc].parameter[0].parameterValue == '桃園市'){
              taoyuan.push(data.records.location[loc].weatherElement);
            }
          }
    
          weather_api.store_api_data_to_db('taipei',
            data.records.location[0].time.obsTime,
            {
              avg_temp: aggregation.avg_temp(taipei),
              max_temp: aggregation.max_temp(taipei),
              min_temp: aggregation.min_temp(taipei),
              avg_humd: aggregation.avg_humd(taipei),
              avg_wdsd: aggregation.avg_wdsd(taipei)
            }
          );
          weather_api.store_api_data_to_db('new_taipei',
            data.records.location[0].time.obsTime,
            {
              avg_temp: aggregation.avg_temp(new_taipei),
              max_temp: aggregation.max_temp(new_taipei),
              min_temp: aggregation.min_temp(new_taipei),
              avg_humd: aggregation.avg_humd(new_taipei),
              avg_wdsd: aggregation.avg_wdsd(new_taipei)
            }
          );
          weather_api.store_api_data_to_db('taoyuan',
            data.records.location[0].time.obsTime,
            {
              avg_temp: aggregation.avg_temp(taoyuan),
              max_temp: aggregation.max_temp(taoyuan),
              min_temp: aggregation.min_temp(taoyuan),
              avg_humd: aggregation.avg_humd(taoyuan),
              avg_wdsd: aggregation.avg_wdsd(taoyuan)
            }
          );
        });
    });
}

module.exports = schedular_task;