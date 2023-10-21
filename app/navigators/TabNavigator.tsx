import React from "react";
import * as screenPages from "../screens";
import { COLORS, FONTSIZE, SPACING } from "../../constants";
import { Icon, View } from "../../components/Themed";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StyleSheet } from "react-native";

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="Home">
        <Tab.Screen name="Home" component={screenPages.HomeScreen} />
        <Tab.Screen name="Search" component={screenPages.SearchScreen} />
        <Tab.Screen name="1Ticket" component={screenPages.TicketScreen} />
        <Tab.Screen name="User" component={screenPages.UserAccountScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({});

export default TabNavigator;
