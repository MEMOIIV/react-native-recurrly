import "@/global.css";
import { Stack } from "expo-router";
import { useFonts } from "expo-font";
import { View } from "react-native";

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    CairoRegular: require("../assets/fonts/Cairo-Regular.ttf"),
    CairoLight: require("../assets/fonts/Cairo-Light.ttf"),
    CairoMedium: require("../assets/fonts/Cairo-Medium.ttf"),
    CairoSemiBold: require("../assets/fonts/Cairo-SemiBold.ttf"),
    CairoBold: require("../assets/fonts/Cairo-Bold.ttf"),
  });

  if (!fontsLoaded) {
    return <View />;
  }

  return <Stack screenOptions={{headerShown:false}} />;
}