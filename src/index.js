import React from 'react'
import { Provider } from 'react-redux'
import { AppRegistry } from 'react-native'
import store from '@store'
import InitialConnectedScene from '@navigation/Initial'

const App = () =>
    <Provider store={store()}>
        <InitialConnectedScene />
    </Provider>;


export default () => AppRegistry.registerComponent('DuoWallet', () => App);