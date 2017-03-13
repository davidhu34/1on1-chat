import { connect } from 'react-redux'

import MessageList from './MessageList'

export default connect(
    ({ Message, Room, User }) => {
    	const room = Room.rooms[Room.currentRoom]
    	const msgs = room.messages
    		.map( id => Message.messages[id] )
		return {
			messages: msgs
		}
	}
)( MessageList )
