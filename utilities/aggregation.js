// 平均氣溫
var avg_temp = (arr) => {
  var sum = 0;
  var count = 0;
  for(var idx in arr) {
    if(parseInt(arr[idx][3].elementValue) > 0 && parseInt(arr[idx][0].elementValue) < 400){
      sum += parseInt(arr[idx][3].elementValue);
      count+=1;
    }
  }

  return (sum / count).toFixed(0);
}

// 最高氣溫
var max_temp = (arr) => {
  var num = [];
  for(var idx in arr) {
    if(parseInt(arr[idx][10].elementValue) > 0 && parseInt(arr[idx][0].elementValue) < 400){
      num.push(parseFloat(arr[idx][10].elementValue));
    }
  }

  return Math.max(...num).toFixed(0);
}

// 最低氣溫
var min_temp = (arr) => {
  var num = [];
  for(var idx in arr) {
    if(parseInt(arr[idx][12].elementValue) > 0 && parseInt(arr[idx][0].elementValue) < 400){
      num.push(parseFloat(arr[idx][12].elementValue));
    }
  }
  
  return Math.min(...num).toFixed(0);
}

// 平均濕度
var avg_humd = (arr) => {
  var sum = 0;
  for(var idx in arr) {
    if(arr[idx][4].elementValue != '-99'){
      sum += parseFloat(arr[idx][4].elementValue);
    }
  }

  return (sum / arr.length).toFixed(2) * 100;
}

// 平均風速
var avg_wdsd = (arr) => {
  var sum = 0;
  for(var idx in arr) {
    if(arr[idx][2].elementValue != '-99'){
      sum += parseFloat(arr[idx][2].elementValue);
    }
  }
  
  return (sum / arr.length).toFixed(2);
}

module.exports = {
  avg_temp: avg_temp,
  max_temp: max_temp,
  min_temp: min_temp,
  avg_humd: avg_humd,
  avg_wdsd: avg_wdsd
};
