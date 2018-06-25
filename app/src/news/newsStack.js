import { createStackNavigator } from 'react-navigation';

import ContentPost from './screens/contentPost';
import RenderCards from './screens/renderCards';

export const ContentStack = createStackNavigator(
  {
    Posts: { screen: RenderCards },
    Content: { screen: ContentPost }
  },
  {
    initialRouteName: 'Posts'
  }
);
