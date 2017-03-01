import React, { Component } from 'react'
import { connect } from 'react-redux'
import { TransitionMotion, spring } from 'react-motion'


class MotionTest extends Component {
	render () {	
		const { arr } = this.props
		const willEnter = {
			width: spring(100), height: spring(100)
		}
		const styles = Object.keys(arr).map(
			key => ({
				key: key,
				style: {width: 50, height: 50, backgroundColor: 'blue'}
			})
		)

		return <TransitionMotion
//			willEnter={willEnter}
			styles={styles}>
		{ interpolatedStyles =>
		// first render: a, b, c. Second: still a, b, c! Only last one's a, b.
			<div>
			{interpolatedStyles.map(config => <div
					key={config.key}
					style={{
						...config.style,
						border: '1px solid'
					}} >
					{arr[config.key]} </div>
			)}
			</div>
		}
		</TransitionMotion>
	}
}
		
export default connect(
	state => ({
		arr: state.messages
	})
)(MotionTest)
