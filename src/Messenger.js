import React, { Component } from 'react'

import CurrentMessageList from './CurrentMessageList'
import TextInput from './TextInput'

export default ({ data, newMessage, add }) => (
    <div style={{
        width: 400,
        height: 600,
        position: 'relative'
    }}>
        <CurrentMessageList />
        <TextInput />
    </div>
)
