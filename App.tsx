import * as Permissions from "expo-permissions";
import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";
import Camera from "./src/Camera";

export default function App() {
  const [hasCameraPermission, setCameraPermission] = useState(null);

  useEffect(() => {
    Permissions.askAsync(Permissions.CAMERA).then(({ status }) => {
      setCameraPermission(status === "granted");
    });
  }, []);

  return (
    <View style={{ flex: 1 }}>
      {hasCameraPermission && <Camera />}
      {!hasCameraPermission && <Text>No camera permissions :(</Text>}
    </View>
  );
}
