import React from 'react';
import { createGlobalStyle } from 'styled-components';
import { useTheme } from '../context/ThemeContext';
import { themes } from './theme'; // theme definitions

const GlobalStyle = createGlobalStyle<{ theme: React.CSSProperties }>`
  body {
    background-color: ${props => props.theme.backgroundColor};
    color: ${props => props.theme.color};
    // Apply other global styles based on the theme
  }
`;

const ThemedApp: React.FC = () => {
    const { theme } = useTheme(); // Use the custom hook to get the current theme
    const themeStyle = themes[theme] || themes['default']; // Fallback to default if no theme matches

    return (
        <>
            <GlobalStyle theme={themeStyle} /> // Apply the theme globally
            {/* Rest of your app */}
        </>
    );
};

export default ThemedApp;
