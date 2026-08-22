import React from 'react';
import TravelBrand from './TravelBrand';
import { WatercolorEdge } from './WatercolorEdge';

const AuthLayout = ({ children, title, subtitle }) => {
    return (
        <div className="min-h-screen flex w-full bg-white relative">
            {/* LEFT SECTION (Travel Section) */}
            <div className="hidden lg:flex w-[55%] relative overflow-hidden">
                <div
                    className="absolute inset-0 bg-cover bg-left"
                    style={{ backgroundImage: "url('/src/assets/travel-bg.png')" }}
                />
                {/* Soft edge masking simulation */}
                <WatercolorEdge />
                <TravelBrand />
            </div>

            {/* RIGHT SECTION (Auth Form) */}
            <div className="flex-1 flex flex-col justify-center items-center p-8 lg:p-0 relative min-h-screen z-20 bg-white">

                {/* Mobile-only background/image */}
                <div className="lg:hidden absolute top-0 left-0 right-0 h-64 overflow-hidden pointer-events-none">
                    <div
                        className="absolute inset-0 bg-cover bg-center opacity-30"
                        style={{ backgroundImage: "url('/src/assets/travel-bg.png')" }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white"></div>
                </div>

                <div className="w-full max-w-[420px] relative z-10 px-8 py-10 lg:my-auto lg:-ml-12 2xl:-ml-24">
                    <div className="text-center mb-8 relative">
                        <h2 className="text-6xl mb-6 relative inline-flex items-center justify-center gap-3">
                            {title}
                        </h2>
                        <p className="text-[#3b4c68] text-[15px] font-medium leading-relaxed max-w-sm mx-auto">
                            {subtitle}
                        </p>
                    </div>
                    {children}
                </div>
            </div>
        </div>
    );
};

export default AuthLayout;
