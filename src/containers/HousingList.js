import React, { useState } from "react";
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  View,
  SectionList,
} from "react-native";

import HousingListItem from "../components/HousingListItem";
import housings from "../data/housings.json";

const HousingList = ({ navigation }) => {
  const [houses, setHouses] = useState(housings);
  const sections = houses
    .sort((a, b) => (a.listing.city > b.listing.city ? 1 : -1))
    .reduce((acc, current) => {
      const citySection = acc.find(
        (section) => section.title === current.listing.city
      );
      if (citySection) {
        citySection.data = [...citySection.data, current];
        return acc;
      }
      return [
        ...acc,
        {
          id: acc.length,
          title: current.listing.city,
          data: [current],
          renderItem: ({ item }) => (
            <TouchableOpacity
              onPress={() => navigation.navigate("Detail", { housing: item })}
            >
              <HousingListItem housing={item} />
            </TouchableOpacity>
          ),
        },
      ];
    }, []);

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate("Search")}>
        <View style={styles.header}>
          <Text style={styles.headerText}>&lt;</Text>
          <Text style={styles.headerText}>Partout</Text>
        </View>
      </TouchableOpacity>

      <SectionList
        sections={sections}
        keyExtractor={({ listing }) => listing.id}
        renderSectionHeader={({ section }) => (
          <Text style={styles.cityHeaderText}>{section.title}</Text>
        )}
        stickySectionHeadersEnabled={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
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
  cityHeader: {},
  cityHeaderText: {
    color: "limegreen",
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 20,
    marginLeft: 20,
  },
});

export default HousingList;
