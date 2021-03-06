import React, { useState, useEffect } from "react";
import { TouchableOpacity } from "react-native";

import HousingListItem from "../components/HousingListItem";
import { API } from "../constants";
import HousingListView from "./HousingList.View";

const HousingList = ({ navigation }) => {
  const [houses, setHouses] = useState({ loading: true, data: [] });
  console.log("HousingList -> houses", houses);

  const fetchHouses = async () => {
    setHouses({ ...houses, loading: true });
    const response = await fetch(`${API}/housings/public`);

    setHouses({ loading: false, data: await response.json() });
  };

  useEffect(() => {
    fetchHouses();
  }, []);

  const sections = houses.data
    ? houses.data
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
                  onPress={() =>
                    navigation.navigate("Detail", { housing: item })
                  }
                >
                  <HousingListItem housing={item} />
                </TouchableOpacity>
              ),
            },
          ];
        }, [])
    : [];

  return (
    <HousingListView
      navigation={navigation}
      sections={sections}
      fetchHouses={fetchHouses}
      loading={houses.loading}
    />
  );
};

export default HousingList;
