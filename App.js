import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import BooksScreen from "./src/screens/BooksScreen";

const navigator = createStackNavigator(
  {
    Books: BooksScreen,
  },
  {
    initialRouteName: "Books",
    defaultNavigationOptions: {
      title: "Books",
    },
  }
);

export default createAppContainer(navigator);
