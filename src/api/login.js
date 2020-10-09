import AsyncStorage from "@react-native-community/async-storage";

import { API } from "../constants";
import Base64 from "../helpers/crypto";

export const login = async (email, password) => {
  const response = await fetch(`${API}/auth`, {
    method: "post",
    headers: new Headers({
      Authorization: "Basic " + Base64.btoa(`${email}:${password}`),
    }),
  })
    .then((res) => res.json())
    .then((res) => res)
    .catch((err) => console.error(err));

  if (response) {
    await AsyncStorage.setItem("@token", response.token);

    return { status: "success", message: "Vous êtes connecté" };
  }

  return { status: "error", message: "Mauvais identifiants" };
};
