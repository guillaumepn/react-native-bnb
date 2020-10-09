import user from "../data/user.json";

export const login = (email, password) => {
  if (email === user.email && password === user.password) {
    return { status: "success", message: "Vous êtes connecté" };
  }
  return { status: "error", message: "Mauvais identifiants" };
};
