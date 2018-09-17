import { createStackNavigator } from 'react-navigation';
import AdmissionPage from '../pages/admission/admission';






























import TeamPage from "./../pages/admission/team"
export default createStackNavigator({
    Admission: { screen: AdmissionPage },
    Team:{screen:TeamPage}
}, {
        headerMode: 'none',
        initialRouteName: "Admission",
        navigationOptions:{
            header:null
        }
    }
)