import React, { Component } from 'react'
import Paper from 'material-ui/Paper'

import CurrentMessageList from './CurrentMessageList'
import TextInput from './TextInput'

export default ({ data, newMessage, add }) => (
    <Paper style={{
        width: 400,
        height: 600,
        position: 'relative'
    }}>
        <CurrentMessageList />
        <TextInput />
    </Paper>
)
