import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Job } from "../hooks/useFetchJobs";
import globalStyles from "../styles/globalstyles";
import { Ionicons } from "@expo/vector-icons";

interface JobCardProps {
  job: Job;
  onSaveJob: (job: Job) => void;
  savedJobs: Job[];
  navigation?: any;
}

const JobCard: React.FC<JobCardProps> = ({ job, onSaveJob, savedJobs, navigation }) => {
  const [isSaved, setIsSaved] = useState(false);

  useEffect(() => {
    // Check if the job is already in savedJobs
    setIsSaved(savedJobs.some((savedJob) => savedJob.id === job.id));
  }, [savedJobs]);

  const handleSaveJob = () => {
    if (!isSaved) {
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

      {/* Button Container */}
      <View style={globalStyles.buttonContainer}>
        {/* Apply Button */}
        <TouchableOpacity style={globalStyles.applyButton} onPress={handleApply}>
          <Text style={globalStyles.buttonText}>Apply</Text>
        </TouchableOpacity>

        {/* Save Job Button */}
        <TouchableOpacity 
          style={isSaved ? globalStyles.savedButton : globalStyles.saveButton}
          onPress={handleSaveJob}
          disabled={isSaved}
        >
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Ionicons name={isSaved ? "bookmark" : "bookmark-outline"} size={18} color="white" />
            <Text style={isSaved ? globalStyles.savedButtonText : globalStyles.buttonText}>
              {isSaved ? "Saved" : "Save Job"}
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default JobCard;
