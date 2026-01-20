import { Tabs } from "expo-router";
import React from "react";

const _layout = () => {
  return (
    <Tabs>
      <Tabs.Screen
        name="movies/[id]"
        options={{
          title: "Movies",
          headerShown: false,
        }}
      />
    </Tabs>
  );
};

export default _layout;
