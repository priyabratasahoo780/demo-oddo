import React from 'react';
import { Search, ChevronDown, Filter, MapPin, Star, ArrowRight, X, ChevronRight } from 'lucide-react';
import DashboardLayout from '../components/layout/DashboardLayout';

const searchResults = [
    {
        title: 'Paragliding in Bir Billing',
        location: 'Himachal Pradesh, India',
        rating: '4.8',
        reviews: '320',
        description: 'Fly over the scenic Dhauladhar ranges and experience the thrill of paragliding in Asia\'s paragliding capital.',
        price: '₹4,500',
        image: 'https://images.unsplash.com/photo-1522004245657-3aee5be46249?w=300&h=200&fit=crop',
    },
    {
        title: 'Paragliding in Goa',
        location: 'Goa, India',
        rating: '4.6',
        reviews: '256',
        description: 'Soar above the beaches and enjoy breathtaking views of the Arabian Sea and coastline.',
        price: '₹3,800',
        image: 'https://images.unsplash.com/photo-1582229555193-01bc5b550dd4?w=300&h=200&fit=crop',
    },
    {
        title: 'Paragliding in Pokhara',
        location: 'Pokhara, Nepal',
        rating: '4.9',
        reviews: '412',
        description: 'Fly above Phewa Lake with the Annapurna range as your backdrop. A must-try adventure!',
        price: '₹5,200',
        image: 'https://images.unsplash.com/photo-1601614769399-f5dedbc92bc0?w=300&h=200&fit=crop',
    },
    {
        title: 'Paragliding in Kamshet',
        location: 'Maharashtra, India',
        rating: '4.5',
        reviews: '189',
        description: 'Perfect weekend adventure near Mumbai and Pune. Fly high over the Sahyadri hills.',
        price: '₹2,900',
        image: 'https://images.unsplash.com/photo-1533273155705-ebfe7876b5b5?w=300&h=200&fit=crop',
    },
    {
        title: 'Paragliding in Manali',
        location: 'Himachal Pradesh, India',
        rating: '4.7',
        reviews: '276',
        description: 'Experience the beauty of the Himalayas from the sky in this exciting paragliding ride.',
        price: '₹4,200',
        image: 'https://images.unsplash.com/photo-1611756597274-1ab0df6df2ee?w=300&h=200&fit=crop',
    },
    {
        title: 'Paragliding in Varkala',
        location: 'Kerala, India',
        rating: '4.4',
        reviews: '153',
        description: 'Enjoy a serene paragliding experience over cliffs and beaches of Varkala.',
        price: '₹3,200',
        image: 'https://images.unsplash.com/photo-1473268960683-149bbee579d4?w=300&h=200&fit=crop',
    },
];

