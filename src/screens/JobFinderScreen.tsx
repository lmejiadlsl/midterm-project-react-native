import React, { useState } from "react";
import { View, Text, FlatList, ActivityIndicator, StyleSheet } from "react-native";
import { useFetchJobs } from "../hooks/useFetchJobs";
import JobCard from "../components/JobCard";
import SearchBar from "../components/SearchBar";
import { useSavedJobs } from "../context/SavedJobsContext";
import { useTheme } from "../context/ThemeContext";

const JobFinderScreen = ({ navigation }: { navigation: any }) => {
  const { jobs, loading, error } = useFetchJobs();
  const [searchQuery, setSearchQuery] = useState("");
  const { savedJobs, addSavedJob } = useSavedJobs();
  const { theme } = useTheme();

  const filteredJobs = jobs.filter(
    (job) =>
      job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.company?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.location?.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (loading) {
    return (
      <View style={[styles.center, { backgroundColor: theme.colors.background }]}>
        <ActivityIndicator size="large" color={theme.colors.primary} />
        <Text style={{ color: theme.colors.text }}>Loading jobs...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={[styles.center, { backgroundColor: theme.colors.background }]}>
        <Text style={{ color: theme.colors.error }}>Error: {error}</Text>
      </View>
    );
  }

  return (
    <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

      {filteredJobs.length === 0 ? (
        <Text style={{ 
          color: theme.colors.textSecondary,
          textAlign: 'center',
          marginTop: 20,
        }}>
          No jobs found.
        </Text>
      ) : (
        <FlatList
          data={filteredJobs}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <JobCard 
              job={item}  
              onPress={() => navigation.navigate('ApplicationForm', { job: item })}
            />
          )}
          contentContainerStyle={{ 
            paddingBottom: 20,
            paddingHorizontal: 8,
          }}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default JobFinderScreen;