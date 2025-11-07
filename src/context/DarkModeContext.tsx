import { PropsWithChildren, createContext, useContext, useState } from 'react';

const defaultValue = {
  darkMode: false,
  toggleDarkMode: () => undefined
};

const DarkModeContext = createContext(defaultValue);

const DarkModeProvider = ({ children }: PropsWithChildren) => {
  const date = new Date();
  const [darkMode, setDarkMode] = useState<boolean>(
    date.getHours() > 19 || date.getHours() < 6 ? true : false
  );
  const toggleDarkMode: () => undefined = () => {
    setDarkMode(!darkMode);
  };
  return (
    <>
      <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
        <div className={`${darkMode ? 'dark' : ''} `}>{children}</div>
      </DarkModeContext.Provider>
    </>
  );
};

const useDarkMode = () => {
  return useContext(DarkModeContext);
};
export { DarkModeContext, DarkModeProvider, useDarkMode };
