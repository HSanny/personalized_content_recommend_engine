import React from 'react';
import _ from 'lodash';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './component/home/HomeScreen';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import loginReducer from './component/login/loginReducers';

const store = createStore(loginReducer);

const Stack = createStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}