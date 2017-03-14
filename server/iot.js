const mqtt = require('mqtt')
const { MQTT } = require('./configs')

const iot_client = mqtt.connect(MQTT.url, MQTT.opts);

iot_client.on('connect', function() {
	  console.log('web client connected to IBM IoT Cloud.');
  }
);
iot_client.subscribe('iot-2/cmd/+/fmt/+', function(err, granted){
	console.log('subscribed command, granted: '+ JSON.stringify(granted));
});

module.exports = iot_client
