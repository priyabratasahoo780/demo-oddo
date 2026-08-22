import React from 'react';
import { Search, ChevronDown, Filter, MapPin, Wallet, ArrowDown } from 'lucide-react';
import DashboardLayout from '../components/layout/DashboardLayout';

const itineraryData = [
    {
        day: 'Day 1',
        activities: [
            {
                title: 'Solang Valley Exploration',
                description: 'Visit Solang Valley and enjoy adventure activities.',
                expense: '2,000',
                icon: '🧗'
            },
            {
                title: 'Ropeway Ride',
                description: 'Scenic ropeway ride with breathtaking mountain views.',
                expense: '1,200',
                icon: '🚠'
            },
            {
                title: 'Paragliding Adventure',
                description: 'Experience the thrill of paragliding over the valley.',
                expense: '3,500',
                icon: '🪂'
            }
        ]
    },
    {
        day: 'Day 2',
        activities: [
            {
                title: 'Hadimba Temple Visit',
                description: 'Explore the famous Hadimba Temple surrounded by cedar forests.',
                expense: '500',
                icon: '🏛️'
            },
            {
                title: 'Jogini Waterfall Trek',
                description: 'Short trek to Jogini Waterfall and enjoy the natural beauty.',
                expense: '800',
                icon: '🌊'
            },
            {
                title: 'Mall Road Shopping',
                description: 'Evening shopping and local food at Mall Road.',
                expense: '1,500',
                icon: '🏪'
            }
        ]
    }
];

