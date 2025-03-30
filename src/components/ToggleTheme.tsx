import React from 'react';
import { Switch, View, StyleSheet } from 'react-native';
import { useTheme } from '../context/ThemeContext';

const ToggleTheme = () => {
  const { theme, isDark, toggleTheme } = useTheme(); // Combined into one destructure

  const styles = StyleSheet.create({
    container: {
      padding: 10,
      borderWidth: 1,
      borderColor: theme.colors.border, // Now using the border color from theme
      borderRadius: 20,
      backgroundColor: theme.colors.background,
    },
  });

  return (
    <View style={styles.container}>
      <Switch
        value={isDark}
        onValueChange={toggleTheme}
        thumbColor={theme.colors.primary}
        trackColor={{
          false: theme.colors.border, // Using border color for inactive track
          true: theme.colors.textSecondary, // Using textSecondary for active track
        }}
      />
    </View>
  );
};

export default ToggleTheme;