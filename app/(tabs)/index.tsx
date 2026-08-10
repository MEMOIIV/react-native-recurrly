import "@/global.css";
import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-background">
      <Text className="text-4xl text-white bg-linear-to-r from-purple-500 via-pink-500 to-orange-500">
        Welcome to Nativewind!
      </Text>
      <Link href="/onboarding" className="mt-4 p-4 rounded bg-primary text-white ">
        Go to Onboarding
      </Link>
      <Link href="/(auth)/sign-in" className="mt-4 p-4 rounded bg-primary text-white ">
        Go to Sign in
      </Link>
      <Link href="/(auth)/sign-up" className="mt-4 p-4 rounded bg-primary text-white ">
        Go to Sign up
      </Link>

      <Link href="/(tabs)/subscriptions" className="mt-4 p-4 rounded bg-primary text-white ">
        Go to Subscription
      </Link>
     
    </View>
  );
}
 