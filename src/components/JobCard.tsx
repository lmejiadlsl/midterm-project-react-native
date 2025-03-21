import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Job } from "../hooks/useFetchJobs";
import globalStyles from "../styles/globalstyles";

interface JobCardProps {
  job: Job;
}

const JobCard: React.FC<JobCardProps> = ({ job }) => {
  return (
    <View style={globalStyles.card}>
      <Text style={globalStyles.title}>{job.title}</Text>
      
      {job.company && (
        <Text style={globalStyles.company}>
          <Text style={styles.label}>Company: </Text>
          {job.company}
        </Text>
      )}
      
      {job.location && (
        <Text style={globalStyles.location}>
          <Text style={styles.label}>Location: </Text>
          {job.location}
        </Text>
      )}
      
      {job.salary && (
        <Text style={globalStyles.salary}>
          <Text style={styles.label}>Salary: </Text>
          {job.salary}
        </Text>
      )}
      
      {job.jobType && (
        <Text style={styles.jobType}>
          <Text style={styles.label}>Type: </Text>
          {job.jobType}
        </Text>
      )}
      
      {job.description && (
        <View style={styles.descriptionContainer}>
          <Text style={styles.label}>Description:</Text>
          <Text style={globalStyles.description}>{job.description}</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  label: {
    fontWeight: 'bold',
    color: '#333',
  },
  jobType: {
    fontSize: 14,
    color: '#28a745',
    fontWeight: '500',
  },
  descriptionContainer: {
    marginTop: 8,
  }
});

export default JobCard;