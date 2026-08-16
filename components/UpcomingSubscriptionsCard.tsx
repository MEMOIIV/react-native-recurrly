import { formatCurrency } from "@/lib/utils";
import React from "react";
import { Image, Text, View } from "react-native";

const UpcomingSubscriptionsCard = ({
  name,
  price,
  daysLeft,
  icon,
}: UpcomingSubscription) => {
  return (
    <View className="upcoming-card">
      <View className="upcoming-row">
        <Image source={icon} className="upcoming-icon" />
        <View>
          <View className="flex-row items-center">
            <Image
              className="currency-upcoming"
              source={require("@/assets/images/Saudi_Riyal_Symbol-black.png")}
            />
            <Text className="upcoming-price">{formatCurrency(price)}</Text>
          </View>
          <Text className="upcoming-meta" numberOfLines={1}>
            {daysLeft > 1 ? `${daysLeft} days left` : "Last day"}
          </Text>
        </View>
      </View>
      <Text className="upcoming-name" numberOfLines={1}>
        {name}
      </Text>
    </View>
  );
};

export default UpcomingSubscriptionsCard;
