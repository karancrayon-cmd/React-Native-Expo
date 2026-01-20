import { useRouter } from "expo-router";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const Profile = () => {
  const router = useRouter();

  return (
    <View className="flex-1 justify-center items-center">
      <Text>profile</Text>

      <TouchableOpacity
        onPress={() => router.push("/login")}
        className="bg-blue-500 px-6 py-3 rounded-lg"
      >
        <Text className="text-white font-semibold">Login</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({});
