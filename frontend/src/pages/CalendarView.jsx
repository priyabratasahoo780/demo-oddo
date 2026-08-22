import React from 'react';
import { Search, ChevronDown, Filter, ArrowLeft, ArrowRight } from 'lucide-react';
import DashboardLayout from '../components/layout/DashboardLayout';

const daysOfWeek = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

const days = Array.from({ length: 42 }, (_, i) => {
    const dateNum = i - 4;
    if (dateNum < 1 || dateNum > 31) return null;
    return dateNum;
});

const getEventForDay = (day) => {
    switch (day) {
        case 10:
            return { text: 'PARIS TRIP', className: 'bg-[#FFEDD5] text-[#9A3412] text-[9px] sm:text-[10px] font-bold px-2 py-1 rounded w-fit whitespace-nowrap uppercase tracking-wider' };
        case 12:
            return { text: '15 - 22', className: 'bg-[#DBEAFE] text-[#1E40AF] text-[9px] sm:text-[10px] font-bold px-2 py-1 rounded w-fit whitespace-nowrap uppercase tracking-wider' };
        case 15:
            return { text: 'NYC - GETAWAY', className: 'bg-[#F3E8FF] text-[#6B21A8] text-[9px] sm:text-[10px] font-bold px-2 py-1 rounded w-fit whitespace-nowrap uppercase tracking-wider' };
        case 17:
            return { text: 'JAPAN ADVENTURE', className: 'bg-[#DCFCE7] text-[#166534] text-[9px] sm:text-[10px] font-bold px-2 py-1 rounded w-fit whitespace-nowrap uppercase tracking-wider' };
        case 29:
            return { text: 'NYC GETAWAY', className: 'bg-[#F3E8FF] text-[#6B21A8] text-[9px] sm:text-[10px] font-bold px-2 py-1 rounded w-fit whitespace-nowrap uppercase tracking-wider' };
        default:
            return null;
    }
};

const isUnavailable = (day) => {
    const unavailableDays = [9, 18, 19, 20, 21, 24, 25, 26, 27, 28];
    return unavailableDays.includes(day);
};

const legendItems = [
    { color: 'bg-[#FDBA74]', label: 'Paris Trip' },
    { color: 'bg-[#93C5FD]', label: '15 - 22 (Trip Duration)' },
    { color: 'bg-[#D8B4FE]', label: 'NYC Getaway' },
    { color: 'bg-[#86EFAC]', label: 'Japan Adventure' },
    { color: 'bg-[#D1D5DB]', label: 'Unavailable / Other' },
];

