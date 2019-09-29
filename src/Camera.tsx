import { Camera as ExpoCamera } from "expo-camera";
import React from "react";
import { View } from "react-native";

export default function Camera() {
  return (
    <ExpoCamera style={{ flex: 1 }} type={ExpoCamera.Constants.Type.back}>
      <View
        style={{
          flex: 1,
          backgroundColor: "transparent",
          flexDirection: "row"
        }}
      />
    </ExpoCamera>
  );
}
