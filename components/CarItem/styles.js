import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  carContainer: {
    width: "100%",
    height: "100%",
    backgroundColor: "orange",
  },
  header: {
    marginTop: 50,
    marginHorizontal: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  headerTitle: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    alignItems: "center",
    justifyContent: "center",
  },
  bgImage: {
    width: "100%",
    height: "100%",
    position: "absolute",
  },
  batterySection: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  batteryImage: {
    marginRight: 12,
    height: 26,
    width: 70,
  },
  batteryText: {
    color: "white",
    fontSize: 35,
    fontWeight: "bold",
  },
  status: {
    alignItems: "center",
  },
  statusText: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
  controls: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 175,
  },
  controlsButton: {
    borderWidth: 1,
    borderColor: "white",
    borderRadius: 50,
    padding: 18,
    marginHorizontal: 25,
  },
});

export default styles;
