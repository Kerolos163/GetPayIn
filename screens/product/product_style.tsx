import { StyleSheet, View } from "react-native";

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: 40,
    paddingHorizontal: 4,
  },
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  contentContainerStyle: {
    padding: 10,
    justifyContent: "space-between",
    paddingBottom: 50,
  },
  errorText: {
    color: "red",
    fontSize: 18,
    textAlign: "center",
  }
});

export default styles;
