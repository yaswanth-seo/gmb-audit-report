import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { GoogleSignInButton } from "@/components/auth/GoogleSignInButton";
import { useMockAuth } from "@/hooks/useMockAuth";
import { mockData } from "@/lib/mockData";
import { useToast } from "@/hooks/use-toast";

export default function AuthPage() {
  const navigate = useNavigate();
  const { isAuthenticated, isLoading, signInWithGoogle } = useMockAuth();
  const { toast } = useToast();

  useEffect(() => {
    if (!isLoading && isAuthenticated) {
      navigate("/dashboard");
    }
  }, [isAuthenticated, isLoading, navigate]);

  const handleGoogleSignIn = () => {
    const user = signInWithGoogle();
    mockData.initializeSampleReports(user.id);
    
    toast({
      title: "Welcome!",
      description: "You've been signed in successfully. You have 5 free credits!",
    });
    
    navigate("/dashboard");
  };


  if (isLoading) {
    return null;
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-primary/5 p-4">
      <Card className="w-full max-w-md p-8 space-y-6">
        <div className="text-center space-y-2">
          <div className="h-16 w-16 rounded-xl bg-primary flex items-center justify-center mx-auto mb-4">
            <span className="text-primary-foreground font-bold text-2xl">GMB</span>
          </div>
          <h1 className="text-2xl font-bold">Welcome Back</h1>
          <p className="text-muted-foreground">
            Sign in with Google to access your GMB audit reports and manage your credits
          </p>
        </div>

        <div className="space-y-4">
          <GoogleSignInButton onClick={handleGoogleSignIn} />
        </div>

        <div className="text-center text-xs text-muted-foreground">
          <p>Get 5 free credits to start generating reports</p>
        </div>

        <div className="pt-4 border-t">
          <p className="text-xs text-center text-muted-foreground">
            This is a demo environment. No real authentication is performed.
          </p>
        </div>
      </Card>
    </div>
  );
}
