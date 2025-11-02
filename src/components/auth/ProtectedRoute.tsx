import { useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { mockAuth } from "@/lib/mockAuth";
import { Loader2 } from "lucide-react";

export const ProtectedRoute = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Simulate auth check delay
    const timer = setTimeout(() => {
      const authenticated = mockAuth.isAuthenticated();
      setIsAuthenticated(authenticated);
      setIsLoading(false);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  if (!isAuthenticated) {
    return <Navigate to="/auth" replace />;
  }

  return <Outlet />;
};
