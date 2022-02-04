import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import SearchScreen from "./src/screens/search.screen";
import ResultShowScreen from './src/screens/result_show.screen';

const AppNavigator = createStackNavigator(
  {
    Search: SearchScreen,
    ResultShow: ResultShowScreen
  },
  {
    initialRouteName: "Search",
    defaultNavigationOptions: {
      title: "Business Search",
    },
  }
);

export default createAppContainer(AppNavigator);
