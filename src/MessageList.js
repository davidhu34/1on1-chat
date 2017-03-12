import React, { Component, PropTypes } from 'react'
import ReactDOM from 'react-dom'
import { TransitionMotion, spring } from 'react-motion'

import Message from './Message'

class MessageList extends Component {
	scrollToBottom (){
		const node = this.refs.scroll
		console.log(node.scrollTop, node.scrollHeight)
		node.scrollTop = node.scrollHeight
		//node.scrollIntoView(false)
		console.log(node.scrollTop, node.scrollHeight)
	}

	componentDidMount() {
	    this.scrollToBottom();
	}

	componentDidUpdate() {
	    this.scrollToBottom();
	}
	render(){
			const { messages } = this.props

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
		console.log(messages)

		return <div ref="scroll"
		style={{
			height:'550',
			width: '100%',
			overflowY: 'scroll',
			position: 'absolute',
			bottom: 50
		}} >
		<TransitionMotion
			willEnter={willEnter}
			defaultStyles={defaults}
			styles={styles} >
			{ styles => <div>
				{ styles.map( ({ key, style, data }) =>
				    <Message key={key}
						{...messages[key]}
						motion={style} />
				)}
			</div> }
		</TransitionMotion>
		</div>
	}
}
MessageList.propTypes = {
	messages: PropTypes.arrayOf(
		Message.propTypes ).isRequired,
}

export default MessageList
