import mqtt from 'mqtt'

import  { url, opt } from '../configs/mqtt'


const iot_client = mqtt.connect(url, opts);


iot_client.on('connect', function() {
	  console.log('web client connected to IBM IoT Cloud.');
  }
);
iot_client.subscribe('iot-2/cmd/+/fmt/+', function(err, granted){
	console.log('subscribed command, granted: '+ JSON.stringify(granted));
});
iot_client.on('message', (t,p)=>{console.log('t:',t, 'p:',p)})

export default iot_client
