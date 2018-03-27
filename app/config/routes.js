import { StackNavigator } from 'react-navigation';
import { StatusBar } from 'react-native';

import Home from '../screens/Home';
import CurrencyList from '../screens/CurrencyList';
import Options from '../screens/Options';
import Themes from '../screens/Themes';

const HomeStack = new StackNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        // The header will have nav options (ex Back Button). Render null on Home
        header: () => null
      }
    },
    Options: {
      screen: Options,
      navigationOptions: {
        headerTitle: 'Options'
      }
    },
    Themes: {
      screen: Themes,
      navigationOptions: {
        headerTitle: 'Themes'
      }
    }
  },
  {
    headerMode: 'screen' // NavBar comes & goes w/ screen rather than be continuous
  }
);

const CurrencyListStack = new StackNavigator({
  CurrencyList: {
    screen: CurrencyList,
    navigationOptions: ({ navigation }) => ({
      // Access our title by the params passed from the previous component ('Home')
      headerTitle: navigation.state.params.title
    })
  }
});

/** Each screen takes a key: object pairing.
 *  Home is defined first, so it is the initial route (homepage)
 */
export default StackNavigator(
  {
    Home: {
      screen: HomeStack
    },
    CurrencyList: {
      screen: CurrencyListStack
    }
  },
  {
    mode: 'modal',
    cardStyle: { paddingTop: StatusBar.currentHeight }, // Keep navbar off top of screen
    headerMode: 'none' // Don't render header for this StackNavigator (fix double headers)
  }
);
