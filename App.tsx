import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import globalStyles from "./src/styles/globalstyles";
import AppNavigator from "./src/navigation/AppNavigator";
import { SavedJobsProvider } from "./src/context/SavedJobsContext";
import { ThemeProvider } from "./src/context/ThemeContext";
import 'react-native-gesture-handler';

export default function App() {
  return (
    <ThemeProvider>
      <SavedJobsProvider>
        <SafeAreaView style={globalStyles.safeArea}>
          <StatusBar style="auto" />
          <AppNavigator /> 
        </SafeAreaView>
      </SavedJobsProvider>
    </ThemeProvider>
  );
}