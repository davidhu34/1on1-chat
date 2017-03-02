import React, { Component, PropTypes } from 'react'
import { TransitionMotion, spring } from 'react-motion'

import Message from './Message'

const MessageList = ({ messages }) => {
	/*<ul> {
		messages.map( msg =>
			<Message key={msg.id}
				{...msg}
			/>
		)}
	</ul>*/console.log('wtf')
	const styles = Object.keys(messages).map( id => ({
		key: id,
		style: {borderWidth: spring(50)},
		data: messages[id]
	}))
	const defaults = Object.keys(messages).map( id => ({
		key: id,
		style: { borderWidth: 0 },
		data: messages[id]
	}))
	const willEnter = () => ({ borderWidth: 0 })

	return <TransitionMotion
			willEnter={willEnter}
			defaultStyles={defaults}
			styles={styles} >
			{ styles => <ul>
				{ styles.map( ({ key, style, data }) =>
				    <Message key={key}
						{...messages[key]}
						style={{
							borderColor: 'black',
							borderStyle: 'solid',
							...style
				    	}} />
				)}
			</ul> }
		</TransitionMotion>
}

MessageList.propTypes = {
	messages: PropTypes.arrayOf(
		Message.propTypes ).isRequired,
}

export default MessageList
