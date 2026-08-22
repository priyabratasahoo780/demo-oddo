import React from 'react';
import { Search, ChevronDown, Filter, MessageCircle, Eye, ChevronRight } from 'lucide-react';
import DashboardLayout from '../components/layout/DashboardLayout';

const communityPosts = [
    {
        author: 'Rohit Sharma',
        time: '2h ago',
        avatar: 'https://images.unsplash.com/photo-1539665268141-4b1c4516611a?w=100&h=100&fit=crop',
        tag: 'TRIPS',
        tagColor: 'bg-[#4ADE80]/20 text-[#22c55e]',
        title: 'Best 7-day itinerary for Switzerland?',
        snippet: "Hi everyone! I'm planning a 7-day trip to Switzerland in June. Looking for suggestions on places to visit and things to do...",
        replies: '24',
        views: '1.2K'
    },
    {
        author: 'Ananya Verma',
        time: '5h ago',
        avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
        tag: 'DESTINATIONS',
        tagColor: 'bg-[#60A5FA]/20 text-[#3b82f6]',
        title: 'Hidden gems in Bali 🌴',
        snippet: "Bali is more than just beaches! Here are some hidden gems I discovered on my recent trip. Hope this helps ☺️",
        replies: '18',
        views: '856'
    },
    {
        author: 'Karan Mehta',
        time: '1d ago',
        avatar: 'https://images.unsplash.com/photo-1542385262-cdf06b2b57e7?w=100&h=100&fit=crop',
        tag: 'TIPS & ADVICE',
        tagColor: 'bg-[#F59E0B]/20 text-[#d97706]',
        title: 'How to travel on a budget in Europe?',
        snippet: "I traveled across 8 countries in Europe for just ₹80k. Here are my top tips to save money while traveling...",
        replies: '36',
        views: '2.3K'
    },
    {
        author: 'Neha Iyer',
        time: '2d ago',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
        tag: 'GEAR',
        tagColor: 'bg-[#A855F7]/20 text-[#9333ea]',
        title: 'Best backpack for long trips?',
        snippet: "Planning a 3-month backpacking trip. Which backpack brands are reliable and comfortable?",
        replies: '15',
        views: '742'
    },
    {
        author: 'Arjun Nair',
        time: '3d ago',
        avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=100&h=100&fit=crop',
        tag: 'GENERAL',
        tagColor: 'bg-[#9CA3AF]/20 text-[#4B5563]',
        title: 'Workation: How do you stay productive?',
        snippet: "I love working while traveling but sometimes it gets hard to stay focused. How do you manage?",
        replies: '29',
        views: '1.1K'
    }
];

const tabs = ['All Posts', 'Trips', 'Destinations', 'Tips & Advice', 'Gear', 'General'];

