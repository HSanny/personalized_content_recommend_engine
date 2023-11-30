import React, { createContext, useContext, useState, ReactNode } from 'react';

// Define the shape of the context data
interface ThemeContextType {
    theme: string; // The current theme
    setTheme: (theme: string) => void; // Function to change the theme
}

// Create a context with a default undefined value
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// Define Props type for ThemeProvider to only include children
interface Props {
    children: ReactNode;
}


// ThemeProvider component to provide theme data to its children
export const ThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [theme, setTheme] = useState<string>('default'); // State to hold the current theme

    // Provide the theme and setTheme function to children
    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

// Custom hook to use the theme context
export const useTheme = (): ThemeContextType => {
    const context = useContext(ThemeContext);
    if (!context) {
        // Ensures useTheme is used within a ThemeProvider
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
};



// Introduction to React's Context API
// React's Context API is a way to manage state globally and share it across multiple components, without the need to pass props down through multiple levels of component trees (prop drilling). It's especially useful for sharing data that can be considered “global” for a tree of React components, such as the current authenticated user, theme, or preferred language.

// The main components of Context are:

// React.createContext: Creates a Context object. When React renders a component that subscribes to this Context object, it will read the current context value from the nearest matching Provider above it in the tree.

// Context.Provider: Every Context object comes with a Provider React component that allows consuming components to subscribe to context changes.

// useContext Hook: Enables functional components to access the context values.