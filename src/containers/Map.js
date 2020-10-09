import React, { useState, useEffect } from "react";
import MapView from "react-native-maps";
import * as Location from "expo-location";

import { API } from "../constants";
import { ActivityIndicator } from "react-native";

const Map = () => {
  const [houses, setHouses] = useState({ loading: true, data: [] });
  const [location, setLocation] = useState(null);
  console.log("Map -> location", location);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);

  const fetchHouses = async () => {
    setHouses({ ...houses, loading: true });
    const response = await fetch(`${API}/housings`, {
      headers: new Headers({
        Authorization: `Bearer ${"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmODA1YzE5YjQ1MDQ5MDAxNjkxZTkyZCIsImlhdCI6MTYwMjI0NzcwNX0.pic-VM3TxvsXY9e_PInYGPTC1cchh0bM3yPKst7WhBk"}`,
      }),
    });

    setHouses({ loading: false, data: await response.json() });
  };

  useEffect(() => {
    fetchHouses();
  }, []);

  return location ? (
    <MapView
      style={{ flex: 1 }}
      initialRegion={{
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}
    />
  ) : (
    <ActivityIndicator />
  );
};

export default Map;
