// AppNavigator.tsx - modified to fix double header on ApplicationForm
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
import ToggleTheme from "../components/ToggleTheme";

const Stack = createStackNavigator<RootStackParamList>();
const Drawer = createDrawerNavigator();

// JobStack with ApplicationForm's headerShown managed properly
const JobStack = () => {
  const { theme } = useTheme();
  
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="Job Finder" 
        component={JobFinderScreen} 
        options={{ headerShown: false }}
      />
      <Stack.Screen 
        name="ApplicationForm" 
        component={ApplicationForm}
        options={({ navigation }) => ({ 
          title: 'Application Form',
          // This is key: The header is shown, but the drawer is hidden
          headerLeft: () => (
            <Ionicons 
              name="arrow-back" 
              size={24} 
              color={theme.colors.text} 
              style={{ marginLeft: 15 }}
              onPress={() => navigation.goBack()}
            />
          ),
          headerStyle: {
            backgroundColor: theme.colors.cardBackground,
          },
          headerTintColor: theme.colors.text,
          headerRight: () => <ToggleTheme />,
        })}
      />
    </Stack.Navigator>
  );
};

// SavedJobsStack with ApplicationForm's headerShown managed properly
const SavedJobsStack = () => {
  const { theme } = useTheme();
  
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="Saved Jobs" 
        component={SavedJobsScreen} 
        options={{ headerShown: false }}
      />
      <Stack.Screen 
        name="ApplicationForm" 
        component={ApplicationForm}
        options={({ navigation }) => ({ 
          title: "Application Form",
          // This is key: The header is shown, but the drawer is hidden
          headerLeft: () => (
            <Ionicons 
              name="arrow-back" 
              size={24} 
              color={theme.colors.text} 
              style={{ marginLeft: 15 }}
              onPress={() => navigation.goBack()}
            />
          ),
          headerStyle: {
            backgroundColor: theme.colors.cardBackground,
          },
          headerTintColor: theme.colors.text,
          headerRight: () => <ToggleTheme />,
        })}
      />
    </Stack.Navigator>
  );
};

export default function AppNavigator() {
  const { theme, isDark } = useTheme();
  
  const navigationTheme = {
    dark: isDark,
    colors: {
      primary: theme.colors.primary,
      background: theme.colors.background,
      card: theme.colors.cardBackground,
      text: theme.colors.text,
      border: theme.colors.border,
      notification: theme.colors.primary,
    },
    fonts: {
      regular: {
        fontFamily: 'System',
        fontWeight: '400' as const,
      },
      medium: {
        fontFamily: 'System',
        fontWeight: '500' as const,
      },
      bold: {
        fontFamily: 'System',
        fontWeight: '700' as const,
      },
      heavy: {
        fontFamily: 'System',
        fontWeight: '800' as const,
      },
    }
  };

  return (
    <NavigationContainer theme={navigationTheme}>
      <Drawer.Navigator 
        initialRouteName="Job Finder"
        screenOptions={({ route }) => ({
          drawerStyle: {
            backgroundColor: theme.colors.cardBackground,
          },
          drawerActiveTintColor: theme.colors.primary,
          drawerInactiveTintColor: theme.colors.text,
          drawerActiveBackgroundColor: theme.colors.inputBackground,
          headerStyle: {
            backgroundColor: theme.colors.cardBackground,
          },
          headerTintColor: theme.colors.text,
          headerRight: () => <ToggleTheme />,
          // This is critical: hide drawer header when on ApplicationForm
          drawerItemStyle: {
            // If we're on ApplicationForm, hide drawer items
            display: route.name === "ApplicationForm" ? 'none' : 'flex',
          },
        })}
      >
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
          component={SavedJobsStack}
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