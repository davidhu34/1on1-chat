import React, { PropType, Component } from 'react'
import { connect } from 'react-redux'

import Send from 'react-icons/lib/md/send'
import RaisedButton from 'material-ui/RaisedButton'
import Popover from 'material-ui/Popover/Popover'

import { toggleOpen } from './actions'

const Floater = ({ anchor, open, toggleOpen }) => {
console.log( anchor, open, toggleOpen )
    return <div>
    <div onClick={toggleOpen}>
        <RaisedButton
          label="Click me"
        />
    </div>
        <Popover open={open}
            anchorEl={anchor}
            anchorOrigin={{"horizontal":"middle","vertical":"top"}}
            targetOrigin={{horizontal:"right",vertical:"bottom"}}
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
        toggleOpen: (e) => {
            dispatch(
                toggleOpen({
                    open: true,
                    anchor: e.currentTarget
                })
            )
        }
    })
)(Floater)
