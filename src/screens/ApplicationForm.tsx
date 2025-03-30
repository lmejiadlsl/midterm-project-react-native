import React, { useState } from "react";
import { View, Text, Alert, ScrollView } from "react-native";
import { useTheme } from "../context/ThemeContext";
import Button from "../components/Button";
import InputField from "../components/InputField";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { RootStackParamList } from "../types/navigation";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import globalStyles from "../styles/globalstyles";

const ApplicationForm = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const route = useRoute<RouteProp<RootStackParamList, "ApplicationForm">>();
  const { job, fromSavedJobs } = route.params;
  const { theme, isDark } = useTheme(); // Use isDark from ThemeContext

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contactNumber: "",
    reason: "",
  });

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = () => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formData.name || !formData.email || !formData.reason) {
      Alert.alert("Error", "Please fill all required fields");
      return;
    }

    if (!emailPattern.test(formData.email.trim())) {
      Alert.alert("Error", "Please enter a valid email address (e.g., johndoe@mail.com)");
      return;
    }

    Alert.alert("Success", `Application Submitted for ${job.title}`, [
      {
        text: "Okay",
        onPress: () => {
          setFormData({
            name: "",
            email: "",
            contactNumber: "",
            reason: "",
          });

          if (fromSavedJobs) {
            navigation.reset({
              index: 0,
              routes: [{ name: "Job Finder" }],
            });
          } else {
            navigation.goBack();
          }
        },
      },
    ]);
  };

  return (
    <ScrollView style={{ backgroundColor: theme.colors.background }}>
      <View style={[globalStyles.container, { padding: 20 }]}>
        <Text style={{ fontSize: 22, marginBottom: 20, color: "#000000" }}>
          Applying to: {job.title}
        </Text>


<InputField
  label="Full Name *"
  value={formData.name}
  onChangeText={(text) => handleChange("name", text)}
  placeholder="Please enter your full name"
  labelStyle={{ color: isDark ? "#000000" : theme.colors.text }} // Black in dark mode
/>

<InputField
  label="Email *"
  value={formData.email}
  onChangeText={(text) => handleChange("email", text)}
  placeholder="your.email@example.com"
  keyboardType="email-address"
  labelStyle={{ color: isDark ? "#000000" : theme.colors.text }} // Black in dark mode
/>

<InputField
  label="Phone Number"
  value={formData.contactNumber}
  onChangeText={(text) => handleChange("contactNumber", text)}
  placeholder="+1 (123) 456-7890"
  keyboardType="phone-pad"
  labelStyle={{ color: isDark ? "#000000" : theme.colors.text }} // Black in dark mode
/>

<InputField
  label="Why should we hire you? *"
  value={formData.reason}
  onChangeText={(text) => handleChange("reason", text)}
  placeholder="Tell us about yourself..."
  multiline
  numberOfLines={4}
  labelStyle={{ color: isDark ? "#000000" : theme.colors.text }} // Black in dark mode
/>


        <Button title="Submit Application" onPress={handleSubmit} />
      </View>
    </ScrollView>
  );
};

export default ApplicationForm;
