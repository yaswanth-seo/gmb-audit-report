import { useState, useEffect } from "react";
import { mockAuth, type MockUser } from "@/lib/mockAuth";

export const useMockAuth = () => {
  const [user, setUser] = useState<MockUser | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check auth status on mount
    const checkAuth = () => {
      const authenticated = mockAuth.isAuthenticated();
      const currentUser = mockAuth.getCurrentUser();
      
      setIsAuthenticated(authenticated);
      setUser(currentUser);
      setIsLoading(false);
    };

    checkAuth();

    // Listen for storage changes (if user logs in/out in another tab)
    const handleStorageChange = () => {
      checkAuth();
    };

    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  const signInWithGoogle = () => {
    const newUser = mockAuth.signInWithGoogle();
    setUser(newUser);
    setIsAuthenticated(true);
    return newUser;
  };

  const signInAsGuest = () => {
    const guestUser = mockAuth.signInAsGuest();
    setUser(guestUser);
    setIsAuthenticated(true);
    return guestUser;
  };

  const signOut = () => {
    mockAuth.signOut();
    setUser(null);
    setIsAuthenticated(false);
  };

  const refreshUser = () => {
    const currentUser = mockAuth.getCurrentUser();
    setUser(currentUser);
  };

  return {
    user,
    isAuthenticated,
    isLoading,
    signInWithGoogle,
    signInAsGuest,
    signOut,
    refreshUser,
  };
};
