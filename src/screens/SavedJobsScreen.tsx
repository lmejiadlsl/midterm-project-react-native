import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import { useSavedJobs } from "../context/SavedJobsContext";
import JobCard from "../components/JobCard";

const SavedJobsScreen = ({ navigation }: { navigation: any }) => {
  const { savedJobs } = useSavedJobs();

  if (savedJobs.length === 0) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Saved Jobs</Text>
        <Text style={styles.text}>You have no saved jobs yet.</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Saved Jobs</Text>
      <FlatList
        data={savedJobs}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <JobCard 
            job={item} 
            navigation={navigation}
            savedJobScreen={true}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f9fa",
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
    color: "#555",
    textAlign: "center",
  }
});

export default SavedJobsScreen;