import React from 'react';
import { Search, ChevronDown, Filter, ArrowRight, MapPin, Calendar, CheckCircle, ChevronRight } from 'lucide-react';
import DashboardLayout from '../components/layout/DashboardLayout';

const TripListCard = ({ trip }) => {
    return (
        <div className="relative w-full h-[220px] rounded-[24px] overflow-hidden group cursor-pointer mb-6 transform transition-transform duration-500 hover:scale-[1.01]">
            <img src={trip.image} alt={trip.title} className="absolute inset-0 w-full h-full object-cover" />

            {/* Dark overlay for text readability */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#0B2A4A]/90 via-[#0B2A4A]/60 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />

            {/* Content */}
            <div className="absolute inset-0 p-8 flex flex-col">
                {/* Tag */}
                <div>
                    <span className={`px-4 py-1.5 rounded bg-white/20 backdrop-blur-md text-white text-[11px] font-bold tracking-wider ${trip.tagColor}`}>
                        {trip.tag}
                    </span>
                </div>

                {/* Texts */}
                <div className="mt-auto">
                    <h2 className="text-[28px] font-bold text-white font-serif tracking-wide mb-3">{trip.title}</h2>

                    <div className="flex flex-col gap-2">
                        <div className="flex items-center gap-2 text-white/90 text-[14px]">
                            <MapPin size={16} className="text-white/70" />
                            {trip.location}
                        </div>
                        <div className="flex items-center gap-2 text-white/90 text-[14px]">
                            <Calendar size={16} className="text-white/70" />
                            {trip.dates}
                        </div>
                    </div>

                    <div className="mt-5 flex items-end justify-between">
                        {/* Status / Progress */}
                        {trip.statusType === 'progress' && (
                            <div className="w-[300px]">
                                <p className="text-white text-[13px] font-medium mb-2">{trip.statusText}</p>
                                <div className="h-1.5 w-full bg-white/30 rounded-full overflow-hidden">
                                    <div className="h-full bg-[#4ADE80] rounded-full" style={{ width: trip.progressValue }} />
                                </div>
                            </div>
                        )}

                        {trip.statusType === 'upcoming' && (
                            <div>
                                <p className="text-white text-[14px] font-medium">
                                    Starts in <span className="text-[#C99A3D] font-bold">{trip.statusAccent}</span>
                                </p>
                            </div>
                        )}

                        {trip.statusType === 'completed' && (
                            <div className="flex items-center gap-2 text-[#4ADE80] text-[14px] font-semibold">
                                <CheckCircle size={16} />
                                Trip Completed
                            </div>
                        )}

                        <button className="w-11 h-11 bg-white rounded-xl flex items-center justify-center text-[#0B2A4A] shadow-lg hover:bg-gray-50 transition-colors shrink-0">
                            <ChevronRight size={20} />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

const UserTrips = () => {
    return (
        <DashboardLayout>
            <div className="max-w-[1000px] mx-auto pb-10">

                {/* Controls Row */}
                <div className="flex items-center justify-between gap-4 mb-10">
                    <div className="relative flex-1 max-w-[400px]">
                        <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                        <input
                            type="text"
                            placeholder="Search trips..."
                            className="w-full pl-11 pr-4 py-3 bg-white border border-gray-200 rounded-xl text-[14px] outline-none hover:border-gray-300 transition-colors focus:border-[#C99A3D] shadow-sm"
                        />
                    </div>

                    <div className="flex items-center gap-3">
                        <button className="flex items-center gap-2 px-5 py-3 bg-white border border-gray-200 rounded-xl text-[14px] font-semibold text-[#0B2A4A] hover:bg-gray-50 transition-colors shadow-sm">
                            Group by <ChevronDown size={16} className="text-gray-400" />
                        </button>
                        <button className="flex items-center gap-2 px-5 py-3 bg-white border border-gray-200 rounded-xl text-[14px] font-semibold text-[#0B2A4A] hover:bg-gray-50 transition-colors shadow-sm">
                            <Filter size={16} className="text-[#C99A3D]" /> Filter <ChevronDown size={16} className="text-gray-400" />
                        </button>
                        <button className="flex items-center gap-2 px-5 py-3 bg-white border border-gray-200 rounded-xl text-[14px] font-semibold text-[#0B2A4A] hover:bg-gray-50 transition-colors shadow-sm">
                            Sort by <ChevronDown size={16} className="text-gray-400" />
                        </button>
                    </div>
                </div>

                {/* Section: Ongoing */}
                <div className="mb-10">
                    <div className="flex items-center justify-between mb-5">
                        <h2 className="text-[24px] font-bold text-[#0B2A4A] font-serif">Ongoing</h2>
                        <button className="text-[14px] font-bold text-[#1F6BBA] hover:text-[#0B2A4A] transition-colors flex items-center gap-1 group">
                            View all <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                        </button>
                    </div>
                    <TripListCard
                        trip={{
                            title: "Swiss Alps Adventure",
                            location: "Switzerland",
                            dates: "Jun 15 - Jun 25, 2025",
                            image: "https://images.unsplash.com/photo-1549880338-65ddcdfd017b?w=1000&h=400&fit=crop",
                            tag: "ONGOING",
                            tagColor: "bg-[#22c55e]/20 text-[#4ADE80]",
                            statusType: "progress",
                            statusText: "5 of 10 Days Completed",
                            progressValue: "50%"
                        }}
                    />
                </div>

                {/* Section: Up-coming */}
                <div className="mb-10">
                    <div className="flex items-center justify-between mb-5">
                        <h2 className="text-[24px] font-bold text-[#0B2A4A] font-serif">Up-coming</h2>
                        <button className="text-[14px] font-bold text-[#1F6BBA] hover:text-[#0B2A4A] transition-colors flex items-center gap-1 group">
                            View all <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                        </button>
                    </div>
                    <TripListCard
                        trip={{
                            title: "Bali Island Escape",
                            location: "Indonesia",
                            dates: "Jul 10 - Jul 18, 2025",
                            image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=1000&h=400&fit=crop",
                            tag: "UPCOMING",
                            tagColor: "bg-[#3b82f6]/20 text-[#60A5FA]",
                            statusType: "upcoming",
                            statusAccent: "37 days"
                        }}
                    />
                </div>

                {/* Section: Completed */}
                <div className="mb-10">
                    <div className="flex items-center justify-between mb-5">
                        <h2 className="text-[24px] font-bold text-[#0B2A4A] font-serif">Completed</h2>
                        <button className="text-[14px] font-bold text-[#1F6BBA] hover:text-[#0B2A4A] transition-colors flex items-center gap-1 group">
                            View all <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                        </button>
                    </div>
                    <TripListCard
                        trip={{
                            title: "Tokyo City Explorer",
                            location: "Japan",
                            dates: "May 5 - May 12, 2025",
                            image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=1000&h=400&fit=crop",
                            tag: "COMPLETED",
                            tagColor: "bg-white/20 text-white/90",
                            statusType: "completed"
                        }}
                    />
                    <TripListCard
                        trip={{
                            title: "Norway Fjords Roadtrip",
                            location: "Norway",
                            dates: "Apr 1 - Apr 10, 2025",
                            image: "https://images.unsplash.com/photo-1504689408018-0f04c62e5ab8?w=1000&h=400&fit=crop",
                            tag: "COMPLETED",
                            tagColor: "bg-white/20 text-white/90",
                            statusType: "completed"
                        }}
                    />
                </div>

            </div>
        </DashboardLayout>
    );
};

export default UserTrips;
