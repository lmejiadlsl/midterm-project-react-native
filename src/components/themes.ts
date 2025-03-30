// src/styles/themes.ts
export const lightTheme = {
    primary: '#3498db',
    background: '#ffffff',
    cardBackground: '#f9f9f9',
    text: '#333333',
    border: '#e0e0e0',
    buttonText: '#ffffff',
    // Add more colors as needed
  };
  
  export const darkTheme = {
    primary: '#2980b9', 
    background: '#121212',
    cardBackground: '#1e1e1e',
    text: '#f5f5f5',
    border: '#333333',
    buttonText: '#ffffff',
    // Add more colors as needed
  };
  
  export type Theme = typeof lightTheme;