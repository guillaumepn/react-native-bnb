import React, { useState } from "react";
import {
  ScrollView,
  TouchableOpacity,
  Text,
  StyleSheet,
  View,
} from "react-native";
import { FlatList } from "react-native-gesture-handler";

import HousingListItem from "../components/HousingListItem";
import housings from "../data/housings.json";

const HousingList = ({ navigation }) => {
  const [houses, setHouses] = useState(housings);
  return (
    <ScrollView>
      <TouchableOpacity onPress={() => navigation.navigate("Search")}>
        <View style={styles.header}>
          <Text style={styles.headerText}>&lt;</Text>
          <Text style={styles.headerText}>Partout</Text>
        </View>
      </TouchableOpacity>

      <FlatList
        data={houses}
        keyExtractor={(item) => item.listing.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate("Detail", { housing: item })}
          >
            <HousingListItem housing={item} />
          </TouchableOpacity>
        )}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: "rgba(200, 200, 200, 0.5)",
    width: "100%",
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
