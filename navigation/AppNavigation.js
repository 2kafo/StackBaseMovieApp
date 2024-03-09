


import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import { NavigationContainer } from '@react-navigation/native';
import MovieScreen from '../screens/MovieScreen';
import FavoriteScreen from '../screens/FavoriteScreen';
import SearchScreen from '../screens/SearchScreen';

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
          component={FavoriteScreen}
          options={{
            headerShown: false
          }} />
      <Stack.Screen name='SearchScreen' component={SearchScreen} options={{
        headerShown: false
      }} />
      </Stack.Navigator>


    </NavigationContainer>

  );
}