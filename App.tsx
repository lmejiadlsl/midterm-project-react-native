import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import JobFinderScreen from './src/screens/JobFinderScreen';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>JobFinder App</Text>
      <JobFinderScreen />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 20,
  }
});