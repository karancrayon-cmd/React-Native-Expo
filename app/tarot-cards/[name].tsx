import axios from "axios";
import { useLocalSearchParams } from "expo-router";
import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";
export default function CardDetails() {
    const [cardData, setCardData] = useState<any>({});
    const { name } = useLocalSearchParams<{ name: string }>();

    useEffect(() => {
        const GetDetails = async () => {
            try {
                const res = await axios.get(
                    `https://tarotapi.dev/api/v1/cards/${name}`,
                );
                console.log(res);
                setCardData(res.data.card);
            } catch (error) {
                console.error("error:", error);
            }
        };

        GetDetails();
    }, []);
    return (
        <View className="p-4  flex items-center justify-center ">
            <Text className="text-2xl mb-4 ">Tarot Cards:</Text>

            <View className="w-1/2 p-2 text-center">
                <Text className="text-center text-xl text-bold">{cardData.name}</Text>
                <Text className="">{cardData.meaning_rev}</Text>
                <Text className="">{cardData.meaning_up}</Text>
                <Text className="">{cardData.desc}</Text>
            </View>
        </View>
    );
}