const SearchResults = () => {
    return (
        <DashboardLayout>
            {/* Header section with decorative background */}
            <div className="relative mb-8 pb-4">
                {/* Decorative background map and plane */}
                <div className="absolute right-0 top-0 w-2/3 h-[180px] pointer-events-none overflow-hidden rounded-xl">
                    <div className="absolute inset-0 bg-cover bg-right opacity-30" style={{ backgroundImage: "url('/src/assets/travel-login.jpg')" }} />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#F8F7F3] via-[#F8F7F3]/80 to-transparent" />
                    <svg className="absolute top-8 right-[30%] w-32 h-12 text-[#C99A3D] opacity-40" viewBox="0 0 100 20" fill="none">
                        <path d="M0 20 Q 50 -10 100 20" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 4" />
                    </svg>
                </div>

                <div className="relative z-10">
                    <h1 className="text-[2.2rem] font-bold leading-tight">
                        <span className="text-[#0B2A4A]">Activity Search / </span>
                        <span className="text-[#C99A3D] font-normal">City Search</span>
                    </h1>
                    <p className="text-[14px] text-gray-500 font-medium mt-1">
                        Find the best activities and experiences for your next adventure.
                    </p>
                </div>
            </div>

            <div className="max-w-[1000px] mb-8">

                {/* Controls Row */}
                <div className="flex items-center justify-between gap-4 mb-10">
                    <div className="relative flex-1">
                        <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                        <input
                            type="text"
                            defaultValue="Paragliding"
                            className="w-full pl-11 pr-12 py-3.5 bg-white border border-gray-200 rounded-xl text-[14px] font-medium outline-none shadow-sm"
                        />
                        <button className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600">
                            <X size={16} />
                        </button>
                    </div>

                    <div className="flex items-center gap-3 shrink-0">
                        <button className="flex items-center gap-2 px-5 py-3.5 bg-white border border-gray-200 rounded-xl text-[14px] font-semibold text-[#0B2A4A] shadow-sm">
                            <div className="w-4 h-4 bg-gray-100 rounded flex items-center justify-center shrink-0">
                                <div className="w-2.5 h-0.5 bg-[#C99A3D] rounded-full" />
                            </div>
                            Group by <ChevronDown size={16} className="text-gray-400" />
                        </button>
                        <button className="flex items-center gap-2 px-5 py-3.5 bg-white border border-gray-200 rounded-xl text-[14px] font-semibold text-[#0B2A4A] shadow-sm">
                            <Filter size={16} className="text-[#C99A3D]" /> Filter <ChevronDown size={16} className="text-gray-400" />
                        </button>
                        <button className="flex items-center gap-2 px-5 py-3.5 bg-white border border-gray-200 rounded-xl text-[14px] font-semibold text-[#0B2A4A] shadow-sm">
                            Sort by <ChevronDown size={16} className="text-gray-400" />
                        </button>
                    </div>
                </div>

                {/* Results Header */}
                <div className="flex items-center justify-between mb-4">
                    <h2 className="text-[18px] font-bold text-[#0B2A4A]">Results</h2>
                    <p className="text-[13px] text-gray-400 font-medium">120+ activities found</p>
                </div>

                {/* List of Results */}
                <div className="flex flex-col gap-4 mb-8">
                    {searchResults.map((item, idx) => (
                        <div key={idx} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-3 flex items-center gap-6 hover:shadow-md transition-shadow group">

                            {/* Image */}
                            <div className="w-[220px] h-[140px] rounded-xl overflow-hidden shrink-0 relative">
                                <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                            </div>

                            {/* Center Content */}
                            <div className="flex-1 py-1">
                                <h3 className="text-[16px] font-bold text-[#0B2A4A] mb-1.5">{item.title}</h3>

                                <div className="flex items-center gap-1.5 text-[12px] text-gray-500 mb-1.5">
                                    <MapPin size={14} className="text-[#C99A3D]" />
                                    {item.location}
                                </div>

                                <div className="flex items-center gap-1.5 text-[12px] text-gray-500 mb-3">
                                    <Star size={14} className="text-[#C99A3D]" fill="currentColor" />
                                    <span className="font-bold text-[#0B2A4A]">{item.rating}</span>
                                    <span>({item.reviews} reviews)</span>
                                </div>

                                <p className="text-[12px] text-gray-500 leading-relaxed max-w-[90%]">
                                    {item.description}
                                </p>
                            </div>

                            {/* Right Price & Button */}
                            <div className="flex flex-col items-end justify-center shrink-0 pr-4 gap-4 h-full border-l border-gray-100 pl-6">
                                <div className="text-right">
                                    <p className="text-[22px] font-bold text-[#0B2A4A] leading-none mb-1">{item.price}</p>
                                    <p className="text-[11px] text-gray-400">per person</p>
                                </div>
                                <button className="flex items-center gap-2 px-5 py-2.5 border border-[#C99A3D] rounded-lg text-[13px] font-bold text-[#0B2A4A] hover:bg-[#FFF8EB] transition-colors">
                                    View Details
                                    <ArrowRight size={14} className="text-gray-400" />
                                </button>
                            </div>

                        </div>
                    ))}
                </div>

                {/* Pagination Footer */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                    <p className="text-[13px] text-gray-500">
                        Showing 1 to 6 of 120+ results
                    </p>

                    <div className="flex items-center gap-1.5">
                        <button className="w-8 h-8 rounded-lg bg-[#0B2A4A] text-white text-[13px] font-bold flex items-center justify-center">1</button>
                        <button className="w-8 h-8 rounded-lg hover:bg-gray-100 text-gray-600 text-[13px] font-medium flex items-center justify-center transition-colors">2</button>
                        <button className="w-8 h-8 rounded-lg hover:bg-gray-100 text-gray-600 text-[13px] font-medium flex items-center justify-center transition-colors">3</button>
                        <span className="px-1 text-gray-400">...</span>
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

export default SearchResults;
