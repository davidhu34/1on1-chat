import React, { PropType, Component } from 'react'
import { connect } from 'react-redux'
import { TransitionMotion, spring } from 'react-motion'

import Send from 'react-icons/lib/md/send'
import RaisedButton from 'material-ui/RaisedButton'
import Popover from 'material-ui/Popover/Popover'
import Messenger from './Messenger'

import { toggleOpen } from './actions'

const Floater = ({ anchor, open, toggleOpen }) => {
    console.log( anchor, open, toggleOpen )
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
    const block = open? <div style={{
        positon: 'absolute', bottom: 50, right:0,
        zIndex:0
    }}>

    <TransitionMotion
        defaultStyles={defaults}
        styles={styles}
        willLeave={willLeave}
    >
        {istyle => <Messenger style={istyle[0].style} />}
    </TransitionMotion></div> : <div />

    return <div>
        <div style={{
            position: 'absolute',
            bottom: 20,
            right: 20
        }}>
            { block }
        </div>
        <div style={{position:'absolute',bottom:5, right:5}}onClick={ e => toggleOpen(!open, null)}>
            <RaisedButton
            label="Click me"
            />
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
