import { LinearGradient } from "expo-linear-gradient";
import { Link } from "expo-router";
import { Image, StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <LinearGradient colors={["#667eea", "#764ba2"]} className="flex-1">
      <View className="flex-1 items-center justify-center p-5">
        <View className="shadow-xl rounded-[20px]">
          <Image
            source={require("../assets/images/th.jpg")}
            style={styles.image}
          />
        </View>

        <Text className="text-3xl font-bold text-white text-center mb-2.5">
          Welcome to MyApp
        </Text>
        <Text className="text-xl text-white text-center mb-10">
          Explore the features below
        </Text>

        <View className="w-full gap-3.5">
          <Link href="/tarot-cards" className="w-fit">
            <View className="border border-white/30 bg-white/20 px-6 py-3.5 rounded-xl ">
              <Text className="text-white text-lg font-semibold">
                Tarot Cards
              </Text>
            </View>
          </Link>

          <Link href="/users" className="w-fit">
            <View className="border border-white/30 bg-white/20 px-6 py-3.5 rounded-xl ">
              <Text className="text-white text-lg font-semibold"> Users</Text>
            </View>
          </Link>
        </View>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  image: {
    width: 200,
    height: 200,
    borderRadius: 20,
  },
});
