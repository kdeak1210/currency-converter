import { StackNavigator } from 'react-navigation';
import { StatusBar } from 'react-native';

import Home from '../screens/Home';
import CurrencyList from '../screens/CurrencyList';
// import Options from '../screens/Options';
// import Themes from '../screens/Themes';

/** Each screen takes a key: object pairing */
export default StackNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        // The header will have nav options (ex Back Button). Render null on Home
        header: () => null
      }
    },
    CurrencyList: {
      screen: CurrencyList,
      navigationOptions: ({ navigation }) => ({
        // Access our title by the params passed from the previous component ('Home')
        headerTitle: navigation.state.params.title
      })
    }
  },
  {
    mode: 'modal',
    cardStyle: { paddingTop: StatusBar.currentHeight } // Keep navbar off top of screen
  }
);
