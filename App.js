
import { StackNavigator } from 'react-navigation';

import DetailScreen from './screens/DetailScreen';
import ListScreen from './screens/ListScreen';

const App = StackNavigator({
  List: { 
    screen: ListScreen 
  },
  Detail: {
    screen:  DetailScreen,
    // navigationOptions: ({navigation}) => ({
    //   title: `${navigation.state.params.movie.title}`,
    // }),
  },
}, 
{
  initialRouteName: 'List',
});

export default App;