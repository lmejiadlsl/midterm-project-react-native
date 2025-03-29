import React, { useState } from "react";
import { View, Text, FlatList, ActivityIndicator } from "react-native";
import { useFetchJobs } from "../hooks/useFetchJobs";
import JobCard from "../components/JobCard";
import SearchBar from "../components/SearchBar";
import globalStyles from "../styles/globalstyles";
import { useSavedJobs } from "../context/SavedJobsContext";

const JobFinderScreen = ({ navigation }: { navigation: any }) => {
  const { jobs, loading, error } = useFetchJobs();
  const [searchQuery, setSearchQuery] = useState("");
  const { savedJobs, addSavedJob } = useSavedJobs();

  const filteredJobs = jobs.filter(
    (job) =>
      job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.company?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.location?.toLowerCase().includes(searchQuery.toLowerCase())
  );

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
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

      {filteredJobs.length === 0 ? (
        <Text>No jobs found.</Text>
      ) : (
        <FlatList
          data={filteredJobs}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <JobCard 
  job={item}  
  navigation={navigation} 
/>
          )}
        />
      )}
    </View>
  );
};

export default JobFinderScreen;