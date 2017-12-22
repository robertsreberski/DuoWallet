import {InitialNavigator} from "./index";
import {actions} from "./actions";

const initialState = InitialNavigator.router.getStateForAction(
    InitialNavigator.router.getActionForPathAndParams('SplashScreen')
)

export default (state = initialState, action) => {
    switch (action.type) {
        case actions.GOTO_INITIALIZE: {
            return {
                index: 0,
                routes: [{key: 'Init', routeName: 'InitialScreen'}]
            }
        }
        case actions.GOTO_MAIN: {
            return {
                index: 0,
                routes: [{key: 'Main', routeName: 'MainNavigator'}]
            }
        }
        default:
            const newState = InitialNavigator.router.getStateForAction(action, state)
            return newState || state
    }
}