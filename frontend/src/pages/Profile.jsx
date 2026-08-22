import React from 'react';
import { Camera, Mail, Phone, MapPin, Globe, Calendar, ArrowRight, MoreVertical, CheckCircle, Edit2, Star } from 'lucide-react';
import DashboardLayout from '../components/layout/DashboardLayout';

const preplannedTrips = [
    {
        image: 'https://images.unsplash.com/photo-1549880338-65ddcdfd017b?w=400&h=300&fit=crop',
        title: 'Swiss Alps Adventure',
        location: 'Switzerland',
        dates: 'Jun 15 - Jun 25, 2025',
        statusTag: 'ONGOING',
        statusColor: 'bg-green-600 text-white',
        progressText: '5 of 10 Days Completed',
        hasProgress: true,
        progress: 50
    },
    {
        image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=400&h=300&fit=crop',
        title: 'Bali Island Escape',
        location: 'Indonesia',
        dates: 'Jul 10 - Jul 18, 2025',
        statusTag: 'UPCOMING',
        statusColor: 'bg-blue-600 text-white',
        progressText: 'Starts in 37 days',
        hasProgress: false
    },
    {
        image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=400&h=300&fit=crop',
        title: 'Tokyo City Explorer',
        location: 'Japan',
        dates: 'Aug 5 - Aug 12, 2025',
        statusTag: 'PLANNED',
        statusColor: 'bg-gray-400 text-white',
        progressText: 'Starts in 63 days',
        hasProgress: false
    }
];

const previousTrips = [
    {
        image: 'https://images.unsplash.com/photo-1504689408018-0f04c62e5ab8?w=400&h=300&fit=crop',
        title: 'Norway Fjords Roadtrip',
        location: 'Norway',
        dates: 'Apr 1 - Apr 10, 2025',
    },
    {
        image: 'https://images.unsplash.com/photo-1555400038-63f5ba517a47?w=400&h=300&fit=crop',
        title: 'Indonesia Heritage Tour',
        location: 'Indonesia',
        dates: 'Mar 5 - Mar 12, 2025',
    },
    {
        image: 'https://images.unsplash.com/photo-1513622470522-26cb3c8a509c?w=400&h=300&fit=crop',
        title: 'Europe Backpacking',
        location: 'Denmark • Germany • Netherlands',
        dates: 'Feb 10 - Feb 24, 2025',
    }
];

