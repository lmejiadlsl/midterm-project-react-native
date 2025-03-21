import React from "react";
import { View, Text, FlatList, ActivityIndicator } from "react-native";
import { useFetchJobs } from "../hooks/useFetchJobs";
import JobCard from "../components/JobCard";
import globalStyles from "../styles/globalstyles";

const JobFinderScreen = () => {
  const { jobs, loading, error } = useFetchJobs(); // Fetch jobs here

  console.log("Jobs state in JobFinderScreen:", jobs); // Debugging log

  if (loading) {
    return (
      <View style={globalStyles.center}>
        <ActivityIndicator size="large" color="#007AFF" />
        <Text>Loading jobs...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={globalStyles.center}>
        <Text style={{ color: "red" }}>Error: {error}</Text>
      </View>
    );
  }

  return (
    <View style={globalStyles.container}>
      {jobs.length === 0 ? (
        <Text>No jobs found.</Text>
      ) : (
        <FlatList
  data={jobs}
  keyExtractor={(item) => item.id}
  renderItem={({ item }) => <JobCard job={item} />} 
/>
      )}
    </View>
  );
};

export default JobFinderScreen;
