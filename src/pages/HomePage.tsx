import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Zap, BarChart3, Gift, ArrowRight } from "lucide-react";
import { useMockAuth } from "@/hooks/useMockAuth";

export default function HomePage() {
  const navigate = useNavigate();
  const { isAuthenticated, isLoading } = useMockAuth();

  useEffect(() => {
    if (!isLoading && isAuthenticated) {
      navigate("/dashboard");
    }
  }, [isAuthenticated, isLoading, navigate]);

  if (isLoading) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
      {/* Header */}
      <header className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="h-10 w-10 rounded-lg bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold">GMB</span>
            </div>
            <span className="font-bold text-xl">Audit Report</span>
          </div>
          <Button variant="outline" onClick={() => navigate("/auth")}>
            Sign In
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <div className="max-w-3xl mx-auto space-y-6">
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
            GMB Audit Report
            <span className="block text-primary mt-2">Generator</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Get instant, detailed insights on your Google My Business profile.
            Comprehensive analysis to boost your local visibility.
          </p>
          <div className="pt-6">
            <Button
              size="lg"
              className="h-14 px-8 text-lg"
              onClick={() => navigate("/auth")}
            >
              Get Started Free
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
          <p className="text-sm text-muted-foreground">
            5 free credits • No credit card required
          </p>
        </div>
      </section>

      {/* Features */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <Card className="p-6 text-center hover:shadow-lg transition-shadow">
            <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <Zap className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-semibold text-lg mb-2">Instant Reports</h3>
            <p className="text-muted-foreground text-sm">
              Generate comprehensive audit reports in seconds
            </p>
          </Card>

          <Card className="p-6 text-center hover:shadow-lg transition-shadow">
            <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <BarChart3 className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-semibold text-lg mb-2">Detailed Analytics</h3>
            <p className="text-muted-foreground text-sm">
              Get in-depth insights on reviews, ratings, and more
            </p>
          </Card>

          <Card className="p-6 text-center hover:shadow-lg transition-shadow">
            <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <Gift className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-semibold text-lg mb-2">5 Free Credits</h3>
            <p className="text-muted-foreground text-sm">
              Start with 5 free report generations on us
            </p>
          </Card>
        </div>
      </section>

      {/* Sample Preview */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">
            See What You'll Get
          </h2>
          <Card className="p-8 bg-gradient-to-br from-card to-primary/5">
            <div className="aspect-video rounded-lg bg-muted flex items-center justify-center">
              <p className="text-muted-foreground">Sample Report Preview</p>
            </div>
            <div className="mt-6 text-center">
              <Button size="lg" onClick={() => navigate("/auth")}>
                Generate Your First Report
              </Button>
            </div>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t mt-20">
        <div className="container mx-auto px-4 py-8 text-center text-sm text-muted-foreground">
          <p>© 2025 Loops Digital. All rights reserved.</p>
          <p className="mt-2 text-xs">Demo Mode - UI/UX Reference</p>
        </div>
      </footer>
    </div>
  );
}
