import FontAwesome from "@expo/vector-icons/FontAwesome";
import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
  ThemeProvider,
} from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { useFonts } from "expo-font";
import { SplashScreen } from "expo-router";
import { useEffect } from "react";
import { useColorScheme } from "react-native";
import "react-native-gesture-handler";
// import HomeScreen from "./screens/HomeScreen";
import { View, Text } from "../components/Themed";
import TabNavigator from "./navigators/TabNavigator";
import App from "./App";

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from "expo-router";

const Stack = createStackNavigator();
// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
    ...FontAwesome.font,
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return <RootLayoutNav />;
}
function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Home Screen</Text>
    </View>
  );
}
import * as screenPages from "./screens";

function RootLayoutNav() {
  const colorScheme = useColorScheme();

  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator>
        <Stack.Screen name="Tab" component={TabNavigator} />
        <Stack.Screen
          name="MovieDetails"
          component={screenPages.MovieDetailsScreen}
        />
        <Stack.Screen
          name="SeatBooking"
          component={screenPages.SeatBookingScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
