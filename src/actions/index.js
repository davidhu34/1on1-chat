import messageHash from '../utils/localMessageHash'

export const Add = () => ({
    type: 'ADD'
})

export const newMessage = (msg) => {
	const id = messageHash(msg)
	return {
		type: 'NEW_MESSAGE',
		local_id: id,
		...msg
	}
}
