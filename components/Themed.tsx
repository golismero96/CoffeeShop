/**
 * Learn more about Light and Dark modes:
 * https://docs.expo.io/guides/color-schemes/
 */

import {
  Text as DefaultText,
  useColorScheme,
  View as DefaultView,
  Image as DefaultImage,
} from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";

import Colors from "../constants/Colors";

type ThemeProps = {
  lightColor?: string;
  darkColor?: string;
};

export type TextProps = ThemeProps & DefaultText["props"];
export type ViewProps = ThemeProps & DefaultView["props"];
export type ImageProps = DefaultImage["props"];

export function useThemeColor(
  props: { light?: string; dark?: string },
  colorName: keyof typeof Colors.light & keyof typeof Colors.dark
) {
  const theme = useColorScheme() ?? "light";
  const colorFromProps = props[theme];

  if (colorFromProps) {
    return colorFromProps;
  } else {
    return Colors[theme][colorName];
  }
}

export function Text(props: TextProps) {
  const { style, lightColor, darkColor, ...otherProps } = props;
  const color = useThemeColor({ light: lightColor, dark: darkColor }, "text");

  return <DefaultText style={[{ color }, style]} {...otherProps} />;
}

export function View(props: ViewProps) {
  const { style, lightColor, darkColor, ...otherProps } = props;
  const backgroundColor = useThemeColor(
    { light: lightColor, dark: darkColor },
    "background"
  );

  return <DefaultView style={[{ backgroundColor }, style]} {...otherProps} />;
}

export const Icon = (props: {
  name: React.ComponentProps<typeof FontAwesome>["name"];
  style?: any;
  [key: string]: string | number;
}) => {
  const color = useThemeColor(
    {
      light: String(props?.lightColor ?? "#000"),
      dark: String(props?.darkColor ?? "#fff"),
    },
    "tabIconDefault"
  );
  return <FontAwesome style={[{ color }, props?.style]} {...props} />;
};

export const Image = (props: ImageProps) => {
  return <DefaultImage {...props} />;
};
