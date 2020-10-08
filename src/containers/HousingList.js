import React, { useState } from "react";
import {
  ScrollView,
  TouchableOpacity,
  Text,
  StyleSheet,
  View,
} from "react-native";

import HousingListItem from "../components/HousingListItem";
import housings from "../data/housings.json";

const HousingList = ({ onScreenChange }) => {
  const [houses, setHouses] = useState(housings);
  return (
    <ScrollView>
      <View style={styles.header}>
        <Text style={styles.headerText}>&lt;</Text>
        <Text style={styles.headerText}>Partout</Text>
      </View>

      {houses.map((housing) => (
        <TouchableOpacity
          key={housing.listing.id}
          onPress={() => onScreenChange("detail", { housing })}
        >
          <HousingListItem housing={housing} />
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  header: {
    position: "absolute",
    backgroundColor: "rgba(200, 200, 200, 0.5)",
    width: "100%",
    zIndex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    borderWidth: 1,
    borderColor: "#ddd",
    padding: 15,
  },
  headerText: {
    fontWeight: "bold",
  },
});

export default HousingList;
