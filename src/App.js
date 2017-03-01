import React, { Component } from 'react'
import { connect } from 'react-redux'

import { Add } from './actions'

import CurrentMessageList from './CurrentMessageList'
import MotionTest from './MotionTest'

const App = ({ data, Add }) => (
    <div>
        <div>1-1asd;f</div>
        <CurrentMessageList />
        <MotionTest />
    </div>
)


export default connect(
    state => ({ ...state }),
    dispatch => ({
        Add: () => dispatch( Add() )
    })
)(App)
