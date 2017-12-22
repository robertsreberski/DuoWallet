import React from 'react'
import {StackNavigator, addNavigationHelpers} from 'react-navigation'
import {connect} from 'react-redux'
import MainScreen from '@scenes/Main'
import AddScreen from '@scenes/Add'

export const MainNavigator = StackNavigator({
    MainScreen: {screen: MainScreen},
    AddScreen: {screen: AddScreen}
}, {
    headerMode: 'none',
})

const MainNavScene = ({dispatch, nav}) =>
    <MainNavigator
        navigation={addNavigationHelpers({
            dispatch: dispatch,
            state: nav
        })}
    />

const mapStateToProps = state => {
    console.log(state)
    return {nav: state.nav_main}
}

export default connect(mapStateToProps)(MainNavScene)


