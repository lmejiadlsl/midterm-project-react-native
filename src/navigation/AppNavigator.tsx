import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import JobFinderScreen from "../screens/JobFinderScreen";
import SavedJobsScreen from "../screens/SavedJobsScreen";

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const JobStack = () => {
    return (
      <Stack.Navigator screenOptions={{ headerShown: false }}> 
        <Stack.Screen name="ResuMe" component={JobFinderScreen} />
      </Stack.Navigator>
    );
  };
  
const AppNavigator = () => {
  return (
    <NavigationContainer>
     <Drawer.Navigator 
      initialRouteName="Job Finder" 
      screenOptions={{
        drawerActiveTintColor: "#007bff", // Highlight color
        drawerInactiveTintColor: "#333", // Default text color
        headerShown: true, // Show header on each screen
      }}
    >
      <Drawer.Screen 
        name="Job Finder" 
        component={JobStack} 
        options={{
          title: "ResuMe",
          drawerIcon: ({ color, size }) => (
            <Ionicons name="briefcase-outline" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen 
        name="Saved Jobs" 
        component={SavedJobsScreen} 
        options={{
          drawerIcon: ({ color, size }) => (
            <Ionicons name="bookmark-outline" size={size} color={color} />
          ),
        }}
      />
    </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;