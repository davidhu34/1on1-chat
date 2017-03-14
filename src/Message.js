import React, { PropTypes } from 'react'
import { TransitionMotion, spring } from 'react-motion'
import moment from 'moment'


const Message = ({ motion,
	local_id, message, sender, time
}) => {
	const styles = [{
		key: local_id,
		style: {
			opacity: spring(1)
		},
		data: message
	}]
	const defaults =[{
		key: local_id,
		style: {
			opacity: 0
		},
		data: message
	}]
	const willEnter = () => ({
		opacity: 0
	})
	const fromSelf = sender ==='Luke'
	const float = fromSelf? 'right': 'left'
	const msgStyle = fromSelf? {
			backgroundColor: 'SteelBlue'
		} : {
			backgroundColor: 'RoyalBlue'
		}
	const main = <td>
		<div style = {{ ...msgStyle,
				wordBreak: 'break-all',
		    	fontSize: 15,
				color: 'white',
				borderRadius: 15,
				padding: 15,
				display: 'inline-block'
			}} >
			{ message.split('\n').map( line =>
				line? <span>{line}<br/></span> : <span/>
			)}
		</div>
	</td>
	const timeTag = <td
		style={{
			color: 'RoyalBlue',
			fontSize: 10
		}} >
		{moment(time).format("hh:mm:ss")}
	</td>
    const cell = fromSelf?
		[timeTag,main]:[main,timeTag]

    return <TransitionMotion
		defaultStyles={defaults}
		styles={styles}
		willEnter={willEnter}
	>
		{ styles => <table style={{
				width:'100%'
			}} ><tbody>
			{ styles.map( s =>
				<tr style={{
						...s.style,
						maxWidth: '80%',
			    		float: float,
			    		align: float
					}}
					key={s.key} >
			    	{ cell }
			    </tr>
			)}
		</tbody></table> }
	</TransitionMotion>
}

Message.propTypes = {
    message: PropTypes.string.isRequired,
    sender: PropTypes.string.isRequired
}

export default Message
