const initRooms = {
	rooms: {
		'watsonroom': {
			id: 'watsonroom',
			users: ['Luke', 'watson'],
			messages: ['11', '12', '13']
		}
	},
	currentRoom: 'watsonroom'
}

const room = (state, action) => {
	switch (action.type) {
		case 'NEW_MESSAGE':
			const id = action.room
			return {
				...state,
				messages: [...state.messages, '14']
			}
		default:
			return state
	}
}
const rooms = (state, action) => {
	switch (action.type) {
		case 'NEW_MESSAGE':
			const id = action.room
			return {
				...state,
				[id]: room(state[id], action)
			}
		default:
			return state
	}
}
export const roomData = (state = initRooms, action) => {
	const { currentRoom } = state
	switch (action.type) {
		case 'NEW_MESSAGE':
			return (action.room === currentRoom)? {
				...state,
				rooms: rooms(state.rooms, action)
			} : state  
		default:
			return state
	}
}