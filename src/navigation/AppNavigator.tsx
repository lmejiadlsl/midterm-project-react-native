import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createStackNavigator } from "@react-navigation/stack";
import { Ionicons } from "@expo/vector-icons";
import JobFinderScreen from "../screens/JobFinderScreen";
import SavedJobsScreen from "../screens/SavedJobsScreen";
import ApplicationForm from "../screens/ApplicationForm";
import { RootStackParamList } from "../types/navigation";
import { useTheme } from "../context/ThemeContext";

const Stack = createStackNavigator<RootStackParamList>();
const Drawer = createDrawerNavigator();

const JobStack = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Job Finder" component={JobFinderScreen} />
    <Stack.Screen 
      name="ApplicationForm" 
      component={ApplicationForm}
      options={{ title: 'Application Form' }}
    />
  </Stack.Navigator>
);

// Add a new SavedJobsStack to include the ApplicationForm
const SavedJobsStack = () => (
  <Stack.Navigator initialRouteName="Saved Jobs" screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Saved Jobs" component={SavedJobsScreen} />
    <Stack.Screen 
      name="ApplicationForm" 
      component={ApplicationForm}
      options={{ title: "Application Form" }}
    />
  </Stack.Navigator>
);


export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Job Finder">
        <Drawer.Screen 
          name="Job Finder" 
          component={JobStack}
          options={{
            drawerIcon: ({ color, size }) => (
              <Ionicons name="briefcase-outline" size={size} color={color} />
            ),
          }}
        />
        <Drawer.Screen 
          name="Saved Jobs" 
          component={SavedJobsStack} // Use the stack instead of direct component
          options={{
            drawerIcon: ({ color, size }) => (
              <Ionicons name="bookmark-outline" size={size} color={color} />
            ),
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}