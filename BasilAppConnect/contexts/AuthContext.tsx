import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface AuthContextType {
  isLoggedIn: boolean;
  login: (email: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Check if user is logged in on app start
    const checkLoginStatus = async () => {
      const loggedIn = await AsyncStorage.getItem('isLoggedIn');
      if (loggedIn === 'true') {
        setIsLoggedIn(true);
      }
    };
    checkLoginStatus();
  }, []);

  const login = async (email: string) => {
    await AsyncStorage.setItem('isLoggedIn', 'true');
    await AsyncStorage.setItem('userEmail', email);
    setIsLoggedIn(true);
  };

  const logout = async () => {
    await AsyncStorage.removeItem('isLoggedIn');
    await AsyncStorage.removeItem('userEmail');
    setIsLoggedIn(false);
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
