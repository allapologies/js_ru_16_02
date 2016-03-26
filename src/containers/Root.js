import React, { Component, PropTypes } from 'react'
//import AppContainer from './AppContainer'
import DevTools from './DevTools'
import { Provider } from 'react-redux'
import store from '../store'

class Root extends Component {
    render() {
        console.log('---', 123);
        return (
            <Provider store={store}>
                <div>
                    <h1>Container!</h1>
                    {this.props.children}
                    <DevTools />
                </div>
            </Provider>
        )
    }
}

export default Root