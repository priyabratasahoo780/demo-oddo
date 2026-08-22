import React from 'react';
import { Briefcase, CalendarDays, IndianRupee, Globe, Plane } from 'lucide-react';

const stats = [
    {
        icon: Briefcase,
        value: '8',
        label: 'Total Trips',
        sub: ['4 Upcoming', '4 Completed'],
        subColor: 'text-[#0B2A4A]',
        iconBg: 'bg-[#FFF8EB]',
        iconColor: 'text-[#C99A3D]',
    },
    {
        icon: CalendarDays,
        value: '24',
        label: 'Days Traveled',
        sub: ['142 Days to go'],
        subColor: 'text-[#6F9FC5]',
        iconBg: 'bg-[#EBF5FF]',
        iconColor: 'text-[#6F9FC5]',
    },
    {
        icon: IndianRupee,
        value: '₹1,48,750',
        label: 'Total Spent',
        sub: ['₹32,500 This Month'],
        subColor: 'text-[#0B2A4A]',
        iconBg: 'bg-[#EBF5FF]',
        iconColor: 'text-[#6F9FC5]',
    },
    {
        icon: Globe,
        value: '12',
        label: 'Countries Visited',
        sub: ['3 New Countries'],
        subColor: 'text-[#C99A3D]',
        iconBg: 'bg-[#FFF8EB]',
        iconColor: 'text-[#C99A3D]',
    },
];

const StatsCards = () => {
    return (
        <div className="grid grid-cols-4 gap-5">
            {stats.map((stat, i) => (
                <div
                    key={i}
                    className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                    <div className="flex items-start gap-4">
                        <div className={`w-11 h-11 rounded-xl flex items-center justify-center ${stat.iconBg}`}>
                            <stat.icon size={20} className={stat.iconColor} strokeWidth={1.8} />
                        </div>
                        <div>
                            <p className="text-[28px] font-bold text-[#0B2A4A] leading-none">{stat.value}</p>
                            <p className="text-[13px] text-gray-500 mt-1 font-medium">{stat.label}</p>
                        </div>
                    </div>
                    <div className="mt-4 pt-3 border-t border-gray-100 flex items-center gap-3">
                        {stat.sub.map((s, j) => (
                            <span key={j} className={`text-[12px] font-medium ${stat.subColor} flex items-center gap-1`}>
                                {j === 0 && <span className="w-1.5 h-1.5 rounded-full bg-[#C99A3D] inline-block" />}
                                {s}
                            </span>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default StatsCards;
