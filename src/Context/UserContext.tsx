import React, { createContext, useContext, ReactNode, useState, useEffect } from 'react';
import { Auth } from 'aws-amplify';

// Create an interface for the UserContext
interface UserContextType {
  currentUser: any; 
  checkUserLoggedIn: () => void
}

// The context will initially be undefined and will be provided by the UserProvider
const UserContext = createContext<UserContextType | undefined>(undefined);

// Custom hook to easily access the context
export function useUser() {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
}

// Props for UserProvider component
interface UserProviderProps {
  children: ReactNode;
}

// Main UserProvider component
export const UserProvider: React.FC<UserProviderProps> = ({ children }) => {

  const [currentUser, setCurrentUser] = useState<any>(null);
  
  const checkUserLoggedIn = async () => {
    try {
      const user = await Auth.currentAuthenticatedUser();
      setCurrentUser(user); 
    } catch (error) {
      setCurrentUser(null); 
    }
  };

  return (
    <UserContext.Provider
      value={{
        currentUser,
        checkUserLoggedIn
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
