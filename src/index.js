import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import { freshStore } from './configureStore'
import { api } from './actions/api'
import App from './App'

const store = freshStore()
const socket = api(store.dispatch)

render(
    <Provider store={store} >
        <MuiThemeProvider>
        	<App/>
        </MuiThemeProvider>
    </Provider>,
    document.getElementById('root')
)
