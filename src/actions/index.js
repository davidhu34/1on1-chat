import messageHash from '../utils/localMessageHash'
import iot_client from './iot'

export const Add = () => {/*
	//IBM iot pub/sub drone navdata

	const iot_server = "j6w08m.messaging.internetofthings.ibmcloud.com";
	const iot_port = 1883;
	const iot_username = "a-j6w08m-xqtafr0bj5";
	const iot_password = "ex?u03ggrwBD+-&VvZ"; //tommywu-iot-lggpad
	const iot_clientid = "a:j6w08m:robot122" + Math.floor(Math.random() * 1000);
	// iotFoundation.CLIENT_ID = 'd:<ORG ID>:WICED-Sense:8675309'; // change this - the format is:  d:<organization>:<device type>:<device ID>

	const iot_client = mqtt.connect("mqtt://j6w08m.messaging.internetofthings.ibmcloud.com:1883",
		{
			"clientId": iot_clientid,
			"keepalive": 30,
			"username": iot_username,
			"password": iot_password
		}
	)
	iot_client.on('connect', function() {
		console.log('Connected to IoT Foundation!')
		iot_client.subscribe("iot-2/type/robot/id/phone02/evt/subtitle/fmt/+",{},
		(err, granted)=>{console.log(er, granted)});
	})*/

	iot_client.publish('iot-2/evt/web/fmt/json', JSON.stringify({d:{"data": "hi"}}) );

	return {
	    type: 'ADD'
	}
}

export const updateMessage = (msg) => ({
	type: 'UPDATE_MESSAGE',
	...msg
})

export const newMessage = (msg) => {
	const id = messageHash(msg)
	return {
		type: 'NEW_MESSAGE',
		local_id: id,
		...msg
	}
}
