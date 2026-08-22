import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Briefcase, MapPin, Calendar, Navigation, ChevronDown, Send, Plane } from 'lucide-react';
import DashboardLayout from '../components/layout/DashboardLayout';

const CreateTrip = () => {
    const navigate = useNavigate();

    const suggestions = [
        {
            title: 'Scenic Lakes',
            sub: 'Nature • Relaxation',
            image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=300&h=150&fit=crop',
        },
        {
            title: 'Trekking Adventures',
            sub: 'Adventure • Mountains',
            image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=300&h=150&fit=crop',
        },
        {
            title: 'Beach Getaways',
            sub: 'Relaxation • Beaches',
            image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=300&h=150&fit=crop',
        },
        {
            title: 'Cultural Heritage',
            sub: 'Culture • History',
            image: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=300&h=150&fit=crop',
        },
        {
            title: 'Wildlife Safari',
            sub: 'Adventure • Wildlife',
            image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=300&h=150&fit=crop',
        },
        {
            title: 'City Exploration',
            sub: 'City • Modern',
            image: 'https://images.unsplash.com/photo-1449844908441-8829872d2607?w=300&h=150&fit=crop',
        }
    ];

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
                            <span className="font-script text-[#0B2A4A]">Create a new</span>
                            <span className="font-script text-[#C99A3D] italic relative">
                                Trip
                                <svg className="absolute -bottom-1 left-0 w-full h-1.5 text-[#d1b375] opacity-60" viewBox="0 0 100 10" preserveAspectRatio="none">
                                    <path d="M0 5 Q 50 2 100 8" stroke="currentColor" strokeWidth="2" fill="none" />
                                </svg>
                            </span>
                        </h1>
                        <p className="text-[14px] text-gray-500 font-medium">
                            Fill in the details to plan your perfect adventure.
                        </p>
                    </div>
                </div>
            </div>

            <div className="max-w-[900px] flex flex-col gap-6">
                {/* Form Container */}
                <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 pb-8">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="w-10 h-10 rounded-xl bg-[#FFF8EB] flex items-center justify-center">
                            <Briefcase size={20} className="text-[#C99A3D]" />
                        </div>
                        <h2 className="text-[16px] font-bold text-[#0B2A4A]">Plan a new trip</h2>
                    </div>

                    <div className="flex flex-col gap-5 px-4 max-w-[700px]">
                        {/* Start Date */}
                        <div className="flex items-center gap-10">
                            <div className="w-32 flex items-center gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-gray-300"></span>
                                <span className="text-[14px] font-bold text-[#0B2A4A]">Start Date</span>
                            </div>
                            <div className="flex-1 relative">
                                <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-[#C99A3D] rounded-l-lg z-10" />
                                <input
                                    type="text"
                                    placeholder="Select start date"
                                    className="w-full pl-5 pr-10 py-3 bg-white border border-gray-200 rounded-lg text-[14px] text-gray-600 outline-none hover:border-gray-300 transition-colors"
                                    readOnly
                                />
                                <Calendar size={18} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400" />
                            </div>
                        </div>

                        {/* Select a Place */}
                        <div className="flex items-center gap-10">
                            <div className="w-32 flex items-center gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-gray-300"></span>
                                <span className="text-[14px] font-bold text-[#0B2A4A]">Select a Place</span>
                            </div>
                            <div className="flex-1 relative">
                                <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-[#C99A3D] rounded-l-lg z-10" />
                                <input
                                    type="text"
                                    placeholder="Search or select a place"
                                    className="w-full pl-5 pr-14 py-3 bg-white border border-gray-200 rounded-lg text-[14px] text-gray-600 outline-none hover:border-gray-300 transition-colors"
                                />
                                <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-2 text-gray-400">
                                    <MapPin size={16} />
                                    <ChevronDown size={16} />
                                </div>
                            </div>
                        </div>

                        {/* Start Date (Matching reference exactly despite typo) */}
                        <div className="flex items-center gap-10">
                            <div className="w-32 flex items-center gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-gray-300"></span>
                                <span className="text-[14px] font-bold text-[#0B2A4A]">Start Date</span>
                            </div>
                            <div className="flex-1 relative">
                                <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-[#C99A3D] rounded-l-lg z-10" />
                                <input
                                    type="text"
                                    placeholder="Select start date"
                                    className="w-full pl-5 pr-10 py-3 bg-white border border-gray-200 rounded-lg text-[14px] text-gray-600 outline-none hover:border-gray-300 transition-colors"
                                    readOnly
                                />
                                <Calendar size={18} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400" />
                            </div>
                        </div>

                        {/* End Date */}
                        <div className="flex items-center gap-10">
                            <div className="w-32 flex items-center gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-gray-300"></span>
                                <span className="text-[14px] font-bold text-[#0B2A4A]">End Date</span>
                            </div>
                            <div className="flex-1 relative">
                                <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-[#C99A3D] rounded-l-lg z-10" />
                                <input
                                    type="text"
                                    placeholder="Select end date"
                                    className="w-full pl-5 pr-10 py-3 bg-white border border-gray-200 rounded-lg text-[14px] text-gray-600 outline-none hover:border-gray-300 transition-colors"
                                    readOnly
                                />
                                <Calendar size={18} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Suggestions Container */}
                <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 mb-20">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="flex items-center justify-center p-1 rounded-full border-2 border-[#C99A3D] bg-[#FFF8EB]">
                            <MapPin size={16} className="text-[#C99A3D]" />
                        </div>
                        <h2 className="text-[16px] font-bold text-[#0B2A4A]">Suggestion for Places to Visit/Activites to preform</h2>
                    </div>

                    <div className="grid grid-cols-3 gap-5">
                        {suggestions.map((item, i) => (
                            <div key={i} className="rounded-xl border border-gray-100 overflow-hidden cursor-pointer hover:shadow-md transition-shadow group">
                                <div className="h-[110px] overflow-hidden">
                                    <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                                </div>
                                <div className="p-3 bg-white">
                                    <h4 className="text-[13px] font-bold text-[#0B2A4A]">{item.title}</h4>
                                    <p className="text-[11px] text-gray-400 mt-1">{item.sub}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Fixed FAB Button matching design */}
                <Link
                    to="/itinerary"
                    className="fixed bottom-8 right-8 bg-[#C99A3D] text-white px-8 py-3.5 rounded-xl shadow-lg hover:-translate-y-0.5 hover:shadow-xl transition-all duration-300 flex items-center gap-2.5 z-50 cursor-pointer"
                >
                    <Send size={18} className="text-white" />
                    <span className="text-[15px] font-semibold tracking-wide">Create Trip</span>
                </Link>
            </div>
        </DashboardLayout>
    );
};

export default CreateTrip;
