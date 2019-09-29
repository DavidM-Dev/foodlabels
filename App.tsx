import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import { Camera } from 'expo-camera';
import * as Permissions from 'expo-permissions';

export default function App() {

  const [ hasCameraPermission, setCameraPermission ] = useState(null);
  const [ type, setType ] = useState(Camera.Constants.Type.back);

  useEffect(() => {
    Permissions.askAsync(Permissions.CAMERA).then(({ status }) => {
      setCameraPermission(status === 'granted');
    });
  }, []);

  return (
    <View style={{ flex: 1 }}>
      { hasCameraPermission && (
          <Camera style={{ flex: 1 }} type={type}>
            <View style={{
              flex: 1,
              backgroundColor: 'transparent',
              flexDirection: 'row',
              }}>
              <TouchableOpacity style={{
                flex: 0.1,
                alignSelf: 'flex-end',
                alignItems: 'center'
              }}
              onPress={() => {
                setType(
                    type === Camera.Constants.Type.back
                      ? Camera.Constants.Type.front
                      : Camera.Constants.Type.back,
                );
              }}>
                <Text style={{ fontSize: 18, marginBottom: 10, color: 'white' }}> Flip </Text>
              </TouchableOpacity>
            </View>
          </Camera>
      )}
      { !hasCameraPermission && (
        <Text>No camera permissions :(</Text>
      )}
    </View>
  );
}
