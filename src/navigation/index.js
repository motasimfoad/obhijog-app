import { createStackNavigator, createAppContainer } from "react-navigation";
import Splash from '../screens/Splash';
import Auth from '../screens/Auth';
import Dashboard from '../screens/Dashboard';
import Search from '../screens/Search';
import SearchResult from '../screens/SearchResult';
import CaseDetails from '../screens/CaseDetails';
import SwiperPage from '../screens/Swiper';
import MainSearch from '../screens/MainSearch';

const AppNavigator = createStackNavigator({
  Home: {
    screen: Splash
  },
  Auth: {
    screen: Auth,
    navigationOptions: {
        headerLeft: null,
        gesturesEnabled: false,
      },
  },
  Dashboard: {
    screen: Dashboard,
    navigationOptions: {
        headerLeft: null
      },
  },
  Search: {
    screen: Search,
    navigationOptions: {
        headerLeft: null
      },
  },
  SearchResult: {
    screen: SearchResult,
    navigationOptions: {
        headerLeft: null
      },
  },
  CaseDetails: {
    screen: CaseDetails,
    navigationOptions: {
        headerLeft: null
      },
  },
  MainSearch: {
    screen: MainSearch,
    navigationOptions: {
        headerLeft: null
      },
  },
  SwiperPage: {
    screen: SwiperPage,
    navigationOptions: {
      headerLeft: null,
      gesturesEnabled: false,
    },
  },
},
{
  initialRouteName: "Home",
  headerMode: 'none'
}
);

export default createAppContainer(AppNavigator);