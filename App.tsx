import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import globalStyles from "./src/styles/globalstyles";
import AppNavigator from "./src/navigation/AppNavigator";

export default function App() {
  return (
    <SafeAreaView style={globalStyles.safeArea}>
      <StatusBar style="auto" />
      <AppNavigator /> 
    </SafeAreaView>
  );
}
