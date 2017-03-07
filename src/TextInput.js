import React, { PropType, Component } from 'react'
import { connect } from 'react-redux'
import Send from 'react-icons/lib/md/send'

import { newMessage } from './actions'

const TextInput = ({ userID, roomID,
	newMessage
}) => {
	let input
	return <div>
		<table style={{width:'100%'}}>
		<tr>
		<td>
			<textarea ref={ref => { input = ref }}
			placeholder="write message"
			style={{
				width: '100%',
				row: 1.5,
				fontSize: 20,
				resize: 'none',
				overflow: 'hidden'
			}} >
		</textarea>
		</td><td width="60">
			<div style={{
				}}
				onClick={ () => { console.log(input.value)
					newMessage({
						sender: userID,
						room: roomID,
						message: input.value
					})
				}}
			>
				<Send />
			</div>
		</td>
		</tr></table>
	</div>
}


export default connect(
	({ User, Room }) => ({
		userID: User.currentUser,
		roomID: Room.currentRoom
	}),
	dispatch => ({
		newMessage:
			(msg) => dispatch(newMessage(msg))
	})
)(TextInput)