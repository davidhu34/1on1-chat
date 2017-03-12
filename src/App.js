import React, { Component } from 'react'
import { connect } from 'react-redux'

import { newMessage, Add } from './actions'
import CurrentMessageList from './CurrentMessageList'
import TextInput from './TextInput'
import MotionTest from './MotionTest'
import Floater from './Floater'

const App = ({ data, newMessage, add }) => (
    <div style={{
        width: 400,
        height: 600,
        position: 'relative'
    }}>
        <div onClick={add}>get</div>
        <CurrentMessageList />
        <TextInput />
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
