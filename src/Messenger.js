import React, { Component } from 'react'
import Paper from 'material-ui/Paper'

import CurrentMessageList from './CurrentMessageList'
import TextInput from './TextInput'

export default ({ data, newMessage, add }) => (
    <Paper style={{
        width: 300,
        height: 500,
        position: 'relative',
        opacity:0.9
    }}>
        <div style={{
            position: 'absolute',
            top: 0,
            paddingTop: 10,
            zIndex: 1,
            width: '100%',
            height: 30,
            backgroundColor: 'RoyalBlue',
            textAlign: 'center',
            color: 'white',
            fontSize: 15    
        }} >
        Watson
        </div>
        <CurrentMessageList />
        <TextInput />
    </Paper>
)
