import React from 'react';
import { Plane } from 'lucide-react';

const TravelBrand = () => {
    return (
        <div className="flex flex-col h-full justify-center px-12 py-10 relative z-10 w-full max-w-lg mx-auto">

            {/* Decorative dashed path at top-left corner */}
            <svg className="absolute top-16 left-2 w-48 h-48 text-[#dcae5b] opacity-80" viewBox="0 0 100 100" fill="none">
                <path d="M15,95 Q5,50 85,25" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" />
                <Plane size={18} className="text-[#c19853] absolute rotate-[45deg]" style={{ top: '8px', left: '71px', position: 'absolute' }} fill="currentColor" />
            </svg>

            <div className="mb-[20%] mt-8 relative text-left ml-[20%]">
                <div className="flex items-end inline-block relative -left-8">
                    <h1 className="font-script text-[6.5rem] text-[#c19853] leading-none mb-0 tracking-tight">
                        Globetrotter
                    </h1>
                    {/* Blue airplane that is painted at the end of the script logo */}
                    <Plane size={32} className="text-[#6484a8] relative -top-3 -rotate-12" strokeWidth={1.5} fill="currentColor" />
                    <svg className="absolute top-10 -right-2 w-10 h-10 text-[#6484a8] opacity-70 flex-none" viewBox="0 0 100 100">
                        <path d="M0 50 Q 50 -10 100 0" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 4" fill="none" />
                    </svg>
                </div>

                <p className="tracking-[0.8em] text-[#0b2a4a] font-medium text-[16px] mt-2 relative left-6">
                    T R A V E L
                </p>

                {/* Soft brush-like gold line below TRAVEL */}
                <div className="w-[100px] h-[2px] bg-[#c99a3d] mt-6 ml-[15%] rounded-full opacity-80"></div>
            </div>

            <div className="mt-2 relative text-left ml-[20%] mb-[10%]">
                <span className="text-[5rem] font-serif text-[#c99a3d] absolute top-[-1.5rem] -left-12 leading-none">“</span>
                <div className="relative z-10">
                    <h2 className="text-[20px] text-[#0b2a4a] font-medium leading-[1.6]">
                        The world is open. <br />
                        It's time to <br />
                        <span className="font-script text-[44px] text-[#c99a3d] relative -left-1 opacity-90 inline-block mt-1">
                            explore.
                            {/* Blue underline below explore */}
                            <svg className="absolute bottom-2 -left-2 w-[110%] h-[5px] text-[#0b2a4a]" viewBox="0 0 100 10" preserveAspectRatio="none">
                                <path d="M0 5 Q 50 10 100 2" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" />
                            </svg>
                        </span>
                    </h2>
                </div>
            </div>

            {/* Globe decoration at bottom */}
            <div className="absolute -bottom-32 left-1/2 transform -translate-x-1/2 w-[420px] h-[420px] z-0 opacity-80">
                <div className="w-full h-full rounded-full border border-gray-200/50 bg-white/20 backdrop-blur-[2px] relative overflow-hidden flex items-center justify-center p-8">
                    <div className="w-full h-full rounded-full border-[1.5px] border-dashed border-[#dcae5b] relative flex items-center justify-center bg-blue-50/30">
                        <div
                            className="w-[95%] h-[95%] rounded-full mix-blend-multiply opacity-50"
                            style={{
                                background: 'repeating-radial-gradient(circle at center, rgba(11,42,74,0.1) 0, rgba(11,42,74,0.15) 1px, transparent 1px, transparent 15px)',
                            }}
                        ></div>
                        {/* Location pin */}
                        <div className="absolute top-[25%] right-[35%] text-[#dcae5b]">
                            <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TravelBrand;
