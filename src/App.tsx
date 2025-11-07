import './App.css';
import { BlockAwards } from './Components/Block/BlockExperience';
import { BlockGetInTouch } from './Components/Block/BlockGetInTouch';
import { BlockHero } from './Components/Block/BlockHero';
import { BlockHyperlinks } from './Components/Block/BlockHyperlinks';
import { BlockProjects } from './Components/Block/BlockProjects';
import { BlockPressMentions } from './Components/Block/BlockTechStack';
import { Loader } from './Components/Loader';
import { TheHeader } from './Components/TheHeader';
import { DarkModeProvider, useDarkMode } from './context/DarkModeContext';

function App() {
  const { darkMode } = useDarkMode();
  return (
    <DarkModeProvider>
      <div
        className={`relative ${
          darkMode ? 'dark' : ''
        } bg-transparent overflow-x-hidden dark:bg-dark-primary transition-colors duration-200 ease-in-out `}>
        <TheHeader />
        <BlockHyperlinks />
        <BlockHero />
        <BlockProjects />
        <BlockAwards />
        <BlockPressMentions />
        <BlockGetInTouch />
        <Loader />
      </div>
    </DarkModeProvider>
  );
}

export default App;
