
import { StackNavigator } from 'react-navigation';

import DetailScreen from './screens/DetailScreen';
import ListScreen from './screens/ListScreen';

const App = StackNavigator({
  List: { screen: ListScreen },
  Detail: { screen:  DetailScreen },
}, 
{
  initialRouteName: 'List',
});

export default App;