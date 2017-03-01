import React, { Component, PropTypes } from 'react'

import Message from './Message'

const MessageList = ({ messages }) => (
	<ul> {
		messages.map( msg =>
			<Message key={msg.id}
				{...msg}
			/>
		)}
	</ul>
)

MessageList.propTypes = {
	messages: PropTypes.arrayOf(
		Message.propTypes ).isRequired,
}

export default MessageList