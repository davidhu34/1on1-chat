import React, { PropTypes } from 'react'

const Message = ({ message, user, style}) => {
	const float = user ==='Luke'? 'right': 'left'
    return <li style={style} >
    <div style = {{ float }} >
		{ user + ': ' + message }
	</div>
	</li>
}

Message.propTypes = {
    message: PropTypes.string.isRequired,
    user: PropTypes.string.isRequired
}

export default Message
