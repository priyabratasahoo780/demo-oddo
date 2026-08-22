import React from 'react';
import { Plane } from 'lucide-react';

const AuthDivider = () => {
    return (
        <div className="relative flex flex-col items-center justify-center mt-6 mb-2">
            <div className="w-full flex items-center justify-between">
                <div className="w-[45%] h-px bg-[#e6e9ee]"></div>
                <div className="w-[45%] h-px bg-[#e6e9ee]"></div>
            </div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-[80%] bg-white px-2 mt-[-5px]">
                <Plane size={14} className="text-[#c19853] rotate-[45deg]" />
            </div>
            <span className="text-[12px] text-[#7a8ca1] mt-3">or continue with</span>
        </div>
    );
};

export default AuthDivider;
