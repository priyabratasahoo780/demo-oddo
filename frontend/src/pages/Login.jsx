import React, { useState } from 'react';
import { Mail, Plane } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import AuthLayout from '../components/auth/AuthLayout';
import AuthInput from '../components/auth/AuthInput';
import PasswordInput from '../components/auth/PasswordInput';
import GoogleButton from '../components/auth/GoogleButton';
import AuthDivider from '../components/auth/AuthDivider';

const Login = () => {
    const [formData, setFormData] = useState({ email: '', password: '' });
    const [rememberMe, setRememberMe] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate('/dashboard');
    };

    const titleNode = (
        <div className="flex items-center justify-center gap-3">
            <span className="font-script text-[4.5rem] text-[#0b2a4a] leading-none">Welcome</span>
            <span className="font-script text-[4.5rem] text-[#c99a3d] leading-none relative transform translate-y-1">
                Back!
                {/* Subtle underline stroke under "Back!" */}
                <svg className="absolute -bottom-3 left-0 w-full h-2 text-[#d1b375] opacity-80" viewBox="0 0 100 10" preserveAspectRatio="none">
                    <path d="M0 5 Q 50 2 100 8" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" />
                </svg>
            </span>
            {/* Small airplane dotted path near title */}
            <svg className="absolute -right-10 bottom-6 w-12 h-10 overflow-visible text-[#7a8c99]" viewBox="0 0 50 30" fill="none">
                <path d="M0 25 Q 15 35 45 10" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" />
                <Plane size={14} className="text-[#0b2a4a] absolute rotate-[-15deg]" style={{ top: '-8px', left: '42px' }} fill="currentColor" />
            </svg>
        </div>
    );

    const subtitleNode = (
        <>
            Login to continue your journey <br />
            and <span className="text-brand-navy font-bold">explore</span> the world with us.
        </>
    );

    return (
        <AuthLayout title={titleNode} subtitle={subtitleNode}>
            <form onSubmit={handleSubmit} className="flex flex-col gap-5 w-full animate-fade-in relative z-20">
                <AuthInput
                    placeholder="Email address"
                    type="email"
                    icon={Mail}
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    isEmail
                />

                <PasswordInput
                    placeholder="Password"
                    value={formData.password}
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                    required
                />

                <div className="flex items-center justify-between -mt-1 mb-1 relative z-30">
                    <label className="flex items-center space-x-2 cursor-pointer group">
                        <div className="relative flex items-center justify-center w-4 h-4">
                            <input
                                type="checkbox"
                                className="peer appearance-none w-4 h-4 border border-gray-300 rounded bg-white checked:bg-[#9faebc] checked:border-[#9faebc] transition-colors"
                                checked={rememberMe}
                                onChange={(e) => setRememberMe(e.target.checked)}
                            />
                            <svg className="absolute w-3 h-3 text-white pointer-events-none opacity-0 peer-checked:opacity-100 transition-opacity" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                <polyline points="20 6 9 17 4 12"></polyline>
                            </svg>
                        </div>
                        <span className="text-[13px] font-medium text-[#5c6e82]">Remember me</span>
                    </label>
                    <a href="#" className="text-[13px] font-medium text-brand-navy hover:text-brand-gold transition-colors">
                        Forgot Password?
                    </a>
                </div>

                <button
                    type="submit"
                    className="relative overflow-hidden w-full bg-gradient-to-r from-[#ce9a33] to-[#e1bd61] hover:brightness-105 text-white text-lg font-medium py-[14px] rounded-xl shadow-[0_8px_15px_-5px_rgba(201,154,61,0.4)] transition-all duration-300 mt-2"
                >
                    <div className="absolute inset-0 bg-topo opacity-30 mix-blend-overlay"></div>
                    <span className="relative z-10 font-sans tracking-wide">Login</span>
                </button>

                <AuthDivider />

                <GoogleButton onClick={() => console.log('Google login')} />

                <div className="text-center mt-6 text-[13px] font-medium text-[#5c6e82]">
                    Don't have an account?{' '}
                    <Link to="/register" className="text-[#a4864b] hover:text-brand-navy transition-colors">
                        Create Account
                    </Link>
                    <div className="mx-auto w-10 h-0.5 mt-1 bg-brand-light-gold rounded-full opacity-60"></div>
                </div>
            </form>
        </AuthLayout>
    );
};

export default Login;
