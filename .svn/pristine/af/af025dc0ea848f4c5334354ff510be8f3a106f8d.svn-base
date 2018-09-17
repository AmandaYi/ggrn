import { NavigationActions } from 'react-navigation';

import { RootNavigator } from '../router/appNavigator';

// Start with two routes: The Main screen, with the Login screen on top.
const firstAction = RootNavigator.router.getActionForPathAndParams('Home');
const tempNavState = RootNavigator.router.getStateForAction(firstAction);
const initialNavState = RootNavigator.router.getStateForAction(
    firstAction,
    tempNavState
);

export default function nav(state = initialNavState, action) {
    let nextState;

    switch (action.type) {
        case 'Login':
            nextState = RootNavigator.router.getStateForAction(
                NavigationActions.back(),
                state
            );

            break;
        case '/APP/HOME':
            nextState = RootNavigator.router.getStateForAction(
                NavigationActions.navigate({ routeName: 'Home' }),
                state
            );
            break;
        default:
            nextState = RootNavigator.router.getStateForAction(action, state);
            break;
    }

    // Simply return the original `state` if `nextState` is null or undefined.
    return nextState || state;
}

