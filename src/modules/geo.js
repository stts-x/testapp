/**
 * Created by stts on 24.05.17.
 */
var PluginPage = require('./PluginPage');
let page = new PluginPage('geo','cordova-plugin-geolocation',(parent)=>{
    var watchID = '';
    console.log(parent);
    var buttonWatch = new tabris.Button({
        left: 10, top: 10, right: 10,
        text: 'Start Watch Geolocation'
    }).appendTo(parent).on('select',()=>{
        /*let onSuccess = (navigator)=>{
         textView.text = 'location : '
         };
         let onError = function() {
         console.log('onError!');
         };*/
        var onSuccess = function(position) {
            textView.text='Latitude: '          + position.coords.latitude          + '\n' +
                'Longitude: '         + position.coords.longitude         + '\n' +
                'Altitude: '          + position.coords.altitude          + '\n' +
                'Accuracy: '          + position.coords.accuracy          + '\n' +
                'Altitude Accuracy: ' + position.coords.altitudeAccuracy  + '\n' +
                'Heading: '           + position.coords.heading           + '\n' +
                'Speed: '             + position.coords.speed             + '\n' +
                'Timestamp: '         + position.timestamp                + '\n';
        };

        // onError Callback receives a PositionError object
        //
        function onError(error) {
            alert('code: '    + error.code    + '\n' +
                'message: ' + error.message + '\n');
        }
        console.log(navigator);
        navigator.geolocation.getCurrentPosition(onSuccess, onError);
    });
});

/*var page = new PluginPage('Motion', 'cordova-plugin-device-motion', function(parent) {

    var watchID = '';
    console.log(parent);
    var buttonWatch = new tabris.Button({
        left: 10, top: 10, right: 10,
        text: 'Start Watch Acceleration'
    }).appendTo(parent).on('select', function() {
        var onSuccess = function(acceleration) {
            textView.text = 'Acceleration X: ' + acceleration.x + '\n' +
                'Acceleration Y: ' + acceleration.y + '\n' +
                'Acceleration Z: ' + acceleration.z + '\n' +
                'Timestamp: '      + acceleration.timestamp + '\n';
        };

        var onError = function() {
            console.log('onError!');
        };

        var options = {frequency: 700};  // Update every 700ms

        watchID = navigator.accelerometer.watchAcceleration(onSuccess, onError, options);
    });

    var buttonStopWatch = new tabris.Button({
        left: 10, top: [buttonWatch, 10], right: 10,
        text: 'Stop Watch Acceleration'
    }).appendTo(parent).on('select', function() {
        navigator.accelerometer.clearWatch(watchID);
    });

    var textView = new tabris.TextView({
        top: [buttonStopWatch, 20], left: 20, right: 20
    }).appendTo(parent);
});*/

module.exports = page;