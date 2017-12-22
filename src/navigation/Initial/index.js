import React from 'react'
import {addNavigationHelpers, StackNavigator} from 'react-navigation'
import {connect} from 'react-redux'
import SplashScreen from '@scenes/Splash'
import MainNavigator from '../Main/index'
import InitialScreen from '@scenes/Initial'

export const InitialNavigator = StackNavigator({
    SplashScreen: {screen: SplashScreen},
    InitialScreen: {screen: InitialScreen},
    MainNavigator: {screen: MainNavigator},
}, {
    headerMode: 'none'
})

const InitialNavScene = ({dispatch, nav}) =>
    <InitialNavigator navigation={addNavigationHelpers({
        dispatch: dispatch,
        state: nav
    })}
    />

const mapStateToProps = state => {
    return {
        nav: state.nav_init
    }
}

export default connect(mapStateToProps)(InitialNavScene)





