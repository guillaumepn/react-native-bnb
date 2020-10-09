import React from "react";
import { Text, StyleSheet, Image, View, TouchableOpacity } from "react-native";
import StarRating from "../components/StarRating";

const HousingDetail = ({ route, navigation }) => {
  const { housing } = route.params;
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.header}>
        <Text style={styles.headerText}>&lt;</Text>
        <Text style={styles.headerText}>Détail d'un logement</Text>
      </View>

      <Image
        source={{ uri: housing.listing.picture.picture }}
        style={styles.image}
      />
      <View style={styles.container}>
        <View>
          <View style={styles.block}>
            <Text style={styles.descriptionText}>{housing.listing.name}</Text>
            <Text style={styles.descriptionSubText}>
              ({housing.listing.city})
            </Text>
          </View>
          <View
            style={[
              styles.block,
              { flexDirection: "row", justifyContent: "space-between" },
            ]}
          >
            <View>
              <Text style={styles.titleText}>
                {housing.listing.space_type} - {housing.listing.guest_label}
              </Text>
              <Text>
                Hôte :{" "}
                <Text style={styles.hostname}>
                  {housing.listing.user.first_name}
                </Text>
              </Text>
            </View>
            <View>
              <Image
                source={{ uri: housing.listing.user.picture_url }}
                style={styles.hostImage}
              />
            </View>
          </View>
          <View
            style={[
              styles.block,
              {
                borderBottomWidth: 0,
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "flex-start",
              },
            ]}
          >
            <StarRating rating={housing.listing.star_rating} size={30} />
            <Text style={styles.priceText}>
              <Text style={{ fontSize: 26, fontWeight: "bold" }}>
                {housing.pricing_quote.rate.amount_formatted}
              </Text>{" "}
              / nuit
            </Text>
          </View>
        </View>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("List")}
        >
          <Text style={styles.buttonText}>Accueil</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 15,
    flex: 1,
    justifyContent: "space-between",
  },
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
  image: {
    height: 250,
  },
  block: {
    borderBottomWidth: 1,
    borderBottomColor: "lightgrey",
    paddingVertical: 15,
  },
  titleText: {
    fontWeight: "bold",
    color: "grey",
    marginBottom: 7,
  },
  descriptionText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "grey",
    marginBottom: 5,
  },
  descriptionSubText: {
    color: "lightgrey",
  },
  priceText: {
    color: "grey",
    marginBottom: 3,
  },
  hostname: {
    color: "limegreen",
  },
  hostImage: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  button: {
    borderTopWidth: 1,
    borderTopColor: "lightgrey",
    padding: 10,
  },
  buttonText: {
    color: "grey",
    textAlign: "center",
  },
});

export default HousingDetail;
