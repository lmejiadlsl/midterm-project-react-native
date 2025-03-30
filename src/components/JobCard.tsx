import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useTheme } from '../context/ThemeContext';
import { useSavedJobs } from '../context/SavedJobsContext';
import globalStyles from '../styles/globalstyles';
import { Job } from '../hooks/useFetchJobs';
import { RootStackParamList } from '../types/navigation';

interface JobCardProps {
  job: Job;
  savedJobScreen?: boolean;
  onPress?: () => void;
}

// Define valid icon names as a type
type ValidIconName = 'bookmark' | 'bookmark-outline' | 'trash-outline';

const JobCard: React.FC<JobCardProps> = ({ job, savedJobScreen = false }) => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const { theme } = useTheme();
  const { savedJobs, addSavedJob, removeSavedJob } = useSavedJobs();
  
  const isSaved = savedJobs.some(savedJob => savedJob.id === job.id);

  const handleSavePress = () => {
    if (!isSaved) {
      addSavedJob(job);
    }
  };

  const handleRemovePress = () => {
    removeSavedJob(job.id);
  };

  const handleApplyPress = () => {
    navigation.navigate('ApplicationForm', {
      job,
      fromSavedJobs: savedJobScreen
    });
  };

  // Get the appropriate icon name with proper typing
  const getIconName = (): ValidIconName => {
    if (savedJobScreen) return 'trash-outline';
    return isSaved ? 'bookmark' : 'bookmark-outline';
  };

  // Get the appropriate button text
  const getButtonText = () => {
    if (savedJobScreen) return 'Remove';
    return isSaved ? 'Saved' : 'Save';
  };

  // Get the appropriate button style
  const getButtonStyle = () => {
    if (savedJobScreen) return globalStyles.removeButton;
    return isSaved ? globalStyles.savedButton : globalStyles.saveButton;
  };

  // Get the appropriate button action
  const getButtonAction = () => {
    return savedJobScreen ? handleRemovePress : handleSavePress;
  };

  return (
    <View style={[
      globalStyles.card, 
      { backgroundColor: theme.colors.cardBackground }
    ]}>
      {/* Job Title */}
      <Text style={[globalStyles.title, { color: theme.colors.text }]}>
        {job.title}
      </Text>

      {/* Company */}
      {job.company && (
        <Text style={[globalStyles.company, { color: theme.colors.textSecondary }]}>
          <Text style={[globalStyles.label, { color: theme.colors.text }]}>Company: </Text>
          {job.company}
        </Text>
      )}

      {/* Location */}
      {job.location && (
        <Text style={[globalStyles.location, { color: theme.colors.textSecondary }]}>
          <Text style={[globalStyles.label, { color: theme.colors.text }]}>Location: </Text>
          {job.location}
        </Text>
      )}

      {/* Salary */}
      {job.salary && (
        <Text style={[globalStyles.salary, { color: theme.colors.primary }]}>
          <Text style={[globalStyles.label, { color: theme.colors.text }]}>Salary: </Text>
          {job.salary}
        </Text>
      )}

      {/* Job Type */}
      {job.jobType && (
        <Text style={[globalStyles.jobType, { color: theme.colors.success }]}>
          <Text style={[globalStyles.label, { color: theme.colors.text }]}>Type: </Text>
          {job.jobType}
        </Text>
      )}

      {/* Buttons Container */}
      <View style={globalStyles.buttonContainer}>
        {/* Apply Button */}
        <TouchableOpacity
          style={[
            globalStyles.applyButton,
            { backgroundColor: theme.colors.primary }
          ]}
          onPress={handleApplyPress}
        >
          <Text style={globalStyles.buttonText}>Apply</Text>
        </TouchableOpacity>

        {/* Save/Remove Button */}
        <TouchableOpacity
          style={getButtonStyle()}
          onPress={getButtonAction()}
          disabled={!savedJobScreen && isSaved}
        >
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Ionicons 
              name={getIconName()} 
              size={18} 
              color="white" 
            />
            <Text style={[globalStyles.buttonText, { marginLeft: 5 }]}>
              {getButtonText()}
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default JobCard;