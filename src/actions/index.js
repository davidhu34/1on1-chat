//import iot_client from './iot'
import messageHash from '../utils/localMessageHash'
import { newMsg } from './api'

export const updateMessage = (msg) => ({
	type: 'UPDATE_MESSAGE',
	...msg
})

export const newMessage = (msg) => (dispatch) => {
	const id = messageHash(msg)
	dispatch({
		type: 'NEW_MESSAGE',
		local_id: id,
		...msg
	})
	newMsg({
		local_id: id,
		...msg
	})
}

export const toggleOpen = ({anchor, open}) => ({
	type: 'TOGGLE_OPEN',
	anchor, open
})

export const Add = () => {
	return {
	    type: 'ADD'
	}
}
