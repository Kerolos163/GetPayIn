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
    justifyContent: "flex-start",
    alignItems: "flex-start",
    width: "100%",
  },
  title: {
    fontWeight: "bold",
    fontSize: 16,
    color: "#009C94",
    textAlign: "center",
    textTransform: "capitalize",
    width: "100%",
    marginBottom: 10,
  },
  description: {
    fontSize: 14,
    color: "#555",
    marginBottom: 10,
    width: "100%",
  },
  price:{
    fontSize: 16,
    fontWeight: "bold",
    color: "#009C94",
  }
});

export default styles;
