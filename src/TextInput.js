import React, { PropType, Component } from 'react'
import { connect } from 'react-redux'
import Send from 'react-icons/lib/md/send'

import { newMessage } from './actions'

const TextInput = ({ userID, roomID,
	newMessage
}) => {
	const sendIconStyle = {
		size: 20,
		color: 'Navy'
	}
	let input
	return <div>
		<table style={{
			width:'100%',
			border: '1px solid black'
		}}><tbody><tr>
		<td>
			<textarea ref={ref => { input = ref }}
			placeholder="write message"
			style={{
				width: '100%',
				row: 1.5,
				fontSize: 20,
				resize: 'none',
				border: 'none',
				outline: 'none',
				overflow: 'hidden'
			}} >
		</textarea>
		</td><td //width="60"
			style={{
				textAlign: 'center',
				width: 60,
				height: '100%'
			}}
			onClick={ () => { console.log(input.value)
				newMessage({
					sender: userID,
					room: roomID,
					message: input.value
				})
			}}
		>
			<Send {...sendIconStyle}/>
		</td>
		</tr></tbody></table>
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