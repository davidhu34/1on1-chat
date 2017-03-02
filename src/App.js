import React, { Component } from 'react'
import { connect } from 'react-redux'

import { newMessage } from './actions'

import CurrentMessageList from './CurrentMessageList'
import MotionTest from './MotionTest'

const App = ({ data, newMessage }) => (
    <div>
        <div onClick={newMessage}>1-1asd;f</div>
        <CurrentMessageList />
    </div>
)


export default connect(
    state => ({ ...state }),
    dispatch => ({
        newMessage: () => dispatch( newMessage() )
    })
)(App)
