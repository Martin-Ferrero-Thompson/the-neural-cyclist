import React, { useEffect, useRef } from 'react';
import { Menu, ChevronLeft, ChevronRight, Instagram, Youtube, Facebook, Linkedin, Bike, Home, BookOpen, Activity, Utensils, Users, Coffee } from 'lucide-react';
import { cn } from '@/lib/utils';
import packageJson from '../../package.json';

interface SidebarProps {
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
}

export function Sidebar({ isOpen, setIsOpen }: SidebarProps) {
    const toggleButtonRef = useRef<HTMLButtonElement>(null);

    useEffect(() => {
        const button = toggleButtonRef.current;
        if (button) {
            const handleClick = () => {
                setIsOpen(!isOpen);
            };
            button.addEventListener('click', handleClick);
            return () => button.removeEventListener('click', handleClick);
        }
    }, [isOpen, setIsOpen]);

    return (
        <>
            {/* Mobile Toggle */}
            <button
                className="fixed top-4 left-4 z-50 p-2 bg-primary text-primary-foreground rounded-md md:hidden"
                onClick={() => setIsOpen(!isOpen)}
            >
                {isOpen ? <ChevronLeft size={20} /> : <Menu size={20} />}
            </button>

            {/* Desktop Toggle Button - Vertically Centered, moves with sidebar state */}
            <button
                ref={toggleButtonRef}
                className={cn(
                    "hidden md:flex fixed top-1/2 -translate-y-1/2 z-50 items-center justify-center",
                    "w-8 h-16 lg:w-10 lg:h-20 xl:w-12 xl:h-24 bg-slate-800 hover:bg-slate-700 border border-slate-700",
                    "text-slate-300 hover:text-white transition-all duration-300 ease-in-out",
                    "rounded-r-lg shadow-lg group cursor-pointer",
                    isOpen ? "left-80" : "left-0"
                )}
                aria-label={isOpen ? "Close sidebar" : "Open sidebar"}
            >
                {isOpen ? (
                    <ChevronLeft size={20} strokeWidth={3.5} className="lg:w-6 lg:h-6 xl:w-7 xl:h-7 transition-transform group-hover:scale-110 pointer-events-none" />
                ) : (
                    <ChevronRight size={20} strokeWidth={3.5} className="lg:w-6 lg:h-6 xl:w-7 xl:h-7 transition-transform group-hover:scale-110 pointer-events-none" />
                )}
            </button>

            <aside
                className={cn(
                    "fixed top-0 left-0 z-40 h-screen bg-slate-900 border-r border-slate-800 w-80 flex flex-col transition-all duration-300 ease-in-out",
                    isOpen ? "translate-x-0" : "-translate-x-full"
                )}
            >
                <div className="h-full px-3 py-4 overflow-y-auto flex flex-col">
                    <div className="flex justify-center items-start mb-8 px-2">
                        <div className="flex flex-col items-center gap-4 flex-1">
                            <span className="text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-headline font-bold text-center text-white">The Neural Cyclist</span>
                            <img src="/LogoGBSCirculo.svg" alt="The Neural Cyclist Logo" className="w-30 h-30" />
                        </div>
                    </div>

                    {/* Navigation */}
                    <ul className="space-y-2 font-medium">
                        <li>
                            <a href="/" className="flex items-center p-2 text-slate-300 rounded-lg hover:bg-slate-800 hover:text-white group">
                                <Home className="w-5 h-5 text-slate-400 transition duration-75 group-hover:text-white" />
                                <span className="ms-3 text-lg lg:text-xl xl:text-2xl">Home</span>
                            </a>
                        </li>
                        <li>
                            <a href="/blog" className="flex items-center p-2 text-slate-300 rounded-lg hover:bg-slate-800 hover:text-white group">
                                <BookOpen className="w-5 h-5 text-slate-400 transition duration-75 group-hover:text-white" />
                                <span className="ms-3 text-lg lg:text-xl xl:text-2xl">Blog</span>
                            </a>
                        </li>
                        {/* Categories */}
                        <li className="pt-4 pb-2">
                            <span className="px-2 text-sm lg:text-base xl:text-lg font-semibold text-slate-500 uppercase tracking-wider">Categories</span>
                        </li>
                        <li>
                            <a href="/blog/category/my-challenge" className="flex items-center p-2 text-slate-300 rounded-lg hover:bg-slate-800 hover:text-white group">
                                <Activity className="w-5 h-5 text-brand-blue" />
                                <span className="ms-3 text-lg lg:text-xl xl:text-2xl">My Challenge</span>
                            </a>
                        </li>
                        <li>
                            <a href="/blog/category/my-training" className="flex items-center p-2 text-slate-300 rounded-lg hover:bg-slate-800 hover:text-white group">
                                <Bike className="w-5 h-5 text-brand-teal" />
                                <span className="ms-3 text-lg lg:text-xl xl:text-2xl">My Training</span>
                            </a>
                        </li>
                        <li>
                            <a href="/blog/category/my-gear" className="flex items-center p-2 text-slate-300 rounded-lg hover:bg-slate-800 hover:text-white group">
                                <Activity className="w-5 h-5 text-orange-500" />
                                <span className="ms-3 text-lg lg:text-xl xl:text-2xl">My Gear</span>
                            </a>
                        </li>
                        <li>
                            <a href="/blog/category/my-nutrition" className="flex items-center p-2 text-slate-300 rounded-lg hover:bg-slate-800 hover:text-white group">
                                <Utensils className="w-5 h-5 text-green-500" />
                                <span className="ms-3 text-lg lg:text-xl xl:text-2xl">My Nutrition</span>
                            </a>
                        </li>
                        <li>
                            <a href="/blog/category/partners" className="flex items-center p-2 text-slate-300 rounded-lg hover:bg-slate-800 hover:text-white group">
                                <Users className="w-5 h-5 text-purple-500" />
                                <span className="ms-3 text-lg lg:text-xl xl:text-2xl">Partners</span>
                            </a>
                        </li>
                    </ul>

                    {/* Support CTA */}
                    <div className="mt-auto pt-6 border-t border-slate-800">
                        <a
                            href="https://ko-fi.com/riding4gbs"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center gap-2 w-full px-4 py-3 mb-6 bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white font-semibold rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105 group"
                        >
                            <Coffee className="w-5 h-5 transition-transform group-hover:rotate-12" />
                            <span className="text-base lg:text-lg xl:text-xl">Support My Effort</span>
                        </a>
                    </div>

                    {/* Socials */}
                    <div className="pt-6 border-t border-slate-800">
                        <h3 className="px-2 text-base lg:text-lg xl:text-xl font-semibold text-slate-500 uppercase tracking-wider mb-4">Follow Me</h3>
                        <div className="flex space-x-4 px-2">
                            <a href="#" className="text-slate-400 hover:text-brand-blue"><Facebook size={20} /></a>
                            <a href="https://www.instagram.com/riding4gbs/" className="text-slate-400 hover:text-pink-600" target="_blank" rel="noopener noreferrer"><Instagram size={20} /></a>
                            <a href="#" className="text-slate-400 hover:text-red-600"><Youtube size={20} /></a>
                            <a href="#" className="text-slate-400 hover:text-blue-700"><Linkedin size={20} /></a>
                            <a href="https://www.strava.com/athletes/180569524" className="text-slate-400 hover:text-orange-500" target="_blank" rel="noopener noreferrer" aria-label="Strava">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 16 16" fill="currentColor">
                                    <path d="M6.731 0 2 9.125h2.788L6.73 5.497l1.93 3.628h2.766zm4.694 9.125-1.372 2.756L8.66 9.125H6.547L10.053 16l3.484-6.875z" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* Footer */}
                    <div className="mt-6 px-2 text-sm lg:text-base xl:text-lg text-slate-600">
                        <p>&copy; 2025 The Neural Cyclist.</p>
                        <p className="text-xs lg:text-sm xl:text-base mt-1">v{packageJson.version} | All rights reserved.</p>
                    </div>
                </div>
            </aside>
        </>
    );
}
