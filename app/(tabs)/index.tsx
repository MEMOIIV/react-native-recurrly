import ListHeading from "@/components/ListHeading";
import SubscriptionsCard from "@/components/SubscriptionsCard";
import UpcomingSubscriptionsCard from "@/components/UpcomingSubscriptionsCard";
import {
  HOME_BALANCE,
  HOME_SUBSCRIPTIONS,
  HOME_USER,
  UPCOMING_SUBSCRIPTIONS,
} from "@/contents/data";
import { icons } from "@/contents/icons";
import images from "@/contents/images";
import "@/global.css";
import dayjs from "dayjs";
import { styled } from "nativewind";
import { useState } from "react";
import { FlatList, Image, Text, View } from "react-native";
import { SafeAreaView as RNSafeAreaView } from "react-native-safe-area-context";
const SafeAreaView = styled(RNSafeAreaView);

export default function App() {
  const [expandedSubscriptionsId, setExpandedSubscriptionsId] = useState<
    string | null
  >(null);
  return (
    <SafeAreaView  className="flex-1  bg-background p-4 ">
      <FlatList
        ListHeaderComponent={() => {
          return (
            <>
              <View className="home-header">
                <View className="home-user">
                  <Image source={images.avatar} className="home-avatar" />
                  <Text className="home-user-name">{HOME_USER.name}</Text>
                </View>
                <Image source={icons.add} className="home-add-icon" />
              </View>

              <View className="home-balance-card">
                <Text className="home-balance-label">Balance</Text>

                <View className="home-balance-row">
                  <View className="flex-row items-center">
                    <Image
                      source={images.Saudi_Riyal_symbol}
                      resizeMode="contain"
                      className="currency-balance"
                    />
                    <Text className="home-balance-amount">
                      {HOME_BALANCE.amount}
                    </Text>
                  </View>
                  <Text className="home-balance-date">
                    {dayjs(HOME_BALANCE.nextRenewalDate).format("MM/DD")}
                  </Text>
                </View>
              </View>

              <View className="mb-1">
                <ListHeading title="Upcoming" />
                <FlatList
                  data={UPCOMING_SUBSCRIPTIONS}
                  renderItem={({ item }) => {
                    return <UpcomingSubscriptionsCard {...item} />;
                  }}
                  keyExtractor={(item) => item.id}
                  horizontal
                  showsHorizontalScrollIndicator={false}
                  ListEmptyComponent={
                    <Text className="home-empty-state">
                      No upcoming renewals yet.
                    </Text>
                  }
                />
              </View>

              <ListHeading title="All Subscriptions" />
            </>
          );
        }}
        data={HOME_SUBSCRIPTIONS}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => {
          return (
            <SubscriptionsCard
              {...item}
              expanded={expandedSubscriptionsId === item.id}
              onPress={() =>
                setExpandedSubscriptionsId((currentId) =>
                  currentId === item.id ? null : item.id,
                )
              }
            />
          );
        }}
        extraData={expandedSubscriptionsId}
        ItemSeparatorComponent={() => <View className="h-4" />}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={
          <Text className="home-empty-state">No Subscriptions yet.</Text>
        }
        contentContainerClassName="pb-19"
      />
    </SafeAreaView>
  );
}
