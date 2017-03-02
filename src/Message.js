import React, { PropTypes } from 'react'

const Message = ({ message, user, style}) => {
	const float = user ==='Luke'? 'right': 'left'
    return <div style={style} >
	    <div style = {{ float,
			borderRadius:25,
			color: 'white',
			backgroundColor: 'blue',
			padding: 10
		}} >
		{ user + ': ' + message }
		</div>
	</div>
}

Message.propTypes = {
    message: PropTypes.string.isRequired,
    user: PropTypes.string.isRequired
}

export default Message
