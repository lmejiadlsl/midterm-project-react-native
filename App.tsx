import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import JobFinderScreen from './src/screens/JobFinderScreen';
import { SafeAreaView } from 'react-native-safe-area-context';
import globalStyles from './src/styles/globalstyles';

export default function App() {
  return (
    <SafeAreaView style={globalStyles.safeArea}>
      <View style={globalStyles.header}>
        <Text style={globalStyles.headerTitle}>ResuMe</Text>
      </View>
      <View style={styles.container}>
        <JobFinderScreen />
        <StatusBar style="auto" />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  }
});
