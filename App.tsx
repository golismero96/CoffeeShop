import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { DetailsScreen, PaymentScreen } from './src/screens';
import TabNavigator from './src/navigators/TabNavigator';
// import SafeAreaProvider from "./src/main/SafeAreaProvider";

const Stack = createNativeStackNavigator();

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen
          name="Tab"
          component={TabNavigator}
          options={{ animation: 'slide_from_bottom' }}></Stack.Screen>
        <Stack.Screen
          name="Details"
          component={DetailsScreen}
          options={{ animation: 'slide_from_bottom' }}></Stack.Screen>
        <Stack.Screen
          name="PaymentScreen"
          component={PaymentScreen}
          options={{ animation: 'slide_from_bottom' }}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;
