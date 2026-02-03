import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ScrollToTop } from "@/components/ScrollToTop";
import Index from "./pages/Index";
import About from "./pages/About";
import Testimonials from "./pages/Testimonials";
import FAQ from "./pages/FAQ";
import Resources from "./pages/Resources";
import PipelinePlaybook from "./pages/resources/PipelinePlaybook";
import WhyReferralsArentStrategy from "./pages/resources/WhyReferralsArentStrategy";
import TrueCostInconsistentPipeline from "./pages/resources/TrueCostInconsistentPipeline";
import ICPDefinitionFramework from "./pages/resources/ICPDefinitionFramework";
import MeasuringWhatMatters from "./pages/resources/MeasuringWhatMatters";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/resources/pipeline-playbook" element={<PipelinePlaybook />} />
          <Route path="/resources/why-referrals-arent-strategy" element={<WhyReferralsArentStrategy />} />
          <Route path="/resources/true-cost-inconsistent-pipeline" element={<TrueCostInconsistentPipeline />} />
          <Route path="/resources/icp-definition-framework" element={<ICPDefinitionFramework />} />
          <Route path="/resources/measuring-what-matters" element={<MeasuringWhatMatters />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
