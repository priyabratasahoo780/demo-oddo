import React from 'react';

const destinations = [
    {
        name: 'Switzerland',
        desc: 'Scenic mountains, lakes & adventures',
        match: 'High Match',
        matchColor: 'bg-green-50 text-green-600',
        image: 'https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?w=120&h=80&fit=crop',
    },
    {
        name: 'Greece',
        desc: 'Beautiful islands & crystal clear waters',
        match: 'High Match',
        matchColor: 'bg-green-50 text-green-600',
        image: 'https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?w=120&h=80&fit=crop',
    },
    {
        name: 'Iceland',
        desc: 'Northern lights & natural wonders',
        match: 'Medium Match',
        matchColor: 'bg-amber-50 text-amber-600',
        image: 'https://images.unsplash.com/photo-1504829857797-ddff29c27927?w=120&h=80&fit=crop',
    },
    {
        name: 'Japan',
        desc: 'Culture, temples & modern cities',
        match: 'Medium Match',
        matchColor: 'bg-amber-50 text-amber-600',
        image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=120&h=80&fit=crop',
    },
    {
        name: 'New Zealand',
        desc: 'Adventure & breathtaking views',
        match: 'Medium Match',
        matchColor: 'bg-amber-50 text-amber-600',
        image: 'https://images.unsplash.com/photo-1469521669194-babb45599def?w=120&h=80&fit=crop',
    },
];

const TopDestinations = () => {
    return (
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
            <div className="flex items-center justify-between mb-5">
                <h3 className="text-[16px] font-bold text-[#0B2A4A]">Top Destinations for You</h3>
                <button className="text-[13px] text-[#6F9FC5] font-medium hover:text-[#0B2A4A] transition-colors">View all</button>
            </div>

            <div className="flex flex-col gap-3">
                {destinations.map((dest, i) => (
                    <div key={i} className="flex items-center gap-3.5 p-2 rounded-xl hover:bg-gray-50 transition-colors cursor-pointer">
                        <img
                            src={dest.image}
                            alt={dest.name}
                            className="w-[65px] h-[50px] rounded-lg object-cover flex-shrink-0"
                        />
                        <div className="flex-1 min-w-0">
                            <h4 className="text-[13px] font-semibold text-[#0B2A4A]">{dest.name}</h4>
                            <p className="text-[11px] text-gray-400 mt-0.5 truncate">{dest.desc}</p>
                        </div>
                        <span className={`text-[10px] font-medium px-2 py-1 rounded-full flex-shrink-0 ${dest.matchColor}`}>
                            {dest.match}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TopDestinations;
