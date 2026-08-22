import React, { useState } from 'react';

const AuthInput = ({ label, placeholder, type = 'text', icon: Icon, value, onChange, error, isEmail = false, ...props }) => {
    const [isFocused, setIsFocused] = useState(false);

    return (
        <div className="flex flex-col w-full relative z-20">
            <div
                className={`relative flex items-center bg-white rounded-xl transition-all duration-300
          border-[1.5px] overflow-hidden group
          ${isFocused ? 'border-[#cfad6f] shadow-[0_4px_15px_-5px_rgba(201,154,61,0.2)]' : 'border-[#e6e9ee] shadow-sm hover:border-[#cfad6f]'}
        `}
            >
                {/* Circular icon container */}
                <div className="pl-5 pr-3 py-3 flex items-center justify-center relative z-10">
                    <div className={`w-8 h-8 flex items-center justify-center transition-colors duration-300`}>
                        {/* The icon in the image is a thin outlined square with rounded corners? No just lock/mail */}
                        {Icon && <Icon size={20} strokeWidth={1.5} className="text-[#b99f6b]" />}
                    </div>
                </div>

                {/* Input */}
                <div className="flex-1 relative z-10">
                    <input
                        type={type}
                        value={value}
                        onChange={onChange}
                        onFocus={() => setIsFocused(true)}
                        onBlur={() => setIsFocused(false)}
                        placeholder={placeholder}
                        className="w-full py-4 pr-12 bg-transparent outline-none text-brand-navy text-[15px] font-medium placeholder-[#7a8ca1]"
                        {...props}
                    />
                </div>

                {/* Optional passport stamp decoration for email */}
                {isEmail && (
                    <div className="absolute right-4 top-1/2 transform -translate-y-1/2 opacity-30 select-none pointer-events-none w-14 h-14">
                        <svg viewBox="0 0 100 100" fill="none" className="animate-[spin_40s_linear_infinite]" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="50" cy="50" r="45" stroke="#a4864b" strokeWidth="1" strokeDasharray="3 3" />
                            <circle cx="50" cy="50" r="35" stroke="#a4864b" strokeWidth="0.5" />
                            <text x="50" y="25" textAnchor="middle" fill="#a4864b" fontSize="8" fontFamily="sans-serif" letterSpacing="1" transform="rotate(15 50 50)">GLOBETROTTER</text>
                            <text x="50" y="80" textAnchor="middle" fill="#a4864b" fontSize="7" fontFamily="sans-serif" letterSpacing="2">ARRIVED</text>
                            <path d="M40 50 L60 50 M50 40 L50 60" stroke="#a4864b" strokeWidth="1" transform="rotate(45 50 50)" />
                        </svg>
                    </div>
                )}
            </div>
            {error && <span className="text-red-500 text-xs mt-1 ml-1">{error}</span>}
        </div>
    );
};

export default AuthInput;
