import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { Appearance } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export type ThemeColors = {
  background: string;
  cardBackground: string;
  text: string;
  textSecondary: string;
  textOnPrimary: string;
  primary: string;
  success: string;
  error: string;
  shadow: string;
  inputBackground: string;
  border: string;
  disabled: string;
};

export type Theme = {
  colors: ThemeColors;
};

type ThemeContextType = {
  theme: Theme;
  isDark: boolean;
  toggleTheme: () => void;
};

const lightTheme: Theme = {
    colors: {
      background: "#f8f9fa",
      cardBackground: "#ffffff",
      text: "#000000",
      textSecondary: "#555555",
      textOnPrimary: "#ffffff",
      primary: "#007bff",
      success: "#28a745",
      error: "#dc3545",
      shadow: "#000000",
      inputBackground: "#ffffff",
      border: "#cccccc",
      disabled: "#bdc3c7",
    },
  };
  
  const darkTheme: Theme = {
      colors: {
        background: "#121212",
        cardBackground: "#1e1e1e",
        text: "#ffffff",
        textSecondary: "#aaaaaa",
        textOnPrimary: "#ffffff",
        primary: "#1a73e8",
        success: "#34a853",
        error: "#d93025",
        shadow: "#ffffff",
        inputBackground: "#2d2d2d", // Adjust this to be lighter for better contrast
        border: "#444444",
        disabled: "#7f8c8d",
      },
    };

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const loadTheme = async () => {
      const storedTheme = await AsyncStorage.getItem("theme");
      if (storedTheme !== null) {
        setIsDark(storedTheme === "dark");
      } else {
        setIsDark(Appearance.getColorScheme() === "dark");
      }
    };
    loadTheme();
  }, []);

  const toggleTheme = async () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    await AsyncStorage.setItem("theme", newTheme ? "dark" : "light");
  };

  const theme = isDark ? darkTheme : lightTheme;

  return (
    <ThemeContext.Provider value={{ theme, isDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};