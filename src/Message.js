import React, { PropTypes } from 'react'
import moment from 'moment'

const Message = ({ message, sender, time, style }) => {
	const selfMsgStyle = sender ==='Luke'
		? {
			//float: 'right',
			backgroundColor: 'SteelBlue'
		} : {
			//float: 'left',
			backgroundColor: 'RoyalBlue'
		}
	const main = <td style={{
			//width: '60%',
			wordBreak: 'break-all'
		}}>
	<div style={style} >
	    <div style = {{ ...selfMsgStyle,
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
	</div></td>

	const timeTag = <td style={{
			//width: '40%',
			color: 'RoyalBlue'
		}}>{moment(time).format()}</td>
    const line = sender ==='Luke'?
		[timeTag,main]:[main,timeTag]
	const float = sender ==='Luke'? 'right': 'left'
    return <table style={{width:'100%'}}><tbody>
    <tr style={{float: float}}>
    	{line}
    </tr></tbody></table>
}

Message.propTypes = {
    message: PropTypes.string.isRequired,
    sender: PropTypes.string.isRequired
}

export default Message
