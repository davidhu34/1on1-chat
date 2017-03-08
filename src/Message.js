import React, { PropTypes } from 'react'
import { TransitionMotion, spring } from 'react-motion'
import moment from 'moment'


const Message = ({ style,
	local_id, message, sender, time
}) => {
	const float = sender ==='Luke'?
		'right': 'left'

	const selfMsgStyle = sender ==='Luke'
		? {
			backgroundColor: 'SteelBlue'
		} : {
			backgroundColor: 'RoyalBlue'
		}
	const main = <td>
		<div style = {{ ...selfMsgStyle,
				wordBreak: 'break-all',
		    	fontSize: '20',
				color: 'white',
				borderRadius: 30,
				padding: 20,
				display: 'inline-block'
			}} >
			{ sender + ': '}
			{ message.split('\n').map( line =>
				line? <span>{line}<br/></span> : <span/>
			)}
		</div>
	</td>
	const timeTag = <td
		style={{
			color: 'RoyalBlue',
		}}>
		{moment(time).format()}
	</td>
    const cell = sender ==='Luke'?
		[timeTag,main]:[main,timeTag]
	
    return <div style={style}>
    <table style={{width:'100%'}}><tbody>
    	<tr style={{
    		maxWidth: '80%',
    		float: float,
    		align: float
    	}} >
    		{cell}
    	</tr>
    </tbody></table></div>
}

Message.propTypes = {
    message: PropTypes.string.isRequired,
    sender: PropTypes.string.isRequired
}

export default Message
