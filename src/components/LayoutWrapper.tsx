import React, { useState } from 'react';
import { Sidebar } from './Sidebar';
import { cn } from '@/lib/utils';

export function LayoutWrapper({ children }: { children: React.ReactNode }) {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    return (
        <div className="flex min-h-screen bg-background font-body">
            <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
            <main
                className={cn(
                    "flex-1 transition-all duration-300 ease-in-out p-4 md:p-8 relative z-30",
                    isSidebarOpen ? "md:ml-80" : "ml-0"
                )}
            >
                <div className="container mx-auto max-w-5xl">
                    {children}
                </div>
            </main>
        </div >
    );
}
