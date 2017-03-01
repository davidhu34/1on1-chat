const initMessages = {
	a: {
		id: '11',
		user: 'Luke',
		message: 'hi Han'
	},
	b: {
		id: '12',
		user: 'Han',
		message: 'hey Luke'
	},
	c: {
		id: '13',
		user: 'Luke',
		message: 'how\'s it going'
	}
}

export const messages = ( state = initMessages, action ) => {
    switch ( action.type ) {
        case 'NEW_MESSAGE':
            return {
				...state,
				[action.id]: {
					id: action.id,
					user: action.user,
					message: action.message
				}
			}
        default:
            return state
    }
}
