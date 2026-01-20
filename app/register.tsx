import { auth, db } from "@/FirebaseConfig";
import { useRouter } from "expo-router";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import React, { useState } from "react";
import {
  Alert,
  Pressable,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const clear = () => {
    setEmail("");
    setPassword("");
    setConfirmPassword("");
  };

  const handleRegister = async () => {
    if (!email || !password) {
      Alert.alert("Error", "All fields are required");
      return;
    }

    if (password !== confirmPassword) {
      Alert.alert("Error", "Passwords do not match");
      return;
    }

    try {
      setLoading(true);

      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password,
      );

      const uid = userCredential.user.uid;

      await setDoc(doc(db, "users", uid), {
        email: email,
        createdAt: new Date().toISOString(),
      });
      router.replace("/login");
      clear();
    } catch (error: any) {
      Alert.alert("Signup failed", error.message);
      console.log("Registration error: ", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View>
      <Text>Register</Text>
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
      <View className="border rounded w-11/12 mb-3">
        <TextInput
          placeholder="Confirm Password"
          secureTextEntry
          value={confirmPassword}
          onChangeText={setConfirmPassword}
        />
      </View>
      <Pressable
        onPress={handleRegister}
        disabled={loading}
        className="bg-blue-500 w-11/12 py-3 rounded"
      >
        <Text className="text-white text-center">
          {loading ? "Loading..." : "Register"}
        </Text>
      </Pressable>

      <View>
        <Text>Dont have Account?</Text>
        <TouchableOpacity
          onPress={() => router.push("/login")}
          className="bg-blue-500 px-6 py-3 rounded-lg"
        >
          <Text className="text-white font-semibold">SignUp</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Register;
