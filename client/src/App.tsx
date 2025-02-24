import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import NotFound from "@/pages/not-found";
import Home from "@/pages/home";
import Residential from "@/pages/residential";
import Commercial from "@/pages/commercial";
import Industrial from "@/pages/industrial";
import { ChatWidget } from "@/components/chat-widget";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/residential" component={Residential} />
      <Route path="/commercial" component={Commercial} />
      <Route path="/industrial" component={Industrial} />
      <Route path="/services" component={Home} />
      <Route path="/contact" component={Home} />
      <Route component={NotFound} />
    </Switch>
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