import React, { PropTypes } from 'react'

const Message = ({ message, sender, style }) => {
	const selfMsgStyle = sender ==='Luke'
		? {
			float: 'right',
			backgroundColor: 'SteelBlue'
		} : {
			float: 'left',
			backgroundColor: 'RoyalBlue'
		}
    return <div style={style} >
	    <div style = {{ ...selfMsgStyle,
	    	fontSize: '20',
			color: 'white',
			borderRadius: 30,
			padding: 20
		}} >
		{ sender + ': '}
		{ message.split('\n').map( line =>
			line? <span>{line}<br/></span> : <span/>
		)}
		</div>
	</div>
}

Message.propTypes = {
    message: PropTypes.string.isRequired,
    sender: PropTypes.string.isRequired
}

export default Message
