import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer"
import { NavigationContainer } from "@react-navigation/native";
import JobFinderScreen from "../screens/JobFinderScreen";
import SavedJobsScreen from "../screens/SavedJobsScreen";
import { Ionicons } from "@expo/vector-icons"

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
    return (
      <NavigationContainer>
        <Drawer.Navigator 
          screenOptions={{
            drawerActiveTintColor: "#007bff", // Highlight color
            drawerInactiveTintColor: "#333", // Default text color
            headerShown: true, // Show header on each screen
          }}
        >
          <Drawer.Screen 
            name="JobFinder" 
            component={JobFinderScreen} 
            options={{
              title: "ResuMe", // Change header title
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
  }