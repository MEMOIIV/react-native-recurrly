import { Link, useLocalSearchParams } from "expo-router";
import React from "react";
import { Pressable, Text, View } from "react-native";

const SubscriptionsDetails = () => {
  const { id } = useLocalSearchParams<{ id: string }>();
  return (
    <View className="p-8 mt-6">
      <Text className="font-cairo-semibold text-xl">
        SubscriptionsDetails {id}
      </Text>
      
        <Pressable className="p-4 w-[25%] bg-amber-300 rounded">
          <Link href="./">
          <Text>Go Back</Text>
          </Link>
        </Pressable>
    </View>
  );
};

export default SubscriptionsDetails;
