import React from "react";
import { Image, StyleSheet, View } from "react-native";

const StarRating = ({ rating, size = 15 }) => {
  return (
    <View style={[styles.container, { height: size }]}>
      {Array.from({ length: 5 }).map((_, index) => (
        <Image
          key={index}
          resizeMode="contain"
          source={
            index + 1 <= rating
              ? require("../images/star-active.png")
              : require("../images/star.png")
          }
          style={{ width: size, height: size }}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
});

export default StarRating;
