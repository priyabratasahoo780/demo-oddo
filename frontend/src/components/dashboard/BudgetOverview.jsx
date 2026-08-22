import React from 'react';
import { AlertCircle, ArrowRight } from 'lucide-react';

const budgetItems = [
    { label: 'Transport', amount: '₹45,000', color: '#6F9FC5' },
    { label: 'Stay', amount: '₹58,500', color: '#C99A3D' },
    { label: 'Activities', amount: '₹28,750', color: '#E5C477' },
    { label: 'Food', amount: '₹12,500', color: '#7BC47F' },
    { label: 'Miscellaneous', amount: '₹3,000', color: '#A78BDA' },
];

const BudgetOverview = () => {
    const totalBudget = 285000;
    const spent = 148750;
    const remaining = totalBudget - spent;
    const percentage = Math.round((remaining / totalBudget) * 100);
    const spentDeg = (spent / totalBudget) * 360;

    return (
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
            <div className="flex items-center justify-between mb-5">
                <h3 className="text-[16px] font-bold text-[#0B2A4A]">Budget Overview</h3>
                <button className="text-[13px] text-[#6F9FC5] font-medium hover:text-[#0B2A4A] transition-colors">View details</button>
            </div>

            {/* Top section: budget + donut */}
            <div className="flex items-start gap-5">
                {/* Left: budget breakdown */}
                <div className="flex-1">
                    <p className="text-[11px] text-gray-400 font-medium">Total Budget</p>
                    <p className="text-[24px] font-bold text-[#0B2A4A] mt-0.5">₹2,85,000</p>

                    <div className="flex flex-col gap-2.5 mt-4">
                        {budgetItems.map((item, i) => (
                            <div key={i} className="flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                    <span className="w-2.5 h-2.5 rounded-full flex-shrink-0" style={{ backgroundColor: item.color }} />
                                    <span className="text-[12px] text-gray-500">{item.label}</span>
                                </div>
                                <span className="text-[12px] font-medium text-[#0B2A4A]">{item.amount}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right: Donut chart */}
                <div className="flex-shrink-0 relative w-[120px] h-[120px]">
                    <svg viewBox="0 0 120 120" className="w-full h-full -rotate-90">
                        {/* Background circle */}
                        <circle cx="60" cy="60" r="50" fill="none" stroke="#E8E8E8" strokeWidth="12" />
                        {/* Budget segments simulation */}
                        <circle cx="60" cy="60" r="50" fill="none" stroke="#6F9FC5" strokeWidth="12"
                            strokeDasharray={`${(45000 / totalBudget) * 314} 314`} strokeDashoffset="0" />
                        <circle cx="60" cy="60" r="50" fill="none" stroke="#C99A3D" strokeWidth="12"
                            strokeDasharray={`${(58500 / totalBudget) * 314} 314`} strokeDashoffset={`${-(45000 / totalBudget) * 314}`} />
                        <circle cx="60" cy="60" r="50" fill="none" stroke="#E5C477" strokeWidth="12"
                            strokeDasharray={`${(28750 / totalBudget) * 314} 314`} strokeDashoffset={`${-((45000 + 58500) / totalBudget) * 314}`} />
                        <circle cx="60" cy="60" r="50" fill="none" stroke="#7BC47F" strokeWidth="12"
                            strokeDasharray={`${(12500 / totalBudget) * 314} 314`} strokeDashoffset={`${-((45000 + 58500 + 28750) / totalBudget) * 314}`} />
                        <circle cx="60" cy="60" r="50" fill="none" stroke="#A78BDA" strokeWidth="12"
                            strokeDasharray={`${(3000 / totalBudget) * 314} 314`} strokeDashoffset={`${-((45000 + 58500 + 28750 + 12500) / totalBudget) * 314}`} />
                    </svg>
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                        <p className="text-[14px] font-bold text-[#C99A3D]">₹1,48,750</p>
                        <p className="text-[10px] text-gray-400">Spent</p>
                    </div>
                </div>
            </div>

            {/* Remaining Budget */}
            <div className="mt-5 pt-4 border-t border-gray-100">
                <div className="flex items-center justify-between">
                    <div>
                        <p className="text-[11px] text-gray-400">Remaining Budget</p>
                        <p className="text-[20px] font-bold text-green-600 mt-0.5">₹1,36,250</p>
                    </div>
                    <div className="text-right">
                        <p className="text-[22px] font-bold text-green-600">{percentage}%</p>
                        <p className="text-[10px] text-gray-400">of total budget</p>
                    </div>
                </div>
            </div>

            {/* Average cost per day */}
            <div className="mt-4 bg-gray-50 rounded-xl p-3.5">
                <p className="text-[11px] text-gray-400">Average Cost per Day</p>
                <p className="text-[20px] font-bold text-[#0B2A4A] mt-0.5">₹3,625</p>
                <div className="w-full h-1.5 bg-gray-200 rounded-full mt-2">
                    <div className="h-full bg-gradient-to-r from-[#C99A3D] to-[#E5C477] rounded-full" style={{ width: '60%' }} />
                </div>
            </div>

            {/* Budget Alerts */}
            <div className="mt-4 pt-4 border-t border-gray-100">
                <div className="flex items-center justify-between mb-3">
                    <p className="text-[13px] font-semibold text-[#0B2A4A]">Budget Alerts</p>
                    <span className="w-5 h-5 bg-red-100 text-red-500 text-[10px] font-bold rounded-full flex items-center justify-center">2</span>
                </div>
                <p className="text-[12px] text-gray-500">
                    <span className="font-semibold text-[#0B2A4A]">Swiss Alps Adventure</span> is 18% over budget
                </p>
                <button className="flex items-center gap-1 text-[12px] text-[#C99A3D] font-medium mt-2 hover:text-[#0B2A4A] transition-colors">
                    Review Suggestions <ArrowRight size={12} />
                </button>
            </div>
        </div>
    );
};

export default BudgetOverview;
