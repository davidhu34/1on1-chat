import React, { PropType, Component } from 'react'
import { connect } from 'react-redux'
import { TransitionMotion, spring } from 'react-motion'

import Message from 'react-icons/lib/md/message'
import FloatingActionButton from 'material-ui/FloatingActionButton'
import Popover from 'material-ui/Popover/Popover'
import Messenger from './Messenger'

import { toggleOpen } from './actions'

const Floater = ({ anchor, open, toggleOpen }) => {
    const defaults = [{
        key: '0',
        style: { scale:0, opacity: 0 }
    }]
    const styles = [{
        key: '0',
        style: {
            scale:spring(1),
            opacity:spring(1)
        }
    }]
    const willLeave = () => ({
        scale:spring(0),
        opacity:spring(0)
    })
    const block = open? <TransitionMotion
            defaultStyles={defaults}
            styles={styles}
            willLeave={willLeave} >
            {styles => <Messenger style={styles[0].style} />}
    </TransitionMotion> : <div />

    return <div style={{
        position: 'absolute',
        bottom: 10,
        right: 10,
        zIndex: 0
    }}>
        <div style={{
            position: 'absolute',
            bottom: 65,
            right: 0
        }} >
            { block }
        </div>
        <div style={{position:'absolute',bottom:0, right:0}}onClick={ e => toggleOpen(!open, null)}>
            <FloatingActionButton backgroundColor="Navy" >
                <div style={{paddingTop: 5}}>
                <img src="/watson.png"
                    style={{
                        width: 40,
                        height: 40
                    }} />
                </div>
            </FloatingActionButton>
        </div>
    </div>
}

export default connect(
    state => ({
        anchor: state.ui.anchor,
        open: state.ui.open
    }),
    dispatch => ({
        toggleOpen: (open, anchor) => {
            dispatch(
                toggleOpen({ open, anchor })
            )
        }
    })
)(Floater)
