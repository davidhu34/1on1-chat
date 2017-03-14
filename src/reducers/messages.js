const initMessages = {
	messages: {
		'11': {
			id: '11',
			room: 'watsonroom',
			sender: 'watson',
			time: new Date(),
			message: '嗨我是Watson,很高興認識你!'
		}/*,
		'12': {
			id: '12',
			room: 'watsonroom',
			sender: 'watson',
			time: new Date(3002),
			message: 'hey Luke'
		},
		'13': {
			id: '13',
			room: 'watsonroom',
			sender: 'Luke',
			time: new Date(6010),
			message: 'how\'s it going'
		}*/
	}
}

let count = 13
const messages = ( state, action ) => {
    switch ( action.type ) {
        case 'NEW_MESSAGE':
            return {
				...state,
				[action.local_id]: {
					sender: action.sender,
					room: action.room,
					message: action.message,
					local_id: action.local_id,
					time: action.time
				}
			}
        default:
            return state
    }
}

export const messageData = ( state = initMessages, action ) => {
	const msgs = state.messages
    switch ( action.type ) {
        case 'NEW_MESSAGE':
            return {
				...state,
				messages: messages(msgs, action)
			}
        default:
            return state
    }
}
