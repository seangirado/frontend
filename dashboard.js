import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Homepage from './pages/Homepage.js';
import RegisterPage from './pages/registerpage.js';
import ReviewPage from './pages/reviewpage.js';
import UserListPage from './pages/userlistpage.js';
import EditUserPage from './pages/edituserpage.js';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Homepage} />
        <Stack.Screen name="Register" component={RegisterPage} />
        <Stack.Screen name="Review" component={ReviewPage} />
        <Stack.Screen name="UserList" component={UserListPage}/>
        <Stack.Screen name="EditUser" component={EditUserPage}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}