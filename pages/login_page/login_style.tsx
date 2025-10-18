import { StyleSheet } from "react-native";

export default StyleSheet.create({
  body: { flex: 1, padding: 20 },
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  text: {
    fontSize: 30,
    color: "black",
    textTransform: "capitalize",
    fontWeight: "800",
    fontStyle: "italic",
    marginBottom: 20,
  },
  input: {
    margin: 12,
    borderWidth: 1,
    padding: 10,
    width: "90%",
    borderRadius: 10,
    fontSize: 18,
  },
  forgetPassword: {
    textAlign: "right",
    width: "100%",
    marginRight: 32,
    color: "#009C94",
    textDecorationLine: "underline",
    fontSize: 14,
  },
  signUp: {
    color: "#009C94",
    fontWeight: "bold",
    fontSize: 16,
    textDecorationLine: "underline",
    paddingLeft: 8,
  },
  loginButton: {
    backgroundColor: "#009C94",
    width: "90%",
    padding: 10,
    borderRadius: 10,
    marginTop: 20,
  },
  loginText: {
    textAlign: "center",
    color: "white",
    fontWeight: "bold",
    fontSize: 18,
  },
});
