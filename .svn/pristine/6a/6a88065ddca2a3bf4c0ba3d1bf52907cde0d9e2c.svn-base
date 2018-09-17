import { createStackNavigator } from 'react-navigation';
import ProvidePage from "./../pages/provide/provide";
import ProvideDetailPage from "./../pages/provide/provideDetail";
import CartPage from "./../pages/provide/cart"
import ConfirmOrderPage from "./../pages/pay/confirmOrder";

export default createStackNavigator({
    Provide: {
        screen: ProvidePage
    },
    ProvideDetail: {
        screen: ProvideDetailPage
    },
    Cart: {
        screen: CartPage
    }
}, {
        navigationOptions: {
            header: null,
        },
        initialRouteName: 'Provide',
        headerMode: 'none',
    })