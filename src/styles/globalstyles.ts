import { StyleSheet } from "react-native";
import { ThemeColors } from "../context/ThemeContext";

export const createGlobalStyles = (colors: ThemeColors) => StyleSheet.create({
  // General Styles
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: colors.background,
  },
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  safeArea: {
    flex: 1,
    backgroundColor: colors.background,
  },

  // Header Styles
  header: {
    paddingTop: 50,
    paddingBottom: 10,
    alignItems: "center",
    backgroundColor: colors.primary,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: colors.textOnPrimary,
  },

  // Card Styles
  card: {
    padding: 16,
    marginVertical: 8,
    backgroundColor: colors.cardBackground,
    borderRadius: 8,
    elevation: 3,
    shadowColor: colors.shadow,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },

  // Job Information Styles
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: colors.text,
  },
  company: {
    fontSize: 16,
    color: colors.textSecondary,
  },
  location: {
    fontSize: 14,
    color: colors.textSecondary,
  },
  salary: {
    fontSize: 16,
    fontWeight: "600",
    color: colors.primary,
  },
  jobType: {
    fontSize: 14,
    color: colors.success,
    fontWeight: "500",
  },
  label: {
    fontWeight: "bold",
    color: colors.text,
  },

  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10,
  },
  
  applyButton: {
    backgroundColor: colors.primary,
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    width: "48%", 
    height: 45,
  },
  
  saveButton: {
    backgroundColor: colors.primary,
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    width: "48%",
    height: 45,
  },
  
  savedButton: {
    backgroundColor: colors.success,
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    width: "48%",
    height: 45,
  },
  
  buttonText: {
    color: colors.textOnPrimary,
    fontWeight: "bold",
  },
  
  savedButtonText: {
    color: colors.textOnPrimary,
    fontWeight: "bold",
  },

  // Search Bar Styles
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.inputBackground,
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 8,
    marginVertical: 10,
    shadowColor: colors.shadow,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  searchIcon: {
    marginRight: 8,
    color: colors.textSecondary,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: colors.text,
  },

  errorText: {
    color: colors.error,
    fontSize: 16,
    textAlign: "center",
    marginTop: 10,
  },
  noJobsText: {
    fontSize: 16,
    textAlign: "center",
    color: colors.textSecondary,
    marginTop: 20,
  },

  removeButton: {
    backgroundColor: colors.error,
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    width: "48%",
    height: 45,
  },
  removeButtonText: {
    color: colors.textOnPrimary,
    marginLeft: 5,
    fontWeight: 'bold',
  },
});

// Default export with light theme colors for backward compatibility
const defaultColors: ThemeColors = {
  background: "#f8f9fa",
  cardBackground: "#93f9f9",
  text: "#000000",
  textSecondary: "#555555",
  textOnPrimary: "#ffffff",
  primary: "#007bff",
  success: "#28a745",
  error: "#dc3545",
  shadow: "#000000",
  inputBackground: "#ffffff",
  border: "#cccccc",
  disabled: "#bdc3c7", // Add this line
};

export default createGlobalStyles(defaultColors);