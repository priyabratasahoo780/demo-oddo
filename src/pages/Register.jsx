import React, { useState } from 'react';
import { Mail, User, Plane, Lock } from 'lucide-react';
import { Link } from 'react-router-dom';
import AuthLayout from '../components/auth/AuthLayout';
import AuthInput from '../components/auth/AuthInput';
import PasswordInput from '../components/auth/PasswordInput';
import GoogleButton from '../components/auth/GoogleButton';
import AuthDivider from '../components/auth/AuthDivider';

const Register = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        username: '',
        email: '',
        password: '',
        confirmPassword: ''
    });
    const [agreeTerms, setAgreeTerms] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    const titleNode = (
        <>
            <span className="font-script text-brand-navy leading-none">Create</span>
            <span className="font-script text-brand-gold leading-none relative ml-2 text-7xl">
                Account!
                {/* Subtle underline stroke under "Account!" */}
                <svg className="absolute -bottom-4 -left-2 w-[110%] h-3 text-[#d1b375]" viewBox="0 0 100 10" preserveAspectRatio="none">
                    <path d="M0 5 Q 50 2 100 8" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" />
                </svg>
            </span>
            {/* Small airplane dotted path near title */}
            <svg className="absolute -right-8 bottom-4 w-12 h-10 overflow-visible text-[#7a8c99]" viewBox="0 0 50 30" fill="none">
                <path d="M0 25 Q 15 35 45 10" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" />
                <Plane size={15} className="text-brand-navy absolute rotate-[-15deg]" style={{ top: '-8px', left: '42px' }} fill="currentColor" />
            </svg>
        </>
    );

    const subtitleNode = (
        <>
            Join Globetrotter and start planning <br />
            <span className="text-brand-navy font-bold">unforgettable</span> journeys.
        </>
    );

    return (
        <AuthLayout title={titleNode} subtitle={subtitleNode}>
            <form onSubmit={handleSubmit} className="flex flex-col gap-5 w-full animate-fade-in relative z-20">
                <div className="flex gap-4">
                    <div className="w-1/2">
                        <AuthInput
                            placeholder="Full Name"
                            icon={User}
                            value={formData.fullName}
                            onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                            required
                        />
                    </div>
                    <div className="w-1/2">
                        <AuthInput
                            placeholder="Username"
                            icon={Lock}
                            value={formData.username}
                            onChange={(e) => setFormData({ ...formData, username: e.target.value })}
                            required
                        />
                    </div>
                </div>

                <AuthInput
                    placeholder="Email address"
                    type="email"
                    icon={Mail}
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                />

                <PasswordInput
                    placeholder="Password"
                    value={formData.password}
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                    required
                />

                <PasswordInput
                    placeholder="Confirm Password"
                    value={formData.confirmPassword}
                    onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                    required
                />

                <div className="flex items-start -mt-1 mb-1 relative z-30">
                    <label className="flex items-start space-x-2 cursor-pointer group mt-0.5">
                        <div className="relative flex items-center justify-center w-4 h-4 flex-shrink-0 mt-0.5">
                            <input
                                type="checkbox"
                                className="peer appearance-none w-4 h-4 border border-gray-300 rounded bg-white checked:bg-[#9faebc] checked:border-[#9faebc] transition-colors"
                                checked={agreeTerms}
                                onChange={(e) => setAgreeTerms(e.target.checked)}
                                required
                            />
                            <svg className="absolute w-3 h-3 text-white pointer-events-none opacity-0 peer-checked:opacity-100 transition-opacity" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                <polyline points="20 6 9 17 4 12"></polyline>
                            </svg>
                        </div>
                        <span className="text-[13px] font-medium text-[#5c6e82] leading-relaxed">
                            I agree to the <a href="#" className="text-brand-navy font-bold hover:text-brand-gold transition-colors">Terms of Service</a> and <a href="#" className="text-brand-navy font-bold hover:text-brand-gold transition-colors">Privacy Policy</a>
                        </span>
                    </label>
                </div>

                <button
                    type="submit"
                    className="relative overflow-hidden w-full bg-gradient-to-r from-[#ce9a33] to-[#e1bd61] hover:brightness-105 text-white text-lg font-medium py-3.5 rounded-xl shadow-[0_8px_20px_-6px_rgba(201,154,61,0.5)] transition-all duration-300 mt-2"
                >
                    <div className="absolute inset-0 bg-topo opacity-40 mix-blend-overlay"></div>
                    <span className="relative z-10 font-sans tracking-wide">Create Account</span>
                </button>

                <AuthDivider />

                <GoogleButton onClick={() => console.log('Google register')} />

                <div className="text-center mt-6 text-[13px] font-medium text-[#5c6e82]">
                    Already have an account?{' '}
                    <Link to="/login" className="text-[#0b2a4a] hover:text-[#a4864b] transition-colors relative">
                        Login
                        {/* Small curve under Login */}
                        <svg className="absolute -bottom-2 -left-1 w-[120%] h-[5px] text-[#c99a3d]" viewBox="0 0 100 10" preserveAspectRatio="none">
                            <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" />
                        </svg>
                    </Link>
                </div>
            </form>
        </AuthLayout>
    );
};

export default Register;
