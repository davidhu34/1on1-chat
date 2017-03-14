import React, { Component } from 'react'
import Paper from 'material-ui/Paper'

import CurrentMessageList from './CurrentMessageList'
import TextInput from './TextInput'

export default ({ data, newMessage, add }) => (
    <Paper style={{
        width: 400,
        height: 600,
        position: 'relative',
        opacity:0.9
    }}>
        <div style={{
            position: 'absolute',
            top: 0,
            paddingTop: 15,
            zIndex: 1,
            width: '100%',
            height: 40,
            backgroundColor: 'RoyalBlue',
            textAlign: 'center',
            color: 'white',
            fontSize: 20
        }} >
        Watson
        </div>
        <CurrentMessageList />
        <TextInput />
    </Paper>
)
