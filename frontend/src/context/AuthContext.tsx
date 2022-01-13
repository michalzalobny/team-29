import React, { createContext, useContext, useEffect, useRef, useState } from 'react';
import { toast } from 'react-toastify';

type Props = {
  children: React.ReactNode;
};

type AuthContextTypes = {
  user: User;
  setUser: React.Dispatch<React.SetStateAction<User>>;
};

export interface LoginJWT {
  scopes: Scope[];
  exp: number;
  sub: string;
}

type Scope = 'ADMIN' | 'USER';

export interface User {
  username: string | null;
  scope: Scope | null;
  tokenExpiration: number | null;
  accessToken: unknown | null;
}

const AuthContext = createContext<AuthContextTypes | undefined>(undefined);

const userDefault: User = {
  scope: null,
  username: null,
  accessToken: null,
  tokenExpiration: null,
};

export const AuthContextProvider = React.memo<Props>(props => {
  const { children } = props;

  const logoutTimeoutId = useRef<ReturnType<typeof setTimeout> | null>(null);

  const [user, setUser] = useState<User>(userDefault);

  const logOut = React.useCallback(() => {
    setUser(userDefault);
    toast.info('You have been logged out');
  }, []);

  //Handles auto log out
  useEffect(() => {
    const timeout = logoutTimeoutId.current;

    if (user.tokenExpiration) {
      const endDate = new Date(user.tokenExpiration * 1000);
      const startDate = new Date();
      const miliSeconds = endDate.getTime() - startDate.getTime();

      //Log out the user after the time has expired
      logoutTimeoutId.current = setTimeout(() => {
        logOut();
      }, miliSeconds);
    }

    return () => {
      if (timeout) clearTimeout(timeout);
    };
  }, [logOut, user]);

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
});

export const useAuthContext = () => {
  const ctx = useContext(AuthContext);
  if (ctx === undefined) {
    throw new Error('useAuthContext must be used within a AuthContextProvider');
  }
  return ctx;
};

AuthContext.displayName = 'AuthContext';
AuthContextProvider.displayName = 'AuthContextProvider';
