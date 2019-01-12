import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'

import store from './store'
// import App from './containers/App/App'
import Main from './Main'

ReactDOM.render(
    <Provider store={store}>
        <Main/>
    </Provider>, document.getElementById('root'))

