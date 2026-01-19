import { router } from "expo-router";
import React, { useEffect, useState } from "react";
import { Pressable, ScrollView, Text, View } from "react-native";

export default function TarotCards() {
    const [cardData, setCardData] = useState<any>([]);
    useEffect(() => {
        fetch("https://tarotapi.dev/api/v1/cards")
            .then((response) => response.json())
            .then((data) => setCardData(data.cards))
            .catch((error) => console.error(error));
    }, []);
    return (
        <ScrollView className="p-4">
            <Text className="text-xl mb-4">Tarot Cards:</Text>
            <View className="flex flex-row flex-wrap">
                {cardData.map((card: any, index: number) => (
                    <Pressable
                        className="w-1/4 p-2"
                        key={index}
                        onPress={() => router.push(`/tarot-cards/${card.name_short}`)}
                    >
                        <View className="bg-white h-full rounded-lg p-3 ">
                            <Text className="text-center font-semibold">{card.name}</Text>
                            <Text className="">{card.meaning_rev}</Text>
                            <Text className="">{card.meaning_up}</Text>
                        </View>
                    </Pressable>
                ))}
            </View>
        </ScrollView>
    );
}
