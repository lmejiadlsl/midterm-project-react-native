import { StyleSheet } from "react-native";

const globalStyles = StyleSheet.create({
  // General Styles
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#c5eaea",
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

  // Header Styles
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

  // Card Styles
  card: {
    padding: 16,
    marginVertical: 8,
    backgroundColor: "#93f9f9",
    borderRadius: 8,
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },

  // Job Information Styles
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
    alignItems: "center",
    marginTop: 10,
  },
  
  applyButton: {
    backgroundColor: "#007bff",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignItems: "center",
    width: "48%", 
  },
  
  saveButton: {
    backgroundColor: "#007bff",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignItems: "center",
    width: "48%", // Same width as apply button for consistency
  },
  
  savedButton: {
    backgroundColor: "#28a745",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignItems: "center",
    width: "48%", // Keeps the button width fixed when saved
  },
  
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
  
  
  savedButtonText: {
    color: "white",
    fontWeight: "bold",
  },

  // Search Bar Styles
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 8,
    marginVertical: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  searchIcon: {
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: "black",
  },

  errorText: {
    color: "red",
    fontSize: 16,
    textAlign: "center",
    marginTop: 10,
  },
  noJobsText: {
    fontSize: 16,
    textAlign: "center",
    color: "#777",
    marginTop: 20,
  },
});

export default globalStyles;
