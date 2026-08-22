import React from 'react';
import Sidebar from './Sidebar';
import TopBar from './TopBar';

const DashboardLayout = ({ children }) => {
    return (
        <div className="flex min-h-screen bg-[#F8F7F3]">
            <Sidebar />
            <div className="flex-1 ml-[220px] flex flex-col">
                <TopBar />
                <main className="flex-1 overflow-y-auto p-8">
                    {children}
                </main>
            </div>
        </div>
    );
};

export default DashboardLayout;