const Community = () => {
    return (
        <DashboardLayout>
            {/* Header section with decorative background */}
            <div className="relative mb-6 pb-2">
                {/* Decorative background mountains */}
                <div className="absolute right-0 top-0 w-[50%] h-[160px] pointer-events-none overflow-hidden rounded-xl">
                    <div className="absolute inset-0 bg-cover bg-right opacity-30" style={{ backgroundImage: "url('/src/assets/travel-login.jpg')" }} />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#F8F7F3] via-[#F8F7F3]/70 to-transparent" />
                    <svg className="absolute top-6 right-[40%] w-24 h-10 text-[#C99A3D] opacity-40" viewBox="0 0 100 20" fill="none">
                        <path d="M0 20 Q 50 -10 100 20" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 4" />
                    </svg>
                </div>

                <div className="relative z-10 max-w-[500px]">
                    <h1 className="text-[2.2rem] font-bold text-[#0B2A4A] leading-tight">
                        Community Tab
                    </h1>
                    <p className="text-[14px] text-gray-500 font-medium mt-1 leading-relaxed">
                        Share experiences, ask questions and connect with fellow travelers.
                    </p>
                </div>
            </div>

            <div className="max-w-[1000px] mb-8">

                {/* Controls Row */}
                <div className="flex items-center justify-between gap-4 mb-8">
                    <div className="relative flex-1 max-w-[450px]">
                        <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                        <input
                            type="text"
                            placeholder="Search in community..."
                            className="w-full pl-11 pr-4 py-3.5 bg-white border border-gray-200 rounded-xl text-[14px] outline-none shadow-sm transition-all focus:border-[#C99A3D]"
                        />
                    </div>

                    <div className="flex items-center gap-3 shrink-0">
                        <button className="flex items-center gap-2 px-5 py-3.5 bg-white border border-gray-200 rounded-xl text-[14px] font-semibold text-[#0B2A4A] shadow-sm hover:bg-gray-50 transition-colors">
                            <div className="w-4 h-4 rounded border border-gray-300 flex items-center justify-center shrink-0">
                                <div className="w-2 h-0.5 bg-[#0B2A4A] rounded-full" />
                            </div>
                            Group by <ChevronDown size={16} className="text-gray-400" />
                        </button>
                        <button className="flex items-center gap-2 px-5 py-3.5 bg-white border border-gray-200 rounded-xl text-[14px] font-semibold text-[#0B2A4A] shadow-sm hover:bg-gray-50 transition-colors">
                            <Filter size={16} className="text-gray-400" /> Filter <ChevronDown size={16} className="text-gray-400" />
                        </button>
                        <button className="flex items-center gap-2 px-5 py-3.5 bg-white border border-gray-200 rounded-xl text-[14px] font-semibold text-[#0B2A4A] shadow-sm hover:bg-gray-50 transition-colors">
                            <span className="flex flex-col gap-0.5 text-gray-400">
                                <span className="w-2.5 h-[2px] bg-current"></span>
                                <span className="w-1.5 h-[2px] bg-current"></span>
                            </span>
                            Sort by <ChevronDown size={16} className="text-gray-400" />
                        </button>
                    </div>
                </div>

                {/* Tab Filters */}
                <div className="flex items-center gap-3 mb-8 overflow-x-auto scrollbar-hide py-1">
                    {tabs.map((tab, idx) => (
                        <button
                            key={idx}
                            className={`px-5 py-2 rounded-xl text-[13px] font-semibold whitespace-nowrap transition-all shadow-sm border ${idx === 0
                                ? 'bg-[#0B2A4A] text-white border-[#0B2A4A]'
                                : 'bg-white text-gray-600 border-[#E5E7EB] hover:border-[#C99A3D]/50 hover:text-[#0B2A4A]'
                                }`}
                        >
                            {tab}
                        </button>
                    ))}
                </div>

                {/* List of Posts */}
                <div className="flex flex-col gap-5 mb-8">
                    {communityPosts.map((post, idx) => (
                        <div key={idx} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 pr-10 flex gap-6 hover:shadow-md transition-shadow group cursor-pointer">

                            {/* Avatar with Status Dot */}
                            <div className="relative shrink-0 self-center md:self-start">
                                <img src={post.avatar} alt="Author" className="w-[84px] h-[84px] rounded-full object-cover shadow-sm border-2 border-white" />
                                <div className="absolute bottom-2 right-2 w-3.5 h-3.5 bg-[#4ADE80] border-2 border-white rounded-full"></div>
                            </div>

                            {/* Main Content */}
                            <div className="flex-1 py-1">
                                <div className="mb-2">
                                    <span className={`px-2.5 py-1 rounded text-[10px] font-bold uppercase tracking-wider ${post.tagColor}`}>
                                        {post.tag}
                                    </span>
                                </div>

                                <h3 className="text-[17px] font-bold text-[#0B2A4A] mb-1.5">{post.title}</h3>

                                <p className="text-[13px] text-gray-500 leading-relaxed max-w-[90%] mb-3">
                                    {post.snippet}
                                </p>

                                <div className="flex items-center gap-2 text-[12px] font-medium mt-auto text-gray-400">
                                    <span className="text-gray-600 font-semibold">{post.author}</span>
                                    <span>•</span>
                                    <span>{post.time}</span>
                                </div>
                            </div>

                            {/* Stats - Right Side */}
                            <div className="flex items-center justify-end shrink-0 gap-8 min-w-[140px] pl-6 border-l border-gray-50">
                                <div className="flex flex-col items-center justify-center gap-1">
                                    <div className="flex items-center gap-2 text-[#0B2A4A]">
                                        <MessageCircle size={18} strokeWidth={2} />
                                        <span className="text-[15px] font-bold">{post.replies}</span>
                                    </div>
                                    <span className="text-[11px] text-gray-400 font-medium tracking-wide">Replies</span>
                                </div>

                                <div className="flex flex-col items-center justify-center gap-1">
                                    <div className="flex items-center gap-2 text-[#0B2A4A]">
                                        <Eye size={18} strokeWidth={2} />
                                        <span className="text-[15px] font-bold">{post.views}</span>
                                    </div>
                                    <span className="text-[11px] text-gray-400 font-medium tracking-wide">Views</span>
                                </div>
                            </div>

                        </div>
                    ))}
                </div>

                {/* Pagination Footer */}
                <div className="flex items-center justify-between pt-2">
                    <p className="text-[13px] text-gray-500 font-medium">
                        Showing 1 to 5 of 120+ posts
                    </p>

                    <div className="flex items-center gap-1.5">
                        <button className="w-8 h-8 rounded-lg bg-[#0B2A4A] text-white text-[13px] font-bold flex items-center justify-center">1</button>
                        <button className="w-8 h-8 rounded-lg hover:bg-gray-100 text-gray-600 text-[13px] font-medium flex items-center justify-center transition-colors">2</button>
                        <button className="w-8 h-8 rounded-lg hover:bg-gray-100 text-gray-600 text-[13px] font-medium flex items-center justify-center transition-colors">3</button>
                        <span className="px-1 text-gray-400 font-medium">...</span>
                        <button className="w-8 h-8 rounded-lg hover:bg-gray-100 text-gray-600 text-[13px] font-medium flex items-center justify-center transition-colors">20</button>
                        <button className="w-8 h-8 rounded-lg border border-gray-200 hover:bg-gray-50 text-gray-600 flex items-center justify-center transition-colors">
                            <ChevronRight size={16} />
                        </button>
                    </div>
                </div>

            </div>
        </DashboardLayout>
    );
};

export default Community;
