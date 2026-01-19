import React, { useState } from "react";
import { Button, TextInput, View } from "react-native";

export default function AddUser() {
    const [name, setName] = useState("");

    const handleSubmit = () => {
        console.log("Name:", name);
    };

    return (
        <View>
            <View className="">
                <TextInput
                    value={name}
                    onChangeText={setName}
                    placeholder="Enter name"
                />

                <Button title="Submit" onPress={handleSubmit} />
            </View>
        </View>
    );
}
