import React from 'react';
import { Search, Bell, ChevronDown } from 'lucide-react';

const TopBar = ({ userName = 'Saptak' }) => {
    return (
        <header className="h-16 flex items-center justify-between px-8 bg-white border-b border-gray-100 sticky top-0 z-30">
            {/* Search */}
            <div className="relative w-[380px]">
                <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                    type="text"
                    placeholder="Search destinations, trips..."
                    className="w-full pl-10 pr-14 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-[13px] text-gray-600 placeholder-gray-400 outline-none focus:border-[#C99A3D]/50 focus:ring-1 focus:ring-[#C99A3D]/20 transition-all"
                />
                <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-0.5 bg-white border border-gray-200 rounded px-1.5 py-0.5">
                    <span className="text-[10px] text-gray-400 font-medium">⌘</span>
                    <span className="text-[10px] text-gray-400 font-medium">K</span>
                </div>
            </div>

            {/* Right side */}
            <div className="flex items-center gap-5">
                {/* Notifications */}
                <button className="relative p-2 hover:bg-gray-50 rounded-lg transition-colors">
                    <Bell size={20} strokeWidth={1.8} className="text-gray-500" />
                    <span className="absolute top-1 right-1 w-4 h-4 bg-[#C99A3D] text-white text-[9px] font-bold rounded-full flex items-center justify-center">
                        3
                    </span>
                </button>

                {/* Profile */}
                <div className="flex items-center gap-2.5 cursor-pointer hover:bg-gray-50 rounded-lg px-2 py-1.5 transition-colors">
                    <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#C99A3D] to-[#E5C477] flex items-center justify-center text-white font-bold text-sm">
                        {userName.charAt(0)}
                    </div>
                    <span className="text-[14px] font-medium text-[#0B2A4A]">{userName}</span>
                    <ChevronDown size={14} className="text-gray-400" />
                </div>
            </div>
        </header>
    );
};

export default TopBar;
