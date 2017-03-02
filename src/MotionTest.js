import React, { Component } from 'react'
import { connect } from 'react-redux'
import { TransitionMotion, spring } from 'react-motion'


const MotionTest = ({ messages }) => {
	const styles = Object.keys(messages).map( id => ({
		key: id, style: {borderWidth: spring(50)},data: id
	}))
	const defaults = Object.keys(messages).map( id => ({
		key: id, style: { borderWidth: 0 },data: id
	}))
	const willEnter = () => ({ borderWidth: 0 })

	return <TransitionMotion
		willEnter={willEnter}
		defaultStyles={defaults}
		styles={styles}
		>
		{styles =>
		<div>
		  { styles.map(({ key, style, data}) => (
		    <div key={key} style={{
		      borderColor: 'black',
		      borderStyle: 'solid',
		      ...style
		    }}>{ data }</div>
		  ))}
		</div>
		}
    </TransitionMotion>
}


export default connect(
	state => ({
		messages: state.messages
	})
)(MotionTest)
