import React, { PropType, Component } from 'react'
import { connect } from 'react-redux'
import Send from 'react-icons/lib/md/send'

import TextField from 'material-ui/TextField'

import { updateMessage, newMessage } from './actions'

const TextInput = ({ userID, roomID, writing,
	updateMessage, newMessage
}) => {
	const sendIconStyle = {
		size: 20,
		color: 'Navy'
	}
	let input
	return <div>
		<table style={{
			width:'100%',
			border: '1px solid Navy',
			WebKitScrollbar: {
				width:20
			}
		}}><tbody><tr>
		<td>
			<TextField
				style={{
					fontSize: 20
				}}
				hintText="write message ..."
				fullWidth={true}
				multiLine={true}
				rowsMax={4}
				underlineShow={false}
				onChange={ (e) => {
					updateMessage({
						sender: userID,
						room: roomID,
						message: e.target.value
					})
				}}
				value={writing}
			/>
		</td><td //width="60"
			style={{
				textAlign: 'center',
				width: 60,
				height: '100%'
			}}
			onClick={ (e) => { //console.log(input.value)
				newMessage({
					sender: userID,
					room: roomID,
					message: writing
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
		roomID: Room.currentRoom,
		writing: Room.rooms[Room.currentRoom].writing
	}),
	dispatch => ({
		newMessage:
			(msg) => dispatch(newMessage(msg)),
		updateMessage:
			(msg) => dispatch(updateMessage(msg))
	})
)(TextInput)