import { Link } from "expo-router";
import React from "react";
import { Text, View } from "react-native";

const subscriptions = () => {
  return (
    <View className="p-8 mt-4">
      <Text>subscriptions</Text>
      <Link
        href="/subscriptions/spotify"
        className="mt-4 p-4 rounded bg-primary text-white "
      >
        Go to Subscription spotify
      </Link>
      <Link
        href={{
          pathname: "/subscriptions/[id]",
          params: { id: "claude" },
        }}
        className="mt-4 p-4 rounded bg-primary text-white "
      >
        Claude Subscription
      </Link>
    </View>
  );
};

export default subscriptions;
