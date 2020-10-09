import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { login } from "../api/login";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [apiResponse, setApiResponse] = useState({ status: "", message: "" });

  const onLogin = () => {
    const response = login(email, password);
    console.log("onLogin -> password", password);
    console.log("onLogin -> email", email);
    console.log("onLogin -> response", response);
    setApiResponse(response);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Log In</Text>
      <View>
        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.textInput}
          selectionColor="#fff"
          value={email}
          onChangeText={(email) => setEmail(email)}
        />
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text style={styles.label}>Password</Text>
          <TouchableOpacity style={styles.label}>
            <Text style={[styles.label, { textTransform: "none" }]}>Show</Text>
          </TouchableOpacity>
        </View>
        <TextInput
          style={styles.textInput}
          selectionColor="#fff"
          value={password}
          onChangeText={(password) => setPassword(password)}
          secureTextEntry
        />
        <View
          style={{
            alignSelf: "flex-end",
            marginTop: 30,
          }}
        >
          <TouchableOpacity onPress={onLogin}>
            <Text style={styles.label}>Se connecter</Text>
          </TouchableOpacity>
        </View>

        {apiResponse.status ? (
          <View
            style={{
              marginTop: 30,
              color: "#fff",
              borderRadius: 20,
              backgroundColor:
                apiResponse.status === "success" ? "limegreen" : "crimson",
              justifyContent: "space-between",
              flexDirection: "row",
              paddingHorizontal: 10,
              alignItems: "center",
            }}
          >
            <Text
              style={{
                color: "#fff",
              }}
            >
              {apiResponse.message}{" "}
            </Text>
            <TouchableOpacity
              onPress={() => setApiResponse({ status: "", message: "" })}
              style={{ marginLeft: 20 }}
            >
              <Text style={{ color: "#fff", fontSize: 20 }}>&times;</Text>
            </TouchableOpacity>
          </View>
        ) : null}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#118086",
    padding: 20,
  },
  title: {
    fontSize: 28,
    color: "#fff",
    marginBottom: 30,
  },
  label: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 12,
    textTransform: "uppercase",
    marginBottom: 10,
  },
  textInput: {
    color: "#fff",
    marginBottom: 25,
    borderBottomWidth: 1,
    borderBottomColor: "#fff",
  },
});

export default Login;
