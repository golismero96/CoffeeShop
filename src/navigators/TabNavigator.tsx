import React from 'react';
import { StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CustomIcon from '../components/CustomIcon';
import { COLORS } from '../theme/theme';
import { BlurView } from '@react-native-community/blur';
import {
  HomeScreen,
  FavoritesScreen,
  CartScreen,
  OrderHistoryScreen,
} from '../screens';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return <Tab.Navigator screenOptions={{
    tabBarHideOnKeyboard:true,
    headerShown:false,
    tabBarShowLabel:false,
    tabBarStyle:styles.tabBarStyle,
    tabBarBackground:()=> (
        <BlurView overlayColor='' blurAmount={15} style={styles.BlurViewStyles} />
    )
    }}>
    <Tab.Screen name="Home" component={HomeScreen} options={{
        tabBarIcon:({focused})=>(
            <CustomIcon name='home' size={24} color={focused?COLORS.primaryOrangeHex:COLORS.primaryLightGreyHex} />
        )
    }} />
    <Tab.Screen name="Cart" component={CartScreen} options={{
        tabBarIcon:({focused})=>(
            <CustomIcon name='cart' size={24} color={focused?COLORS.primaryOrangeHex:COLORS.primaryLightGreyHex} />
        )
    }}/>
    <Tab.Screen name="Favorites" component={FavoritesScreen} options={{
        tabBarIcon:({focused})=>(
            <CustomIcon name='like' size={24} color={focused?COLORS.primaryOrangeHex:COLORS.primaryLightGreyHex} />
        )
    }}/>
    <Tab.Screen name="OrderHistory" component={OrderHistoryScreen}  options={{
        tabBarIcon:({focused})=>(
            <CustomIcon name='bell' size={24} color={focused?COLORS.primaryOrangeHex:COLORS.primaryLightGreyHex} />
        )
    }}/>
  </Tab.Navigator>;
};

const styles = StyleSheet.create({
    tabBarStyle: {
        height: 80,
        position: 'absolute',
        backgroundColor: COLORS.primaryBlackRGBA,
        borderTopWidth: 0,
        borderTopColor: 'transparent',
    },
    BlurViewStyles: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
    }
});

export default TabNavigator;
