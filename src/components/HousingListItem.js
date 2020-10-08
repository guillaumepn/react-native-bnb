import React from "react";
import { Image, Text, View, StyleSheet } from "react-native";
import StarRating from "./StarRating";

const HousingListItem = ({ housing }) => {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: housing.listing.picture.picture }}
        style={styles.image}
      />
      <Text style={styles.titleText}>
        {housing.listing.space_type} - {housing.listing.guest_label}
      </Text>
      <Text style={styles.descriptionText}>{housing.listing.name}</Text>
      <Text style={styles.priceText}>
        {housing.pricing_quote.rate.amount_formatted} par nuit
      </Text>
      <StarRating rating={housing.listing.star_rating} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: "10%",
    marginVertical: 10,
  },
  image: {
    height: 150,
    borderRadius: 3,
    marginBottom: 20,
  },
  titleText: {
    textTransform: "uppercase",
    fontSize: 10,
    fontWeight: "bold",
    color: "brown",
    marginBottom: 7,
  },
  descriptionText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "grey",
    marginBottom: 5,
  },
  priceText: {
    color: "grey",
    marginBottom: 3,
  },
});

export default HousingListItem;
