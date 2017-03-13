import React, { Component } from 'react'
import { connect } from 'react-redux'

import { newMessage, Add } from './actions'
import MotionTest from './MotionTest'
import Floater from './Floater2'
import Messenger from './Messenger'

const App = ({ data, newMessage, add }) => (
<div>
    <Floater />
</div>
)


export default connect(
    state => ({ ...state }),
    dispatch => ({
        newMessage: () => dispatch( newMessage() ),
        add: () => dispatch(Add())
    })
)(App)
