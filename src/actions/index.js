export const Add = () => ({
    type: 'ADD'
})

export const newMessage = (msg) => ({
    type: 'NEW_MESSAGE',
    ...msg
})