const CalendarView = () => {
    return (
        <DashboardLayout>
            {/* 
        absolute inset-8 ties perfectly to DashboardLayout main which has p-8 relative.
        This forces the layout to occupy 100% of the visible inner viewport height, ensuring 0 vertical scroll.
      */}
            <div className="absolute inset-8 flex flex-col">

                {/* Controls Row - Top Level */}
                <div className="flex items-center justify-between gap-4 mb-4 shrink-0">
                    <div className="relative flex-1 max-w-[450px]">
                        <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                        <input
                            type="text"
                            placeholder="Search in calendar..."
                            className="w-full pl-11 pr-4 py-3 bg-white border border-gray-200 rounded-xl text-[14px] outline-none shadow-sm transition-all focus:border-[#C99A3D]"
                        />
                    </div>

                    <div className="flex items-center gap-3 shrink-0">
                        <button className="flex items-center gap-2 px-4 py-3 bg-white border border-gray-200 rounded-xl text-[14px] font-semibold text-[#0B2A4A] shadow-sm hover:bg-gray-50 transition-colors">
                            <div className="w-3.5 h-3.5 rounded border border-gray-300 flex items-center justify-center shrink-0">
                                <div className="w-1.5 h-[1.5px] bg-[#0B2A4A] rounded-full" />
                            </div>
                            Group by <ChevronDown size={14} className="text-gray-400" />
                        </button>
                        <button className="flex items-center gap-2 px-4 py-3 bg-white border border-gray-200 rounded-xl text-[14px] font-semibold text-[#0B2A4A] shadow-sm hover:bg-gray-50 transition-colors">
                            <Filter size={14} className="text-[#0B2A4A]" /> Filter <ChevronDown size={14} className="text-gray-400" />
                        </button>
                        <button className="flex items-center gap-2 px-4 py-3 bg-white border border-gray-200 rounded-xl text-[14px] font-semibold text-[#0B2A4A] shadow-sm hover:bg-gray-50 transition-colors">
                            <span className="flex flex-col gap-[2px] text-[#0B2A4A]">
                                <span className="w-2.5 h-[1.5px] bg-current"></span>
                                <span className="w-1.5 h-[1.5px] bg-current"></span>
                            </span>
                            Sort by <ChevronDown size={14} className="text-gray-400" />
                        </button>
                    </div>
                </div>

                {/* Page Title */}
                <div className="mb-4 inline-block shrink-0">
                    <h1 className="text-[26px] font-bold text-[#0B2A4A] font-serif leading-none mb-1.5">Calendar View</h1>
                    <div className="w-10 h-1 bg-[#C99A3D] rounded-full"></div>
                </div>

                {/* Calendar Card Area */}
                <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-4 flex-1 flex flex-col min-h-0 overflow-hidden">

                    {/* Calendar Header with Arrows */}
                    <div className="flex items-center justify-center relative mb-4 shrink-0">
                        <button className="absolute left-0 w-9 h-9 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50 text-[#0B2A4A] transition-colors">
                            <ArrowLeft size={16} />
                        </button>

                        <h2 className="text-[22px] font-bold text-[#0B2A4A]">January 2024</h2>

                        <button className="absolute right-0 w-9 h-9 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50 text-[#0B2A4A] transition-colors">
                            <ArrowRight size={16} />
                        </button>
                    </div>

                    {/* Calendar Grid Wrapper */}
                    <div className="border border-gray-200 rounded-xl overflow-hidden mb-3 flex-1 flex flex-col min-h-0 relative">

                        {/* Days Header */}
                        <div className="grid grid-cols-7 border-b border-gray-200 bg-white shrink-0">
                            {daysOfWeek.map((day, i) => (
                                <div key={i} className="py-2.5 text-center text-[10px] font-extrabold text-[#0B2A4A] uppercase tracking-wider">
                                    {day}
                                </div>
                            ))}
                        </div>

                        {/* Grid Cells dynamically expanding vertically */}
                        <div className="grid grid-cols-7 grid-rows-6 flex-1 min-h-0 bg-white">
                            {days.map((day, i) => {
                                const event = getEventForDay(day);
                                const unavailable = isUnavailable(day);

                                return (
                                    <div
                                        key={i}
                                        className={`border-b border-r border-gray-100 p-2 flex flex-col items-start min-h-0 overflow-hidden
                      ${(i + 1) % 7 === 0 ? 'border-r-0' : ''} 
                      ${i >= 35 ? 'border-b-0' : ''}
                      ${unavailable ? 'bg-[#EEEEEE]' : 'bg-white hover:bg-gray-50/50'}
                    `}
                                    >
                                        {day && (
                                            <>
                                                <span className="text-[13px] font-semibold text-[#0B2A4A] mb-1.5">{day}</span>
                                                {event && (
                                                    <div className={event.className}>
                                                        {event.text}
                                                    </div>
                                                )}
                                            </>
                                        )}
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    {/* Legend Area */}
                    <div className="flex items-center justify-center gap-6 flex-wrap shrink-0 py-1">
                        {legendItems.map((item, i) => (
                            <div key={i} className="flex items-center gap-2">
                                <span className={`w-3.5 h-3.5 rounded-full ${item.color}`}></span>
                                <span className="text-[12px] font-medium text-gray-700">{item.label}</span>
                            </div>
                        ))}
                    </div>

                </div>

            </div>
        </DashboardLayout>
    );
};

export default CalendarView;
