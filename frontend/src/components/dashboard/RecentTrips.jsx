import React, { useRef } from 'react';
import { ChevronRight } from 'lucide-react';

const recentTrips = [
    {
        name: 'Goa Getaway',
        dates: 'Apr 10 - Apr 15, 2025',
        cost: '₹28,500',
        status: 'Completed',
        image: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=200&h=140&fit=crop',
    },
    {
        name: 'Kerala Backwaters',
        dates: 'Mar 5 - Mar 12, 2025',
        cost: '₹35,800',
        status: 'Completed',
        image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=200&h=140&fit=crop',
    },
    {
        name: 'Rajasthan Trails',
        dates: 'Feb 15 - Feb 22, 2025',
        cost: '₹42,200',
        status: 'Completed',
        image: 'https://images.unsplash.com/photo-1477587458883-47145ed94245?w=200&h=140&fit=crop',
    },
];

const RecentTrips = () => {
    const scrollRef = useRef(null);

    const scrollRight = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({ left: 220, behavior: 'smooth' });
        }
    };

    return (
        <div className="mt-8">
            <div className="flex items-center justify-between mb-5">
                <h3 className="text-[16px] font-bold text-[#0B2A4A]">Recent Trips</h3>
                <button className="text-[13px] text-[#6F9FC5] font-medium hover:text-[#0B2A4A] transition-colors">View all</button>
            </div>

            <div className="relative">
                <div ref={scrollRef} className="flex gap-5 overflow-x-auto pb-2 scrollbar-hide">
                    {recentTrips.map((trip, i) => (
                        <div key={i} className="min-w-[200px] bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden hover:shadow-md transition-shadow cursor-pointer group">
                            <div className="relative h-[120px] overflow-hidden">
                                <img
                                    src={trip.image}
                                    alt={trip.name}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                            </div>
                            <div className="p-4">
                                <h4 className="text-[13px] font-semibold text-[#0B2A4A]">{trip.name}</h4>
                                <p className="text-[11px] text-gray-400 mt-1">{trip.dates}</p>
                                <p className="text-[14px] font-bold text-[#0B2A4A] mt-2">{trip.cost}</p>
                                <span className="inline-block mt-2 text-[10px] font-medium px-2.5 py-0.5 rounded-full bg-green-50 text-green-600">
                                    {trip.status}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Scroll arrow */}
                <button
                    onClick={scrollRight}
                    className="absolute right-0 top-1/2 -translate-y-1/2 w-8 h-8 bg-white border border-gray-200 rounded-full flex items-center justify-center shadow-md hover:shadow-lg transition-shadow z-10"
                >
                    <ChevronRight size={16} className="text-gray-500" />
                </button>
            </div>
        </div>
    );
};

export default RecentTrips;
