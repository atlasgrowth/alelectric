import React from "react";
import { Switch, Route, Router as WouterRouter } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import NotFound from "@/pages/not-found";
import Home from "@/pages/home";
import Residential from "@/pages/residential";
import Commercial from "@/pages/commercial";
import Industrial from "@/pages/industrial";
import { ChatWidget } from "@/components/chat-widget";

// Create a custom hook that uses hash-based routing for GitHub Pages
const useHashLocation = () => {
  const [hash, setHash] = React.useState(
    () => window.location.hash.replace("#", "") || "/"
  );

  React.useEffect(() => {
    const handleHashChange = () => {
      const newHash = window.location.hash.replace("#", "") || "/";
      setHash(newHash);
    };

    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const navigate = (to: string) => {
    window.location.hash = to;
  };

  return [hash, navigate];
};

function Router() {
  // Use hash-based location for GitHub Pages
  return (
    <WouterRouter hook={useHashLocation}>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/residential" component={Residential} />
        <Route path="/commercial" component={Commercial} />
        <Route path="/industrial" component={Industrial} />
        <Route path="/services" component={Home} />
        <Route path="/contact" component={Home} />
        <Route component={NotFound} />
      </Switch>
    </WouterRouter>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router />
      <ChatWidget />
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;