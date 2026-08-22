import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { LayoutDashboard, Map, CalendarDays, Wallet, Users, Heart, Settings, Plane, User, MessageCircle, Calendar } from 'lucide-react';

const navItems = [
    { label: 'Dashboard', icon: LayoutDashboard, path: '/dashboard' },
    { label: 'User Trip Listing', icon: Map, path: '/my-trips' },
    { label: 'Itinerary', icon: CalendarDays, path: '/itinerary' },
    { label: 'Budget', icon: Wallet, path: '/budget' },
    { label: 'Collaborators', icon: Users, path: '/collaborators' },
    { label: 'Wishlist', icon: Heart, path: '/wishlist' },
    { label: 'Profile', icon: User, path: '/profile' },
    { label: 'Community', icon: MessageCircle, path: '/community' },
    { label: 'Calendar', icon: Calendar, path: '/calendar' },
    { label: 'Settings', icon: Settings, path: '/settings' },
];

const Sidebar = () => {
    const location = useLocation();

    return (
        <aside className="w-[220px] min-h-screen bg-[#0B2A4A] flex flex-col fixed left-0 top-0 z-40 overflow-hidden">
            {/* Decorative background map (simulated with SVG patterns) */}
            <div className="absolute inset-0 opacity-10 pointer-events-none">
                <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="-20" cy="500" r="150" fill="none" stroke="white" strokeWidth="1" strokeDasharray="4 4" />
                    <path d="M 0 400 Q 100 350 200 450" fill="none" stroke="white" strokeWidth="1" strokeDasharray="3 3" />
                </svg>
            </div>

            <div className="relative z-10 flex flex-col h-full">
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
                        const isActive = item.path === '/'
                            ? location.pathname === '/'
                            : location.pathname.startsWith(item.path);
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

            </div>
        </aside>
    );
};

export default Sidebar;
