import React, { PropType, Component } from 'react'
import { connect } from 'react-redux'

import Send from 'react-icons/lib/md/send'
import RaisedButton from 'material-ui/RaisedButton'
import Popover from 'material-ui/Popover/Popover'

import { toggleOpen } from './actions'

const Floater = ({ anchor, open, toggleOpen }) => {
console.log( anchor, open, toggleOpen )
    return <div style={{
        position: 'absolute',
        bottom: 0,
        right: 0
    }}>
    <div onClick={ e => toggleOpen(true, e.currentTarget)}>
        <RaisedButton
          label="Click me"
        />
    </div>
        <Popover open={open}
            anchorEl={anchor}
            anchorOrigin={{"horizontal":"middle","vertical":"top"}}
            targetOrigin={{horizontal:"right",vertical:"bottom"}}
            onRequestClose={toggleOpen(false, anchor)}
        >
            <Send />
        </Popover>
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
