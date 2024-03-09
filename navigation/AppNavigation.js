


import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import { NavigationContainer } from '@react-navigation/native';
import MovieScreen from '../screens/MovieScreen';
import FavoritScreen from '../screens/FavoritScreen';

const Stack = createNativeStackNavigator();

export default function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerShown: false
          }} />
        <Stack.Screen
          name="Movie"
          component={MovieScreen}
          options={{
            headerShown: false
          }} />
        <Stack.Screen
          name="Favorite"
          component={FavoritScreen}
          options={{
            headerShown: false
          }} />
      Fav
      </Stack.Navigator>


    </NavigationContainer>

  );
}