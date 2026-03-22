import { Toaster } from "@/components/ui/sonner";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AboutSection } from "./components/AboutSection";
import { Footer } from "./components/Footer";
import { HeroSection } from "./components/HeroSection";
import { MenuSection } from "./components/MenuSection";
import { Navbar } from "./components/Navbar";
import { ReservationSection } from "./components/ReservationSection";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
      staleTime: 1000 * 60 * 5,
    },
  },
});

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen">
        <Navbar />
        <main>
          <HeroSection />
          <AboutSection />
          <MenuSection />
          <ReservationSection />
        </main>
        <Footer />
      </div>
      <Toaster position="top-right" />
    </QueryClientProvider>
  );
}
