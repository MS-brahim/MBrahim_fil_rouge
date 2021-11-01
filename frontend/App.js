import React from "react";
import {Provider} from 'react-redux'

import { store }  from './app/store'

import SignIn from "./app/auth/signin/SignIn";
import SignUp from "./app/auth/signup/SignUp";

import Splash from "./app/components/Splash";
import { HomeScreen, 
  AddServiceScreen, 
  ProfileScreen, 
  BellScreen, 
  InboxScreen,
  ServiceDetail,
  DashboardScreen,
  ReservationScreen
} from './app/screens'
import { 
  DiscordScreen
} from './app/screens/DiscordScreen';

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
const Stack = createStackNavigator();


const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Splash"
            component={Splash}
            options={{
              headerShown: false
            }}
          />
          <Stack.Screen
            name="SignIn"
            component={SignIn}
            options={{
              headerShown: false
            }}
          />
          <Stack.Screen
            name="SignUp"
            component={SignUp}
            options={{
              headerShown: false
            }}
          />
          <Stack.Screen
            name="HomeScreen"
            component={HomeScreen}
            options={{
              title: "Accueil",
              headerTintColor: "orange",
              headerShown:false
            }}
          />
          <Stack.Screen
            name="AddServiceScreen"
            component={AddServiceScreen}
            options={{
              title: "Ajouter une destination",
              headerTintColor: "orange",
              headerStyle: {
                backgroundColor: "#072B61",
              },
              headerTitleStyle: {
                fontWeight: '100',
              },
            }}
          /> 
          <Stack.Screen
            name="ReservationScreen"
            component={ReservationScreen}
            options={{
              title: "Demander une réservation",
              headerTintColor: "orange",
              headerStyle: {
                backgroundColor: "#072B61",
              },
              headerTitleStyle: {
                fontWeight: '100',
              },
            }}
          /> 
          <Stack.Screen
            name="ProfileScreen"
            component={ProfileScreen}
            options={{
              title: "Profile",
              headerTintColor: "orange",
              headerShown:true,
              headerStyle: {
                backgroundColor: "#072B61",
              },
              headerTitleStyle: {
                fontWeight: '100',
              },
            }}
          />
          <Stack.Screen
            name="DashboardScreen"
            component={DashboardScreen}
            options={{
              title: "My Profile",
              headerTintColor: "orange",
              headerShown:false,
            }}
          />
          <Stack.Screen
            name="BellScreen"
            component={BellScreen}
            options={{
              title: "Notification",
              headerTintColor: "orange",
              headerStyle: {
                backgroundColor: "#072B61",
              },
              headerTitleStyle: {
                fontWeight: '100',
              },
            }}
          />
          <Stack.Screen
            name="InboxScreen"
            component={InboxScreen}
            options={{
              title: "Message",
              headerTintColor: "orange",
              headerStyle: {
                backgroundColor: "#072B61",
              },
              headerTitleStyle: {
                fontWeight: '100',
              },
            }}
          />
          <Stack.Screen
            name="DiscordScreen"
            component={DiscordScreen}
            options={{
              title: "DiscordScreen",
              headerTintColor: "orange",
              headerStyle: {
                backgroundColor: "#072B61",
              },
              headerTitleStyle: {
                fontWeight: '100',
              },
            }}
          />
          <Stack.Screen
            name="ServiceDetail"
            component={ServiceDetail}
            options={{
              title: "Detail",
              headerTintColor: "orange",
              headerStyle: {
                backgroundColor: "#072B61",
              },
              headerTitleStyle: {
                fontWeight: '100',
              },
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;
