import React, { useState } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { SafeAreaView } from "react-navigation";

import user from "../data/user.json";

const Profile = ({ navigation }) => {
  const [profile, setProfile] = useState(user);
  return (
    <SafeAreaView>
      <View style={styles.header}></View>
      <View style={styles.user}>
        <Image
          source={{ uri: "https://bootdey.com/img/Content/avatar/avatar6.png" }}
          style={styles.avatar}
        />
        <Text style={styles.username}>John Doe</Text>
        <Text style={styles.email}>{profile.email}</Text>
        <Text style={styles.description}>
          Voyageur qui aime partager, je serais content de vous recevoir chez
          moi.
        </Text>
      </View>
      <TouchableOpacity
        style={styles.login}
        onPress={() => navigation.navigate("Login")}
      >
        <Text style={styles.loginText}>Se déconnecter</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#118086",
    height: 200,
  },
  user: {
    alignItems: "center",
    marginBottom: 30,
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 130,
    borderWidth: 3,
    borderColor: "#fff",
    marginTop: -65,
  },
  username: {
    fontSize: 28,
    color: "dimgray",
  },
  email: {
    marginVertical: 10,
    color: "#118086",
    fontSize: 16,
  },
  description: {
    color: "dimgray",
    textAlign: "center",
    marginHorizontal: 50,
    fontSize: 16,
  },
  login: {
    backgroundColor: "#fc4c54",
    width: 250,
    height: 45,
    alignSelf: "center",
    borderRadius: 30,
    justifyContent: "center",
  },
  loginText: { textAlign: "center", color: "#fff", fontSize: 16 },
});

export default Profile;
