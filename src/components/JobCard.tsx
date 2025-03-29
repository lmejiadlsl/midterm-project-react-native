import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Job } from "../hooks/useFetchJobs";
import globalStyles from "../styles/globalstyles";
import { Ionicons } from "@expo/vector-icons";
import { useSavedJobs } from "../context/SavedJobsContext";

interface JobCardProps {
  job: Job;
  navigation?: any;
  savedJobScreen?: boolean;
}

const JobCard: React.FC<JobCardProps> = ({ 
  job, 
  navigation, 
  savedJobScreen = false 
}) => {
  const { savedJobs, addSavedJob, removeSavedJob } = useSavedJobs();
  
  const isSaved = savedJobs.some((savedJob) => savedJob.id === job.id);

  const handleSaveJob = () => {
    if (!isSaved) {
      addSavedJob(job);
    }
  };

  const handleRemoveJob = () => {
    removeSavedJob(job.id);
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

        <TouchableOpacity 
          style={savedJobScreen 
            ? globalStyles.removeButton 
            : (isSaved ? globalStyles.savedButton : globalStyles.saveButton)
          }
          onPress={savedJobScreen ? handleRemoveJob : handleSaveJob}
          disabled={!savedJobScreen && isSaved}
        >
          <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
            <Ionicons 
              name={savedJobScreen 
                ? "trash-outline" 
                : (isSaved ? "bookmark" : "bookmark-outline")
              } 
              size={18} 
              color="white" 
            />
            <Text style={[
              savedJobScreen 
                ? globalStyles.removeButtonText 
                : (isSaved ? globalStyles.savedButtonText : globalStyles.buttonText),
              { marginLeft: 5 }
            ]}>
              {savedJobScreen 
                ? "Remove" 
                : (isSaved ? "Saved" : "Save")
              }
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default JobCard;