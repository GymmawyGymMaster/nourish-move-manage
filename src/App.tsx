import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/contexts/ThemeContext";
import Index from "./pages/Index";
import Clients from "./pages/Clients";
import FollowUp from "./pages/FollowUp";
import CalendarAppointments from "./pages/CalendarAppointments";
import CalendarNext from "./pages/CalendarNext";
import Leads from "./pages/Leads";
import LeadsCharts from "./pages/LeadsCharts";
import Settings from "./pages/Settings";
import MobileCustomization from "./pages/MobileCustomization";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/clients" element={<Clients />} />
            <Route path="/clients/followup" element={<FollowUp />} />
            <Route path="/calendar/appointments" element={<CalendarAppointments />} />
            <Route path="/calendar/next" element={<CalendarNext />} />
            <Route path="/leads" element={<Leads />} />
            <Route path="/leads/charts" element={<LeadsCharts />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/mobile-customization" element={<MobileCustomization />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
