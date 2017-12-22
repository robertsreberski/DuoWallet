import {MainNavigator} from "./index";
import {NavigationActions} from 'react-navigation'
import {actions} from './actions'

const initialState = MainNavigator.router.getStateForAction(
    MainNavigator.router.getActionForPathAndParams('MainScreen')
)

export default (state = initialState, action) => {
    switch (action.type) {
        case actions.GOTO_ADD: {
            return MainNavigator.router.getStateForAction(
                NavigationActions.navigate({routeName: 'AddScreen'}),
                state
            )
        }
        case actions.GOTO_MAIN: {
            if (state.index > 0) return MainNavigator.router.getStateForAction(
                NavigationActions.back(),
                state
            )
            else return {
                index: 0,
                routes: [{key: 'Main', routeName: 'MainScreen'}]
            }
        }
        default:
            const newState = MainNavigator.router.getStateForAction(action, state)
            return newState || state
    }
}