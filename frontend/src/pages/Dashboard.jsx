import React from 'react';
import { Plane, PlusCircle } from 'lucide-react';
import DashboardLayout from '../components/layout/DashboardLayout';
import StatsCards from '../components/dashboard/StatsCards';
import UpcomingTrips from '../components/dashboard/UpcomingTrips';
import TopDestinations from '../components/dashboard/TopDestinations';
import BudgetOverview from '../components/dashboard/BudgetOverview';
import RecentTrips from '../components/dashboard/RecentTrips';

const Dashboard = () => {
    return (
        <DashboardLayout>
            {/* Welcome header */}
            <div className="flex items-center justify-between mb-8 relative">
                <div>
                    <h1 className="text-[2.8rem] leading-tight">
                        <span className="font-script text-[#0B2A4A]">Welcome back, </span>
                        <span className="font-script text-[#C99A3D] italic">Saptak!</span>
                    </h1>
                    <p className="text-[14px] text-gray-500 mt-1 font-medium">
                        Ready to plan your next unforgettable journey?
                    </p>
                </div>

                {/* Decorative elements */}
                <div className="absolute right-0 top-0">
                    <Plane size={40} className="text-[#C99A3D] rotate-[20deg] opacity-40" fill="currentColor" />
                    <svg className="absolute top-6 -left-16 w-24 h-8 text-[#0B2A4A] opacity-20" viewBox="0 0 100 20" fill="none">
                        <path d="M0 10 Q 50 -5 100 10" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 4" />
                    </svg>
                </div>
            </div>

            {/* Stats Row */}
            <StatsCards />

            {/* Main content grid */}
            <div className="grid grid-cols-12 gap-6 mt-8">
                {/* Upcoming Trips - left column */}
                <div className="col-span-4">
                    <UpcomingTrips />
                </div>

                {/* Top Destinations - middle column */}
                <div className="col-span-4">
                    <TopDestinations />
                </div>

                {/* Budget Overview - right column */}
                <div className="col-span-4">
                    <BudgetOverview />
                </div>
            </div>

            {/* Recent Trips */}
            <RecentTrips />

            {/* FAB - Plan a new trip */}
            <button className="fixed bottom-8 right-8 bg-[#0B2A4A] text-white px-6 py-3.5 rounded-2xl shadow-xl hover:shadow-2xl hover:-translate-y-0.5 transition-all duration-300 flex items-center gap-2.5 z-50 group">
                <PlusCircle size={20} className="text-[#E5C477] group-hover:rotate-90 transition-transform duration-300" />
                <span className="text-[14px] font-medium">Plan a New Trip</span>
            </button>
        </DashboardLayout>
    );
};

export default Dashboard;
