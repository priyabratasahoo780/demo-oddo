import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { LayoutDashboard, Map, CalendarDays, Wallet, Bookmark, Users, Heart, Settings, Plane } from 'lucide-react';

const navItems = [
    { label: 'Dashboard', icon: LayoutDashboard, path: '/dashboard' },
    { label: 'My Trips', icon: Map, path: '/my-trips' },
    { label: 'Itinerary', icon: CalendarDays, path: '/itinerary' },
    { label: 'Budget', icon: Wallet, path: '/budget' },
    { label: 'Saved Places', icon: Bookmark, path: '/saved' },
    { label: 'Collaborators', icon: Users, path: '/collaborators' },
    { label: 'Wishlist', icon: Heart, path: '/wishlist' },
    { label: 'Settings', icon: Settings, path: '/settings' },
];

const Sidebar = () => {
    const location = useLocation();

    return (
        <aside className="w-[220px] min-h-screen bg-[#0B2A4A] flex flex-col fixed left-0 top-0 z-40">
            {/* Brand */}
            <div className="px-6 pt-7 pb-2">
                <h1 className="font-script text-[2.2rem] text-white leading-none tracking-wide">
                    Globe <span className="text-[#E5C477]">Trotter</span>
                </h1>
                <div className="flex items-center gap-1 mt-1.5 ml-1">
                    <span className="text-[10px] tracking-[0.35em] text-white/70 font-medium">THE</span>
                    <Plane size={12} className="text-[#E5C477] rotate-[-15deg]" fill="currentColor" />
                    <span className="text-[10px] tracking-[0.35em] text-white/70 font-medium">T R A V E L</span>
                </div>
            </div>

            {/* Navigation */}
            <nav className="flex-1 mt-8 px-3 flex flex-col gap-1">
                {navItems.map((item) => {
                    const isActive = location.pathname === item.path;
                    return (
                        <Link
                            key={item.label}
                            to={item.path}
                            className={`flex items-center gap-3 px-4 py-2.5 rounded-lg text-[14px] font-medium transition-all duration-200 group
                ${isActive
                                    ? 'bg-[#C99A3D] text-white shadow-md'
                                    : 'text-white/70 hover:bg-white/10 hover:text-white'
                                }`}
                        >
                            <item.icon size={18} strokeWidth={1.8} className={isActive ? 'text-white' : 'text-white/60 group-hover:text-white'} />
                            {item.label}
                        </Link>
                    );
                })}
            </nav>

            {/* Bottom quote & decoration */}
            <div className="px-6 pb-8 mt-auto">
                <Plane size={20} className="text-[#E5C477] mb-4 rotate-[30deg]" fill="currentColor" />
                <div className="text-white/60 text-[13px] leading-relaxed">
                    The world is open.<br />
                    It's time to<br />
                    <span className="font-script text-[#E5C477] text-[28px] leading-none">explore.</span>
                    <svg className="w-12 h-1 text-white/30 mt-0.5" viewBox="0 0 100 10" preserveAspectRatio="none">
                        <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" />
                    </svg>
                </div>
            </div>
        </aside>
    );
};

export default Sidebar;
