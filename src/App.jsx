import { useState } from 'react';
import Sidebar from './components/Sidebar';
import TopBar from './components/TopBar';
import TodaysSales from './components/TodaysSales';
import VisitorInsights from './components/VisitorInsights';
import TotalRevenue from './components/TotalRevenue';
import CustomerSatisfaction from './components/CustomerSatisfaction';
import TargetVsReality from './components/TargetVsReality';
import TopProducts from './components/TopProducts';
import SalesMapping from './components/SalesMapping';
import VolumeVsService from './components/VolumeVsService';

export default function App() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#F9FAFB] font-poppins">
      {/* Sidebar */}
      <Sidebar mobileOpen={mobileOpen} setMobileOpen={setMobileOpen} />

      {/* Main content */}
      <div className="flex  flex-col min-w-0 w-full lg:pl-[250px]">
        {/* Top Bar */}
        <TopBar />

        {/* Page content */}
        <main className="flex-1 w-full max-w-none p-3 lg:p-4 space-y-3">
          {/* Row 1: Today's Sales + Visitor Insights */}
          <div className="grid w-full grid-cols-1 xl:grid-cols-2 gap-3 sm:gap-4 ">
            <TodaysSales />
            <VisitorInsights />
          </div>

          {/* Row 2: Total Revenue + Customer Satisfaction + Target Vs Reality */}
          <div className="grid w-full grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-3 sm:gap-4">
            <TotalRevenue className="xl:col-span-2" />
            <CustomerSatisfaction />
            <TargetVsReality />
          </div>

          {/* Row 3: GetPro + Top Products + Sales Mapping + Volume Vs Service */}
          <div className="grid w-full grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-3 sm:gap-4">
            <TopProducts className="xl:col-span-2" />
            <SalesMapping />
            <VolumeVsService />
          </div>

        </main>
      </div>
    </div>
  );
}
