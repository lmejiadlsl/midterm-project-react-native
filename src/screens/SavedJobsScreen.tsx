import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import { useSavedJobs } from "../context/SavedJobsContext";
import JobCard from "../components/JobCard";
import { useTheme } from "../context/ThemeContext"; // Add this import

const SavedJobsScreen = () => { // Remove navigation prop
  const { savedJobs } = useSavedJobs();
  const { theme } = useTheme(); // Get theme

  if (savedJobs.length === 0) {
    return (
      <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
        <Text style={[styles.title, { color: theme.colors.text }]}>Saved Jobs</Text>
        <Text style={[styles.text, { color: theme.colors.textSecondary }]}>
          You have no saved jobs yet.
        </Text>
      </View>
    );
  }

  return (
    <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <Text style={[styles.title, { color: theme.colors.text }]}>Saved Jobs</Text>
      <FlatList
        data={savedJobs}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <JobCard 
            job={item} 
            savedJobScreen={true} // Only pass props defined in JobCardProps
          />
        )}
      />
    </View>
  );
};

// Keep your existing StyleSheet but remove hardcoded colors
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
    paddingVertical: 10,
  },
  text: {
    fontSize: 16,
    textAlign: "center",
  }
});

export default SavedJobsScreen;