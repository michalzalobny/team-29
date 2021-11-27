import React, { createContext, useContext, useState } from 'react';

type Props = {
  children: React.ReactNode;
};

type LoggerContextTypes = {
  isLoggerOpen: boolean;
  setIsLoggerOpen: React.Dispatch<React.SetStateAction<boolean>>;
  activeLoggerMode: ActiveLoggerMode;
  setActiveLoggerMode: React.Dispatch<React.SetStateAction<ActiveLoggerMode>>;
};

export type ActiveLoggerMode = 'signin' | 'signup';

const LoggerContext = createContext<LoggerContextTypes | undefined>(undefined);

export const LoggerContextProvider = React.memo<Props>((props) => {
  const { children } = props;

  const [isLoggerOpen, setIsLoggerOpen] = useState(false);
  const [activeLoggerMode, setActiveLoggerMode] =
    useState<ActiveLoggerMode>('signin');

  return (
    <LoggerContext.Provider
      value={{
        isLoggerOpen,
        setIsLoggerOpen,
        activeLoggerMode,
        setActiveLoggerMode,
      }}
    >
      {children}
    </LoggerContext.Provider>
  );
});

export const useLoggerContext = () => {
  const ctx = useContext(LoggerContext);
  if (ctx === undefined) {
    throw new Error(
      'useLoggerContext must be used within a LoggerContextProvider',
    );
  }
  return ctx;
};

LoggerContext.displayName = 'LoggerContext';
LoggerContextProvider.displayName = 'LoggerContextProvider';
