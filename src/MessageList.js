import React, { Component, PropTypes } from 'react'
import { TransitionMotion, spring } from 'react-motion'

import Message from './Message'

const MessageList = ({ messages }) => {

	const styles = Object.keys(messages).map( id => ({
		key: id,
		style: {
			borderWidth: spring(5),
			opacity: spring(1)
		},
		data: messages[id]
	}))
	const defaults = Object.keys(messages).map( id => ({
		key: id,
		style: {
			borderWidth: 0,
			opacity: 0
		},
		data: messages[id]
	}))
	const willEnter = () => ({
		borderWidth: 0,
		opacity: 0
	})

	return <TransitionMotion
			willEnter={willEnter}
			defaultStyles={defaults}
			styles={styles} >
			{ styles => <div>
				{ styles.map( ({ key, style, data }) =>
				    <Message key={key}
						{...messages[key]}
						style={{
							overflow: 'auto',
							clear:'both',
							borderColor: 'white',
							borderStyle: 'solid',
							...style
				    	}} />
				)}
			</div> }
		</TransitionMotion>
}

MessageList.propTypes = {
	messages: PropTypes.arrayOf(
		Message.propTypes ).isRequired,
}

export default MessageList
