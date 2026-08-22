import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, GripVertical, MoreVertical, ChevronUp, Calendar, Wallet, PlusCircle, Info, Plane } from 'lucide-react';
import DashboardLayout from '../components/layout/DashboardLayout';

const Itinerary = () => {
    const navigate = useNavigate();

    const [sections, setSections] = useState([
        { id: 1, title: 'Section 1' },
        { id: 2, title: 'Section 2' },
        { id: 3, title: 'Section 3' },
    ]);

    return (
        <DashboardLayout>
            {/* Header section with back button and decorative background */}
            <div className="relative mb-8 pb-4">
                {/* Decorative background map and plane */}
                <div className="absolute right-0 top-0 w-2/3 h-full pointer-events-none overflow-hidden rounded-xl">
                    <div className="absolute inset-0 bg-cover bg-right opacity-30" style={{ backgroundImage: "url('/src/assets/travel-login.jpg')" }} />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#F8F7F3] via-[#F8F7F3]/80 to-transparent" />
                    <Plane size={32} className="absolute right-[20%] top-4 text-[#C99A3D] rotate-[30deg] opacity-80" fill="currentColor" />
                    <svg className="absolute top-8 right-[30%] w-32 h-12 text-[#C99A3D] opacity-40" viewBox="0 0 100 20" fill="none">
                        <path d="M0 20 Q 50 -10 100 20" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 4" />
                    </svg>
                </div>

                <div className="relative z-10 flex items-start gap-4">
                    <button
                        onClick={() => navigate(-1)}
                        className="mt-2 w-10 h-10 bg-white border border-gray-200 rounded-full flex items-center justify-center hover:bg-gray-50 transition-colors shadow-sm"
                    >
                        <ArrowLeft size={18} className="text-gray-600" />
                    </button>

                    <div>
                        <h1 className="text-[3.2rem] leading-tight flex items-baseline gap-3">
                            <span className="font-script text-[#0B2A4A]">Build Your</span>
                            <span className="font-script text-[#C99A3D] italic relative">
                                Itinerary
                                <svg className="absolute -bottom-1 left-0 w-full h-1.5 text-[#d1b375] opacity-60" viewBox="0 0 100 10" preserveAspectRatio="none">
                                    <path d="M0 5 Q 50 2 100 8" stroke="currentColor" strokeWidth="2" fill="none" />
                                </svg>
                            </span>
                        </h1>
                        <p className="text-[14px] text-gray-500 font-medium">
                            Organize your trip with sections and activities.
                        </p>
                    </div>
                </div>
            </div>

            <div className="max-w-[1000px] flex flex-col gap-4 mb-20">
                {/* Sections List */}
                {sections.map((section, index) => (
                    <div key={section.id} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 relative group">
                        {/* Header of Section */}
                        <div className="flex items-start gap-4">
                            <div className="mt-1 text-gray-300 cursor-grab active:cursor-grabbing hover:text-gray-400 transition-colors">
                                <GripVertical size={20} />
                            </div>

                            <div className="w-7 h-7 bg-[#0B2A4A] text-white rounded-full flex items-center justify-center text-[13px] font-bold shrink-0 mt-0.5">
                                {index + 1}
                            </div>

                            <div className="flex-1">
                                <div className="flex items-start justify-between">
                                    <div>
                                        <h3 className="text-[16px] font-bold text-[#0B2A4A]">{section.title}</h3>
                                        <p className="text-[13px] text-gray-500 mt-1 leading-relaxed">
                                            All the necessary information about this section.<br />
                                            This can be anything like travel section, hotel or any other activity
                                        </p>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <button className="p-1.5 hover:bg-gray-50 rounded-lg transition-colors text-gray-500">
                                            <MoreVertical size={18} />
                                        </button>
                                        <button className="p-1.5 hover:bg-gray-50 rounded-lg transition-colors text-[#0B2A4A]">
                                            <ChevronUp size={20} />
                                        </button>
                                    </div>
                                </div>

                                {/* Form Fields inside Section */}
                                <div className="grid grid-cols-2 gap-6 mt-6">
                                    {/* Date Range */}
                                    <div>
                                        <label className="flex items-center gap-2 mb-2 text-[#0B2A4A]">
                                            <Calendar size={14} className="text-[#C99A3D]" />
                                            <span className="text-[13px] font-bold">Date Range</span>
                                        </label>
                                        <div className="relative">
                                            <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-[#C99A3D] rounded-l-lg z-10" />
                                            <input
                                                type="text"
                                                placeholder="Select start date   -   Select end date"
                                                className="w-full pl-5 pr-10 py-2.5 bg-white border border-gray-200 rounded-lg text-[13px] text-gray-600 outline-none hover:border-gray-300 transition-colors"
                                                readOnly
                                            />
                                            <Calendar size={16} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" />
                                        </div>
                                    </div>

                                    {/* Budget */}
                                    <div>
                                        <label className="flex items-center gap-2 mb-2 text-[#0B2A4A]">
                                            <Wallet size={14} className="text-[#C99A3D]" />
                                            <span className="text-[13px] font-bold">Budget of this section</span>
                                        </label>
                                        <div className="relative">
                                            <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-[#C99A3D] rounded-l-lg z-10" />
                                            <div className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400 text-[14px]">₹</div>
                                            <input
                                                type="text"
                                                placeholder="Enter budget"
                                                className="w-full pl-10 pr-4 py-2.5 bg-white border border-gray-200 rounded-lg text-[13px] text-gray-600 outline-none hover:border-gray-300 transition-colors"
                                            />
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                ))}

                {/* Add Another Section Button */}
                <button className="w-full py-4 border-2 border-dashed border-[#E3C78D] rounded-xl bg-white/50 hover:bg-white transition-colors flex items-center justify-center gap-2 text-[#C99A3D] group">
                    <PlusCircle size={18} className="group-hover:rotate-90 transition-transform duration-300" />
                    <span className="text-[14px] font-bold">Add another Section</span>
                </button>

                {/* Info Footer */}
                <div className="mt-2 bg-[#FFF8EB] border border-[#F3E5C8] rounded-xl p-4 flex items-start gap-3">
                    <Info size={18} className="text-[#C99A3D] shrink-0 mt-0.5" />
                    <p className="text-[12px] text-gray-500 leading-relaxed">
                        <span className="font-medium text-[#0B2A4A]">Add sections to break down your trip into parts (e.g., Travel, Hotels, Activities, Food, etc.)</span><br />
                        You can add as many sections as you need.
                    </p>
                </div>
            </div>
        </DashboardLayout>
    );
};

export default Itinerary;
