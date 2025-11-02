import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { GoogleSignInButton } from "@/components/auth/GoogleSignInButton";
import { useMockAuth } from "@/hooks/useMockAuth";
import { mockData } from "@/lib/mockData";
import { ArrowRight } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function AuthPage() {
  const navigate = useNavigate();
  const { isAuthenticated, isLoading, signInWithGoogle, signInAsGuest } = useMockAuth();
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

  const handleGuestSignIn = () => {
    const user = signInAsGuest();
    mockData.initializeSampleReports(user.id);
    
    toast({
      title: "Welcome, Guest!",
      description: "You're browsing as a guest with 5 free credits.",
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
            Sign in to access your audit reports
          </p>
        </div>

        <div className="space-y-4">
          <GoogleSignInButton onClick={handleGoogleSignIn} />
          
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-card px-2 text-muted-foreground">Or</span>
            </div>
          </div>

          <Button
            variant="outline"
            className="w-full"
            onClick={handleGuestSignIn}
          >
            Continue as Guest
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
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