const ItineraryDetails = () => {
    return (
        <DashboardLayout>
            <div className="w-full max-w-[1100px] mx-auto h-[calc(100vh-128px)] flex flex-col pt-1 pb-4">

                {/* Controls Row */}
                <div className="flex items-center justify-between gap-4 mb-2 shrink-0">
                    <div className="relative flex-1 max-w-[450px]">
                        <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                        <input
                            type="text"
                            placeholder="Search in itinerary..."
                            className="w-full pl-11 pr-4 py-3 bg-white border border-gray-200 rounded-xl text-[14px] outline-none shadow-sm transition-all focus:border-[#C99A3D]"
                        />
                    </div>

                    <div className="flex items-center gap-3 shrink-0">
                        <button className="flex items-center gap-2 px-5 py-3 bg-white border border-gray-200 rounded-xl text-[14px] font-semibold text-[#0B2A4A] shadow-sm hover:bg-gray-50 transition-colors">
                            <div className="w-4 h-4 rounded border border-gray-300 flex items-center justify-center shrink-0">
                                <div className="w-2 h-0.5 bg-[#0B2A4A] rounded-full" />
                            </div>
                            Group by <ChevronDown size={14} className="text-gray-400" />
                        </button>
                        <button className="flex items-center gap-2 px-5 py-3 bg-white border border-gray-200 rounded-xl text-[14px] font-semibold text-[#0B2A4A] shadow-sm hover:bg-gray-50 transition-colors">
                            <Filter size={14} className="text-gray-600" /> Filter <ChevronDown size={14} className="text-gray-400" />
                        </button>
                        <button className="flex items-center gap-2 px-5 py-3 bg-white border border-gray-200 rounded-xl text-[14px] font-semibold text-[#0B2A4A] shadow-sm hover:bg-gray-50 transition-colors">
                            <span className="flex flex-col gap-[2px] text-gray-600">
                                <span className="w-2.5 h-[1.5px] bg-current"></span>
                                <span className="w-1.5 h-[1.5px] bg-current"></span>
                            </span>
                            Sort by <ChevronDown size={14} className="text-gray-400" />
                        </button>
                    </div>
                </div>

                {/* Page Header & Decorative Background */}
                <div className="relative shrink-0 mb-6 flex flex-col items-center pt-8 pb-4">
                    {/* Decorative background mountains */}
                    <div className="absolute right-0 top-0 w-[60%] h-[180px] pointer-events-none overflow-hidden rounded-xl">
                        <div className="absolute inset-0 bg-cover bg-right opacity-40 mix-blend-multiply" style={{ backgroundImage: "url('/src/assets/travel-login.jpg')" }} />
                        <div className="absolute inset-0 bg-gradient-to-r from-[#F8F7F3] via-[#F8F7F3]/70 to-transparent" />
                        <svg className="absolute top-8 right-[30%] w-24 h-10 text-[#C99A3D] opacity-40" viewBox="0 0 100 20" fill="none">
                            <path d="M0 20 Q 50 -10 100 20" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 4" />
                        </svg>
                    </div>

                    {/* Header Text */}
                    <div className="relative z-10 flex flex-col items-center">
                        <h1 className="text-[28px] md:text-[32px] font-bold text-[#0B2A4A] font-serif leading-none mb-3">
                            Itinerary for a selected place
                        </h1>
                        <div className="flex items-center gap-1.5 text-gray-500 font-medium text-[13px] md:text-[14px]">
                            <MapPin size={16} className="text-[#C99A3D]" />
                            Manali, Himachal Pradesh, India
                        </div>
                        {/* Divider Line */}
                        <div className="w-12 h-[2px] bg-[#C99A3D] rounded-full mt-4 absolute -bottom-1"></div>
                        <div className="w-32 h-[1px] bg-gray-200 mt-4"></div>
                    </div>
                </div>

                {/* Column Headers */}
                <div className="flex px-[100px] mb-4 shrink-0">
                    <div className="flex-1 text-center text-[#0B2A4A] font-bold text-[14px]">Physical Activity</div>
                    <div className="w-[180px] text-right text-[#0B2A4A] font-bold text-[14px] pr-2">Expense (₹)</div>
                </div>

                {/* Timeline Area (Scrollable if needed, though constrained to fit optimally) */}
                <div className="flex-1 overflow-y-auto overflow-x-hidden scrollbar-hide flex flex-col mb-4">
                    <div className="pl-6 md:pl-10 pr-2">

                        {itineraryData.map((dayBlock, dIdx) => (
                            <div key={dIdx} className="mb-8 relative flex">

                                {/* Day Badge & Vertical Timeline */}
                                <div className="w-[100px] shrink-0 relative flex flex-col items-end pr-8">
                                    {/* Day Label Pill */}
                                    <div className="bg-[#0B2A4A] text-white text-[13px] font-bold py-1.5 px-4 rounded-xl absolute -left-6 top-1">
                                        {dayBlock.day}
                                    </div>

                                    {/* Dashed Vertical Line */}
                                    <div className="absolute top-[32px] bottom-0 right-[23px] w-[1px] border-l-2 border-dashed border-gray-300"></div>
                                </div>

                                {/* Day Activities */}
                                <div className="flex-1 flex flex-col gap-0 relative">
                                    {dayBlock.activities.map((activity, aIdx) => (
                                        <div key={aIdx} className="flex flex-col relative w-full mb-3">
                                            {/* Timeline Node Dot */}
                                            <div className="absolute -left-[45px] top-[24px] w-3 h-3 bg-[#C99A3D] rounded-full z-10 border-2 border-[#F8F7F3]"></div>

                                            <div className="flex gap-6 w-full items-center">
                                                {/* Activity Card */}
                                                <div className="flex-1 bg-white rounded-2xl border border-gray-100 shadow-sm p-4 flex items-center gap-5 hover:shadow-md transition-shadow">
                                                    <div className="w-12 h-12 shrink-0 rounded-full bg-[#f4f2eb] flex items-center justify-center text-[20px]">
                                                        {activity.icon}
                                                    </div>
                                                    <div>
                                                        <h3 className="text-[#0B2A4A] font-bold text-[15px] mb-1">{activity.title}</h3>
                                                        <p className="text-gray-500 text-[12px] leading-relaxed">{activity.description}</p>
                                                    </div>
                                                </div>

                                                {/* Expense Card */}
                                                <div className="w-[180px] shrink-0 bg-white rounded-xl border border-gray-100 shadow-sm py-4 px-6 flex items-center justify-center">
                                                    <span className="text-[#0B2A4A] font-medium">{activity.expense}</span>
                                                </div>
                                            </div>

                                            {/* Arrow connector downward (except the last item) */}
                                            {aIdx < dayBlock.activities.length - 1 && (
                                                <div className="flex justify-center w-full mt-3 h-4 text-gray-400/70 opacity-60">
                                                    ↓
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}

                    </div>
                </div>

                {/* Total Expense Footer */}
                <div className="shrink-0 bg-[#FFFCF6] border border-[#C99A3D]/30 rounded-2xl p-5 flex items-center justify-between shadow-sm">
                    <div className="flex items-center gap-4 pl-4">
                        <div className="w-12 h-12 bg-white rounded-xl border border-[#C99A3D]/20 shadow-sm flex items-center justify-center text-[#0B2A4A]">
                            <Wallet size={24} strokeWidth={1.5} />
                        </div>
                        <div>
                            <h3 className="text-[#0B2A4A] font-bold text-[16px] leading-tight">Total Estimated Expense</h3>
                            <p className="text-gray-500 text-[13px]">for this itinerary</p>
                        </div>
                    </div>

                    <div className="pr-6">
                        <span className="text-[#C99A3D] text-[28px] font-bold">₹ 9,500</span>
                    </div>
                </div>

            </div>
        </DashboardLayout>
    );
};

export default ItineraryDetails;
