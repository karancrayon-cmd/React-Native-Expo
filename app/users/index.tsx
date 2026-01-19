import React from "react";
import { Text, View } from "react-native";
import AddUser from "./addUser";

export default function UserList() {
    return (
        <View>
            <Text>User List:</Text>

            <AddUser />
        </View>
    );
}
