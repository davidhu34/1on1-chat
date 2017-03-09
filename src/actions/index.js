import messageHash from '../utils/localMessageHash'

export const Add = () => {
	    //IBM iot pub/sub drone navdata
		var iot_server = "j6w08m.messaging.internetofthings.ibmcloud.com";
		var iot_port = 1883;
		var iot_username = "a-j6w08m-xqtafr0bj5";
		var iot_password = "ex?u03ggrwBD+-&VvZ"; //tommywu-iot-lggpad
		var iot_clientid = "a:j6w08m:vr" + Math.floor(Math.random() * 1000);
		// iotFoundation.CLIENT_ID = 'd:<ORG ID>:WICED-Sense:8675309'; // change this - the format is:  d:<organization>:<device type>:<device ID>

	var	iotf_client = new Messaging.Client(iot_server, iot_port, iot_clientid);
		//iotf_client.onConnectionLost = onConnectionLost;
		//iotf_client.onMessageArrived = onMessageArrived;

		iotf_client.connect({
			timeout: 30,
			userName: iot_username,
			password: iot_password,
			onSuccess: function() {
				console.log('asdfasdf')
			},
			onFailure: function(message) { 
				console.log(message)
			}
		});
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
