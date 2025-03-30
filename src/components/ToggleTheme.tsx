// ToggleTheme.tsx
import React from 'react';
import { Switch, View, StyleSheet } from 'react-native';
import { useTheme } from '../context/ThemeContext';
import { Ionicons } from '@expo/vector-icons';

const ToggleTheme = () => {
  const { theme, isDark, toggleTheme } = useTheme();

  const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      marginRight: 15,
    },
    icon: {
      marginRight: 5,
    }
  });

  return (
    <View style={styles.container}>
      <Ionicons 
        name={isDark ? "moon" : "sunny"} 
        size={20} 
        color={theme.colors.text}
        style={styles.icon}
      />
      <Switch
        value={isDark}
        onValueChange={toggleTheme}
        thumbColor={isDark ? theme.colors.primary : "#f4f3f4"}
        trackColor={{
          false: "#767577",
          true: `${theme.colors.primary}80`, // Adding transparency
        }}
        ios_backgroundColor="#3e3e3e"
      />
    </View>
  );
};

export default ToggleTheme;