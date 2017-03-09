import React, { Component } from 'react'
import { connect } from 'react-redux'

import { newMessage, Add } from './actions'
import CurrentMessageList from './CurrentMessageList'
import TextInput from './TextInput'
import MotionTest from './MotionTest'

const App = ({ data, newMessage, add }) => (
    <div>
        <div onClick={add}>get</div>
        <CurrentMessageList />
        <TextInput />
    </div>
)


export default connect(
    state => ({ ...state }),
    dispatch => ({
        newMessage: () => dispatch( newMessage() ),
        add: () => dispatch(Add())
    })
)(App)
