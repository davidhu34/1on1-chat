import React, { PropTypes } from 'react'

const Message = ({ message, sender, style}) => {
	const float = sender ==='Luke'? 'right': 'left'
    return <div style={style} >
	    <div style = {{ float,
			borderRadius:25,
			color: 'white',
			backgroundColor: 'blue',
			padding: 10
		}} >
		{ sender + ': ' + message }
		</div>
	</div>
}

Message.propTypes = {
    message: PropTypes.string.isRequired,
    sender: PropTypes.string.isRequired
}

export default Message
