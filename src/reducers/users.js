const initUsers = {
	users : {
		'watson': {
			id: 'watson',
			name: 'Watson',
			status: 'online'
		},
		'Luke': {
			id: 'Luke',
			name: 'Luke',
			status: 'online'
		},
		'Han': {
			id: 'Han',
			name: 'Han',
			status: 'offline'
		}
	},
	currentUser: 'Luke'
}

export const userData = (state = initUsers, action) => {
	switch (action.type) {
		default:
			return state
	}
}