import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ClientLayout from "@/components/layout/ClientLayout";
import Home from "@/pages/Home";
import Horses from "@/pages/Horses";
import HorseDetail from "@/pages/HorseDetail";
import Booking from "@/pages/Booking";
import Shop from "@/pages/Shop";
import Boarding from "@/pages/Boarding";
import NotFound from "@/pages/NotFound";

// Admin imports (placeholder)
import AdminLayout from "@/components/admin/AdminLayout";
import AdminDashboard from "@/pages/admin/Dashboard";
import AdminHorses from "@/pages/admin/HorseManager";
import AdminBookings from "@/pages/admin/BookingManager";
import AdminShop from "@/pages/admin/ShopManager";
import AdminSettings from "@/pages/admin/Settings";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          {/* Public Routes */}
          <Route element={<ClientLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/horses" element={<Horses />} />
            <Route path="/horses/:id" element={<HorseDetail />} />
            <Route path="/booking" element={<Booking />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/boarding" element={<Boarding />} />
          </Route>

          {/* Admin Routes */}
          <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<AdminDashboard />} />
            <Route path="dashboard" element={<AdminDashboard />} />
            <Route path="horses" element={<AdminHorses />} />
            <Route path="bookings" element={<AdminBookings />} />
            <Route path="shop" element={<AdminShop />} />
            <Route path="settings" element={<AdminSettings />} />
          </Route>

          {/* Catch-all */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