const TripCard = ({ trip, isCompleted }) => (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden hover:shadow-md transition-shadow group flex flex-col">
        <div className="relative h-[200px] overflow-hidden">
            <img src={trip.image} alt={trip.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            <div className="absolute top-4 left-4">
                {isCompleted ? (
                    <span className="px-3 py-1 rounded bg-green-600/90 backdrop-blur-sm text-white text-[10px] font-bold tracking-wide shadow-sm">
                        COMPLETED
                    </span>
                ) : (
                    <span className={`px-3 py-1 rounded backdrop-blur-sm text-[10px] font-bold tracking-wide shadow-sm ${trip.statusColor}`}>
                        {trip.statusTag}
                    </span>
                )}
            </div>
        </div>

        <div className="p-5 flex-1 flex flex-col">
            <div className="flex items-start justify-between mb-3">
                <h3 className="text-[15px] font-bold text-[#0B2A4A]">{trip.title}</h3>
                {!isCompleted && trip.statusTag === 'ONGOING' && (
                    <button className="text-gray-400 hover:text-gray-600 transition-colors">
                        <MoreVertical size={16} />
                    </button>
                )}
            </div>

            <div className="flex flex-col gap-2 mb-4 flex-1">
                <div className="flex items-center gap-2 text-[12px] text-gray-500">
                    <MapPin size={14} className="text-[#C99A3D]" />
                    {trip.location}
                </div>
                <div className="flex items-center gap-2 text-[12px] text-gray-500">
                    <Calendar size={14} className="text-[#C99A3D]" />
                    {trip.dates}
                </div>
            </div>

            <div className="mt-auto">
                {isCompleted ? (
                    <div className="flex items-center gap-2 text-[12px] font-semibold text-green-600 mb-4">
                        <CheckCircle size={14} />
                        Trip Completed
                    </div>
                ) : (
                    <div className="mb-4">
                        <p className="text-[12px] text-gray-500 mb-2 font-medium">
                            {trip.progressText}
                        </p>
                        {trip.hasProgress && (
                            <div className="h-1.5 w-full bg-gray-100 rounded-full overflow-hidden">
                                <div className="h-full bg-green-500 rounded-full" style={{ width: `${trip.progress}%` }} />
                            </div>
                        )}
                    </div>
                )}

                <button className="w-full py-3 bg-gray-50 hover:bg-gray-100 transition-colors rounded-xl flex items-center justify-center gap-2 text-[13px] font-semibold text-[#0B2A4A]">
                    View Details
                    <ArrowRight size={14} />
                </button>
            </div>
        </div>
    </div>
);

const Profile = () => {
    return (
        <DashboardLayout>
            <div className="max-w-[1200px] pb-10">

                {/* User Details Card */}
                <div className="bg-[#FCF9F4] rounded-[24px] border border-[#F3E8D6] p-8 mb-12 flex flex-col md:flex-row items-center gap-10 shadow-sm relative">

                    {/* User Image Area */}
                    <div className="flex flex-col items-center flex-shrink-0">
                        <div className="relative">
                            <img
                                src="https://i.pravatar.cc/300?img=11"
                                alt="Saptak"
                                className="w-32 h-32 rounded-full object-cover shadow-md border-4 border-white"
                            />
                            <button className="absolute bottom-1 right-1 w-8 h-8 bg-white rounded-full shadow-md flex items-center justify-center border border-gray-100 hover:bg-gray-50 text-[#C99A3D]">
                                <Camera size={16} />
                            </button>
                        </div>

                        <h2 className="text-[24px] font-bold text-[#0B2A4A] mt-4">Saptak</h2>

                        <div className="flex items-center justify-center gap-1 px-3 py-1 bg-[#FFF0D4] rounded-full mt-1.5">
                            <Star size={12} className="text-[#C99A3D]" fill="currentColor" />
                            <span className="text-[11px] font-bold text-[#A47B2C]">Explorer</span>
                        </div>

                        <div className="flex items-center gap-1.5 mt-3 text-[11px] text-gray-500 font-medium">
                            <Calendar size={12} />
                            Member since May 2025
                        </div>
                    </div>

                    {/* Divider */}
                    <div className="hidden md:block w-px h-40 bg-gradient-to-b from-transparent via-[#E1D1B7] to-transparent shrink-0" />

                    {/* Details Area */}
                    <div className="flex-1 w-full">
                        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8 gap-4">
                            <div>
                                <h1 className="text-[28px] font-bold text-[#0B2A4A] mb-2 font-serif">User Details</h1>
                                <p className="text-[14px] text-gray-500 max-w-sm leading-relaxed">
                                    Update your personal information and preferences to personalize your travel experience.
                                </p>
                            </div>
                            <button className="bg-[#0B2A4A] text-white px-5 py-2.5 rounded-xl font-medium text-[13px] flex items-center gap-2 hover:bg-[#113B66] transition-colors shadow-sm shrink-0">
                                <Edit2 size={14} />
                                Edit Profile
                            </button>
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                            {/* Email */}
                            <div className="flex items-start gap-3">
                                <div className="w-8 h-8 rounded-full bg-[#FFF0D4] flex items-center justify-center shrink-0">
                                    <Mail size={14} className="text-[#C99A3D]" />
                                </div>
                                <div>
                                    <p className="text-[11px] text-gray-500 font-bold uppercase tracking-wider mb-0.5">Email</p>
                                    <p className="text-[13px] font-medium text-[#0B2A4A]">saptak@example.com</p>
                                </div>
                            </div>

                            {/* Phone */}
                            <div className="flex items-start gap-3">
                                <div className="w-8 h-8 rounded-full bg-[#FFF0D4] flex items-center justify-center shrink-0">
                                    <Phone size={14} className="text-[#C99A3D]" />
                                </div>
                                <div>
                                    <p className="text-[11px] text-gray-500 font-bold uppercase tracking-wider mb-0.5">Phone</p>
                                    <p className="text-[13px] font-medium text-[#0B2A4A]">+91 98765 43210</p>
                                </div>
                            </div>

                            {/* Location */}
                            <div className="flex items-start gap-3">
                                <div className="w-8 h-8 rounded-full bg-[#FFF0D4] flex items-center justify-center shrink-0">
                                    <MapPin size={14} className="text-[#C99A3D]" />
                                </div>
                                <div>
                                    <p className="text-[11px] text-gray-500 font-bold uppercase tracking-wider mb-0.5">Location</p>
                                    <p className="text-[13px] font-medium text-[#0B2A4A]">Kolkata, India</p>
                                </div>
                            </div>

                            {/* Nationality */}
                            <div className="flex items-start gap-3">
                                <div className="w-8 h-8 rounded-full bg-[#FFF0D4] flex items-center justify-center shrink-0">
                                    <Globe size={14} className="text-[#C99A3D]" />
                                </div>
                                <div>
                                    <p className="text-[11px] text-gray-500 font-bold uppercase tracking-wider mb-0.5">Nationality</p>
                                    <p className="text-[13px] font-medium text-[#0B2A4A]">Indian</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                {/* Preplanned Trips */}
                <div className="mb-12">
                    <div className="flex items-center justify-between mb-6">
                        <h2 className="text-[20px] font-bold text-[#0B2A4A] font-serif">Preplanned Trips</h2>
                        <button className="text-[13px] font-bold text-[#1F6BBA] hover:text-[#0B2A4A] transition-colors flex items-center gap-1 group">
                            View all <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                        </button>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {preplannedTrips.map((trip, idx) => (
                            <TripCard key={idx} trip={trip} isCompleted={false} />
                        ))}
                    </div>
                </div>

                {/* Previous Trips */}
                <div>
                    <div className="flex items-center justify-between mb-6">
                        <h2 className="text-[20px] font-bold text-[#0B2A4A] font-serif">Previous Trips</h2>
                        <button className="text-[13px] font-bold text-[#1F6BBA] hover:text-[#0B2A4A] transition-colors flex items-center gap-1 group">
                            View all <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                        </button>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {previousTrips.map((trip, idx) => (
                            <TripCard key={idx} trip={trip} isCompleted={true} />
                        ))}
                    </div>
                </div>

            </div>
        </DashboardLayout>
    );
};

export default Profile;
