import React, { useState } from 'react';
import { Eye, EyeOff, Lock } from 'lucide-react';
import AuthInput from './AuthInput';

const PasswordInput = ({ label, placeholder = 'Password', value, onChange, error }) => {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <div className="relative w-full z-20">
            <AuthInput
                label={label}
                placeholder={placeholder}
                type={showPassword ? 'text' : 'password'}
                icon={Lock}
                value={value}
                onChange={onChange}
                error={error}
            />
            <button
                type="button"
                onMouseDown={(e) => e.preventDefault()} // prevent focus loss
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-5 top-1/2 transform -translate-y-1/2 text-[#7a8ca1] hover:text-brand-navy transition-colors z-20"
            >
                {showPassword ? <EyeOff size={20} strokeWidth={1.5} /> : <Eye size={20} strokeWidth={1.5} />}
            </button>
        </div>
    );
};

export default PasswordInput;
