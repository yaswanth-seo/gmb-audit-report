export interface MockUser {
  id: string;
  name: string;
  email: string;
  avatar: string;
  credits: number;
  createdAt: string;
}

const MOCK_USER_KEY = "mockUser";
const MOCK_AUTH_KEY = "mockAuthenticated";

export const mockAuth = {
  // Check if user is authenticated
  isAuthenticated(): boolean {
    return localStorage.getItem(MOCK_AUTH_KEY) === "true";
  },

  // Get current user
  getCurrentUser(): MockUser | null {
    const userStr = localStorage.getItem(MOCK_USER_KEY);
    if (!userStr) return null;
    return JSON.parse(userStr);
  },

  // Sign in with Google (mock)
  signInWithGoogle(): MockUser {
    const newUser: MockUser = {
      id: `user-${Date.now()}`,
      name: "Demo User",
      email: "demo@example.com",
      avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=Demo${Date.now()}`,
      credits: 5,
      createdAt: new Date().toISOString(),
    };

    localStorage.setItem(MOCK_AUTH_KEY, "true");
    localStorage.setItem(MOCK_USER_KEY, JSON.stringify(newUser));
    return newUser;
  },

  // Sign in as guest (mock)
  signInAsGuest(): MockUser {
    const guestUser: MockUser = {
      id: `guest-${Date.now()}`,
      name: "Guest User",
      email: "guest@example.com",
      avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=Guest${Date.now()}`,
      credits: 5,
      createdAt: new Date().toISOString(),
    };

    localStorage.setItem(MOCK_AUTH_KEY, "true");
    localStorage.setItem(MOCK_USER_KEY, JSON.stringify(guestUser));
    return guestUser;
  },

  // Sign out
  signOut(): void {
    localStorage.removeItem(MOCK_AUTH_KEY);
    localStorage.removeItem(MOCK_USER_KEY);
  },

  // Update user credits
  updateCredits(credits: number): void {
    const user = this.getCurrentUser();
    if (user) {
      user.credits = credits;
      localStorage.setItem(MOCK_USER_KEY, JSON.stringify(user));
    }
  },

  // Decrement credits
  decrementCredits(amount: number = 1): boolean {
    const user = this.getCurrentUser();
    if (user && user.credits >= amount) {
      user.credits -= amount;
      localStorage.setItem(MOCK_USER_KEY, JSON.stringify(user));
      return true;
    }
    return false;
  },
};
