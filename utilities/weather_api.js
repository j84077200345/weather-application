var firebaseAdmin = require('../firebase/firebase_admin');

var store_api_data_to_db = (location, time, weather) => {
    const ref = firebaseAdmin.ref(location + '/' + time)
    .update(weather);
}

var get_data_from_db = () => {
    const ref = firebaseAdmin.ref('taipei');
    ref.once('value', function(snapshot){
        console.log(snapshot.val());
    })
}

module.exports = {
    get_data_from_db: get_data_from_db,
    store_api_data_to_db: store_api_data_to_db
}