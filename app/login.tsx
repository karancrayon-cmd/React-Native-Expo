import { auth } from "@/FirebaseConfig";
import { useRouter } from "expo-router";
import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import {
    Alert,
    Pressable,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const clear = () => {
    setEmail("");
    setPassword("");
  };

  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert("Error", "Please enter email and password");
      return;
    }

    try {
      setLoading(true);
      const userCredentials = await signInWithEmailAndPassword(
        auth,
        email,
        password,
      );
      console.log("Logged in user:", userCredentials.user.uid);
      Alert.alert("Success", "Logged in successfully!");
      router.push("/(tabs)");
      clear();
    } catch (error: any) {
      Alert.alert("Login failed", error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View className="flex  mt-7 items-center">
      <Text className="text-xl font-bold mb-4">login</Text>

      <View className="border rounded w-11/12 mb-3">
        <TextInput
          placeholder="Email"
          autoCapitalize="none"
          value={email}
          onChangeText={setEmail}
        />
      </View>
      <View className="border rounded w-11/12 mb-3">
        <TextInput
          placeholder="Password"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
      </View>
      <Pressable
        onPress={handleLogin}
        className="bg-blue-500 w-11/12 py-3 rounded"
        disabled={loading}
      >
        <Text className="text-white text-center">
          {loading ? "Logging in..." : "Login"}
        </Text>
      </Pressable>

      <View>
        <Text>Dont have Account?</Text>
        <TouchableOpacity
          onPress={() => router.push("/register")}
          className="bg-blue-500 px-6 py-3 rounded-lg"
        >
          <Text className="text-white font-semibold">SignUp</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Login;
