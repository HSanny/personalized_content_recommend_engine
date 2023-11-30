import React from 'react';
import { useAppSelector } from './app/hooks';
import { RootState } from './app/store';
import WelcomeScreen from './components/WelcomeScreen';
import { themes } from './style/theme';

const App: React.FC = () => {
  const currTheme = useAppSelector((state: RootState) => state.theme.currTheme);

  const currentTheme = themes[currTheme] || themes['default']

  return (
    <div style={currentTheme}>
      <WelcomeScreen />
    </div>
  );
};

export default App;