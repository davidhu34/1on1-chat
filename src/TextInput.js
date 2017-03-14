import React, { PropType, Component } from 'react'
import { connect } from 'react-redux'
import Send from 'react-icons/lib/md/send'

import TextField from 'material-ui/TextField'

import { updateMessage, newMessage } from './actions'

const TextInput = ({
	userID, roomID, writing,
	updateMessage, newMessage
}) => {
	let input

	const sendNewMessage = () => {
		const text = input.value
		if (text !== '')
			newMessage({
				sender: userID,
				room: roomID,
				message: text,
				time: new Date()
			})
		input.value = ''
	}
	const sendIconStyle = {
		size: 25,
		color: 'Navy'
	}

	return <div style={{
		position: 'absolute',
		bottom: 0
	}}>
		<table style={{
			width:'100%',
			border: 'none',
			borderBottom: '2px solid RoyalBlue',
			WebKitScrollbar: {
				width:20
			}
		}}><tbody><tr style={{
			width: '100%'
		}}>
		<td>
			<textarea ref={ ref => { input = ref } }
				style={{
					fontSize: 20,
					paddingLeft: 10,
					width: '100%',
					height: 'auto',
					overflow: 'hidden',
					resize: 'none',
					border: 'none',
					outline: 'none',
					verticalAlign: 'bottom'
				}}
				placeholder="ask watson..."
				onKeyPress={ (e) => {
					if (e.key === 'Enter' && !e.shiftKey){
					    e.preventDefault()
						sendNewMessage()
					}
				}}>

			</textarea>

		</td><td onClick={ (e) => sendNewMessage() }
			style={{
				textAlign: 'center',
				width: 60,
				height: '100%'
			}} >
			<Send {...sendIconStyle} />
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
/*<TextField
	style={{
		fontSize: 20,
		width: '100%'
	}}
	hintText="write message ..."
	fullWidth={true}
	multiLine={true}
	rowsMax={2}
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
*/
