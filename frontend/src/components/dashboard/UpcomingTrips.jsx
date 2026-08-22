import React from 'react';
import { MapPin, Clock, MoreVertical } from 'lucide-react';

const trips = [
    {
        name: 'Swiss Alps Adventure',
        dates: 'Jun 15 - Jun 25, 2025',
        budget: '₹1,25,000',
        cities: 5,
        days: 10,
        countdown: 'In 12 days',
        countdownColor: 'bg-green-50 text-green-600',
        image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=200&h=130&fit=crop',
    },
    {
        name: 'Greek Island Escape',
        dates: 'Jul 10 - Jul 18, 2025',
        budget: '₹95,000',
        cities: 3,
        days: 8,
        countdown: 'In 37 days',
        countdownColor: 'bg-blue-50 text-blue-600',
        image: 'https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?w=200&h=130&fit=crop',
    },
    {
        name: 'Bali Bliss',
        dates: 'Aug 5 - Aug 12, 2025',
        budget: '₹65,000',
        cities: 2,
        days: 7,
        countdown: 'In 63 days',
        countdownColor: 'bg-orange-50 text-orange-600',
        image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=200&h=130&fit=crop',
    },
];

const UpcomingTrips = () => {
    return (
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
            <div className="flex items-center justify-between mb-5">
                <h3 className="text-[16px] font-bold text-[#0B2A4A]">Upcoming Trips</h3>
                <button className="text-[13px] text-[#6F9FC5] font-medium hover:text-[#0B2A4A] transition-colors">View all</button>
            </div>

            <div className="flex flex-col gap-4">
                {trips.map((trip, i) => (
                    <div key={i} className="flex items-center gap-4 p-3 rounded-xl hover:bg-gray-50 transition-colors group">
                        {/* Image */}
                        <img
                            src={trip.image}
                            alt={trip.name}
                            className="w-[100px] h-[70px] rounded-xl object-cover flex-shrink-0"
                        />

                        {/* Info */}
                        <div className="flex-1 min-w-0">
                            <div className="flex items-start justify-between">
                                <div>
                                    <h4 className="text-[14px] font-semibold text-[#0B2A4A]">{trip.name}</h4>
                                    <p className="text-[12px] text-gray-400 mt-0.5">{trip.dates}</p>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="text-right">
                                        <p className="text-[14px] font-bold text-[#0B2A4A]">{trip.budget}</p>
                                        <p className="text-[11px] text-gray-400">Budget</p>
                                    </div>
                                    <button className="p-1 hover:bg-gray-100 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                                        <MoreVertical size={14} className="text-gray-400" />
                                    </button>
                                </div>
                            </div>
                            <div className="flex items-center gap-4 mt-2">
                                <span className="flex items-center gap-1 text-[11px] text-gray-400">
                                    <MapPin size={12} /> {trip.cities} Cities
                                </span>
                                <span className="flex items-center gap-1 text-[11px] text-gray-400">
                                    <Clock size={12} /> {trip.days} Days
                                </span>
                                <span className={`text-[11px] font-medium px-2.5 py-0.5 rounded-full ml-auto ${trip.countdownColor}`}>
                                    {trip.countdown}
                                </span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default UpcomingTrips;
