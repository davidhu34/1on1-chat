import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import { freshStore } from './configureStore'
import App from './App'

const store = freshStore()

render(
    <Provider store={store} >
        <MuiThemeProvider>
        	<App/>
        </MuiThemeProvider>
    </Provider>,
    document.getElementById('root')
)
