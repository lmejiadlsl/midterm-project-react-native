import { StyleSheet } from "react-native";

const globalStyles = StyleSheet.create({
  // General Styles
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f8f9fa",
  },
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  safeArea: {
    flex: 1,
    backgroundColor: "#f8f9fa",
  },
  header: {
    paddingTop: 50,
    paddingBottom: 10,
    alignItems: "center",
    backgroundColor: "#007bff",
  },

  headerTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
  },

  card: {
    padding: 16,
    marginVertical: 8,
    backgroundColor: "#fff",
    borderRadius: 8,
    elevation: 3,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  company: {
    fontSize: 16,
    color: "#555",
  },
  location: {
    fontSize: 14,
    color: "#777",
  },
  salary: {
    fontSize: 16,
    fontWeight: "600",
    color: "#007bff",
  },
  jobType: {
    fontSize: 14,
    color: "#28a745",
    fontWeight: "500",
  },
  label: {
    fontWeight: "bold",
    color: "#333",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
  saveButton: {
    backgroundColor: "#007bff",
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 5,
    flex: 1,
    marginRight: 8,
    alignItems: "center",
  },
  savedButton: {
    backgroundColor: "#28a745",
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 5,
    flex: 1,
    marginRight: 8,
    alignItems: "center",
  },
  applyButton: {
    backgroundColor: "#007bff",
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 5,
    flex: 1,
    marginLeft: 8,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
  savedButtonText: {
    color: "white",
    fontWeight: "bold",
  },
});

export default globalStyles;
