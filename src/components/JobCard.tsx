import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Job } from "../hooks/useFetchJobs";
import globalStyles from "../styles/globalstyles";

interface JobCardProps {
  job: Job;
  onSaveJob?: (job: Job) => void;
  navigation?: any;
}

const JobCard: React.FC<JobCardProps> = ({ job, onSaveJob, navigation }) => {
  const [isSaved, setIsSaved] = useState(false);

  const handleSaveJob = () => {
    if (!isSaved && onSaveJob) {
      setIsSaved(true);
      onSaveJob(job);
    }
  };

  const handleApply = () => {
    if (navigation) {
      navigation.navigate("ApplicationForm", { job });
    }
  };

  return (
    <View style={globalStyles.card}>
      <Text style={globalStyles.title}>{job.title}</Text>

      {job.company && (
        <Text style={globalStyles.company}>
          <Text style={globalStyles.label}>Company: </Text>
          {job.company}
        </Text>
      )}

      {job.location && (
        <Text style={globalStyles.location}>
          <Text style={globalStyles.label}>Location: </Text>
          {job.location}
        </Text>
      )}

      {job.salary && (
        <Text style={globalStyles.salary}>
          <Text style={globalStyles.label}>Salary: </Text>
          {job.salary}
        </Text>
      )}

      {job.jobType && (
        <Text style={globalStyles.jobType}>
          <Text style={globalStyles.label}>Type: </Text>
          {job.jobType}
        </Text>
      )}

      <View style={globalStyles.buttonContainer}>
        <TouchableOpacity
          style={isSaved ? globalStyles.savedButton : globalStyles.saveButton}
          onPress={handleSaveJob}
          disabled={isSaved}
        >
          <Text style={isSaved ? globalStyles.savedButtonText : globalStyles.buttonText}>
            {isSaved ? "Saved" : "Save Job"}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={globalStyles.applyButton}
          onPress={handleApply}
        >
          <Text style={globalStyles.buttonText}>Apply</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default JobCard;
