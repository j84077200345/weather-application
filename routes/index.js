var express = require('express');
var router = express.Router();
var firebaseAdmin = require('../firebase/firebase_admin');
var schedular = require('../utilities/schedular');

schedular();

/* GET home page. */
router.get('/', function(req, res) {

  const ref = firebaseAdmin.ref('/');
  ref.once('value', function(snapshot) {
    
    res.render('index', {
      taipei: {
        time: Object.keys(snapshot.val()['taipei'])[Object.keys(snapshot.val()['taipei']).length-1],
        avg_temp: snapshot.val()['taipei'][Object.keys(snapshot.val()['taipei'])[Object.keys(snapshot.val()['taipei']).length-1]]['avg_temp'],
        max_temp: snapshot.val()['taipei'][Object.keys(snapshot.val()['taipei'])[Object.keys(snapshot.val()['taipei']).length-1]]['max_temp'],
        min_temp: snapshot.val()['taipei'][Object.keys(snapshot.val()['taipei'])[Object.keys(snapshot.val()['taipei']).length-1]]['min_temp'],
        avg_humd: snapshot.val()['taipei'][Object.keys(snapshot.val()['taipei'])[Object.keys(snapshot.val()['taipei']).length-1]]['avg_humd'],
        avg_wdsd: snapshot.val()['taipei'][Object.keys(snapshot.val()['taipei'])[Object.keys(snapshot.val()['taipei']).length-1]]['avg_wdsd']
      },
      new_taipei: {
        time: Object.keys(snapshot.val()['new_taipei'])[Object.keys(snapshot.val()['new_taipei']).length-1],
        avg_temp: snapshot.val()['new_taipei'][Object.keys(snapshot.val()['new_taipei'])[Object.keys(snapshot.val()['new_taipei']).length-1]]['avg_temp'],
        max_temp: snapshot.val()['new_taipei'][Object.keys(snapshot.val()['new_taipei'])[Object.keys(snapshot.val()['new_taipei']).length-1]]['max_temp'],
        min_temp: snapshot.val()['new_taipei'][Object.keys(snapshot.val()['new_taipei'])[Object.keys(snapshot.val()['new_taipei']).length-1]]['min_temp'],
        avg_humd: snapshot.val()['new_taipei'][Object.keys(snapshot.val()['new_taipei'])[Object.keys(snapshot.val()['new_taipei']).length-1]]['avg_humd'],
        avg_wdsd: snapshot.val()['new_taipei'][Object.keys(snapshot.val()['new_taipei'])[Object.keys(snapshot.val()['new_taipei']).length-1]]['avg_wdsd']
      },
      taoyuan: {
        time: Object.keys(snapshot.val()['taoyuan'])[0],
        avg_temp: snapshot.val()['taoyuan'][Object.keys(snapshot.val()['taoyuan'])[Object.keys(snapshot.val()['taoyuan']).length-1]]['avg_temp'],
        max_temp: snapshot.val()['taoyuan'][Object.keys(snapshot.val()['taoyuan'])[Object.keys(snapshot.val()['taoyuan']).length-1]]['max_temp'],
        min_temp: snapshot.val()['taoyuan'][Object.keys(snapshot.val()['taoyuan'])[Object.keys(snapshot.val()['taoyuan']).length-1]]['min_temp'],
        avg_humd: snapshot.val()['taoyuan'][Object.keys(snapshot.val()['taoyuan'])[Object.keys(snapshot.val()['taoyuan']).length-1]]['avg_humd'],
        avg_wdsd: snapshot.val()['taoyuan'][Object.keys(snapshot.val()['taoyuan'])[Object.keys(snapshot.val()['taoyuan']).length-1]]['avg_wdsd']
      }
    });
  })
  
});

router.get('/:location', function(req, res) {
  const loc = req.params.location;
  const ref = firebaseAdmin.ref('/' + loc);
  ref.once('value', function(snapshot){
    var time = [];
    var temp = [];
    for(var item in snapshot.val()){
      temp.push(parseInt(snapshot.val()[item].avg_temp));
      time.push(item);
    }

    res.render('history', {
      location: loc,
      data: snapshot.val(),
      plot_time: time,
      plot_temp: temp
    });
  });
});

module.exports = router;
