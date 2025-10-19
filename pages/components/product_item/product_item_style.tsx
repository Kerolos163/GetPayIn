import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    width: "49%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    borderColor: "#ddd",
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
    marginHorizontal: 2,
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  image: { width: 120, height: 120, resizeMode: "cover" },
  containerInfo: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    width: "100%",
  },
});

export default styles;
