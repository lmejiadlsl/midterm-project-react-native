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
  const route = useRoute<RouteProp<RootStackParamList, 'ApplicationForm'>>();
  const { job, fromSavedJobs } = route.params;
  const { theme } = useTheme();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contactNumber: "",
    reason: "",
  });

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = () => {
    // Strict email validation pattern
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
    if (!formData.name || !formData.email || !formData.reason) {
      Alert.alert("Error", "Please fill all required fields");
      return;
    }
  
    if (!emailPattern.test(formData.email.trim())) {
      Alert.alert("Error", "Please enter a valid email address (e.g., johndoe@mail.com)");
      return;
    }
  
    Alert.alert(
      "Success",
      `Application submitted for ${job.title}`,
      [{
        text: "OK",
        onPress: () => {
          setFormData({
            name: "",
            email: "",
            contactNumber: "",
            reason: "",
          });
          fromSavedJobs 
            ? navigation.navigate("Saved Jobs") 
            : navigation.goBack();
        },
      }]
    );
  };
  
  return (
    <ScrollView style={{ backgroundColor: theme.colors.background }}>
      <View style={[globalStyles.container, { padding: 20 }]}>
        <Text style={{ fontSize: 22, marginBottom: 20 }}>
          Applying to: {job.title}
        </Text>

        <InputField
          label="Full Name *"
          value={formData.name}
          onChangeText={(text) => handleChange("name", text)}
          placeholder="Your full name"
        />

        <InputField
          label="Email *"
          value={formData.email}
          onChangeText={(text) => handleChange("email", text)}
          placeholder="your.email@example.com"
          keyboardType="email-address"
        />

        <InputField
          label="Phone Number"
          value={formData.contactNumber}
          onChangeText={(text) => handleChange("contactNumber", text)}
          placeholder="+1 (123) 456-7890"
          keyboardType="phone-pad"
        />

        <InputField
          label="Why should we hire you? *"
          value={formData.reason}
          onChangeText={(text) => handleChange("reason", text)}
          placeholder="Explain your qualifications..."
          multiline
          numberOfLines={4}
        />

        <Button 
          title="Submit Application" 
          onPress={handleSubmit} 
        />
      </View>
    </ScrollView>
  );
};

export default ApplicationForm;
