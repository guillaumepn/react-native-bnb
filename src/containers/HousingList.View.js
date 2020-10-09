import React from "react";
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  View,
  SectionList,
} from "react-native";

const HousingListView = ({ navigation, sections, fetchHouses, loading }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate("Search")}>
        <View style={styles.header}>
          <Text style={styles.headerText}>&lt;</Text>
          <Text style={styles.headerText}>Partout</Text>
        </View>
      </TouchableOpacity>

      <SectionList
        onRefresh={fetchHouses}
        sections={sections}
        keyExtractor={({ listing }) => listing.id}
        renderSectionHeader={({ section }) => (
          <Text style={styles.cityHeaderText}>{section.title}</Text>
        )}
        stickySectionHeadersEnabled={false}
        refreshing={loading}
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

export default HousingListView;
