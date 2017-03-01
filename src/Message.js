import React, { PropTypes } from 'react'

const Message = ({ message, user }) => {
	const float = user ==='Luke'? 'right': 'left'
    return <li>
    <span style = {{ float }} >
		{ user + ': ' + message }
	</span>
	</li>
}

Message.propTypes = {
    message: PropTypes.string.isRequired,
    user: PropTypes.string.isRequired
}

export default Message
