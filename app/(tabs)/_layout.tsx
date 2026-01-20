import { Tabs } from "expo-router";
import { Bookmark, Home, Search, User } from "lucide-react-native";
import React from "react";
import { Text, View } from "react-native";

const TabIcon = ({ Icon, focused, color, size, title }: any) => (
  <View
    className={`rounded-xl p-1 w-full items-center min-w-[60px] ${focused ? "bg-blue-500" : "bg-transparent"}`}
  >
    <Icon
      color={focused ? "#fff" : color}
      size={size}
      strokeWidth={focused ? 2.5 : 2}
    />
    <Text
      className={`text-[10px] mt-0.5 ${focused ? "text-white font-semibold" : "text-gray-400 font-normal"}`}
    >
      {title}
    </Text>
  </View>
);

const _layout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#667eea",
        tabBarInactiveTintColor: "#9CA3AF",
        tabBarShowLabel: false,
        tabBarStyle: {
          borderTopWidth: 0,
          elevation: 0,
          shadowColor: "transparent",
          backgroundColor: "#FFFFFF",
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          headerShown: false,
          tabBarIcon: ({ focused, color, size }) => (
            <TabIcon
              Icon={Home}
              focused={focused}
              color={color}
              size={size}
              title="Home"
            />
          ),
        }}
      />

      <Tabs.Screen
        name="search"
        options={{
          title: "Search",
          headerShown: false,
          tabBarIcon: ({ focused, color, size }) => (
            <TabIcon
              Icon={Search}
              focused={focused}
              color={color}
              size={size}
              title="Search"
            />
          ),
        }}
      />

      <Tabs.Screen
        name="saved"
        options={{
          title: "Saved",
          headerShown: false,
          tabBarIcon: ({ focused, color, size }) => (
            <TabIcon
              Icon={Bookmark}
              focused={focused}
              color={color}
              size={size}
              title="Saved"
            />
          ),
        }}
      />

      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          headerShown: false,
          tabBarIcon: ({ focused, color, size }) => (
            <TabIcon
              Icon={User}
              focused={focused}
              color={color}
              size={size}
              title="Profile"
            />
          ),
        }}
      />
    </Tabs>
  );
};

export default _layout;
