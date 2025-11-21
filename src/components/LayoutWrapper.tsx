import React, { useState } from 'react';
import { Sidebar } from './Sidebar';
import { cn } from '@/lib/utils';

export function LayoutWrapper({ children, isHomePage = false }: { children: React.ReactNode, isHomePage?: boolean }) {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    return (
        <div className="flex min-h-screen font-body">
            <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
            <main
                className={cn(
                    "flex-1 transition-all duration-300 ease-in-out relative z-30",
                    isSidebarOpen ? "md:ml-80" : "ml-0",
                    !isHomePage && "p-4 md:p-8"
                )}
            >
                <div className={cn("container mx-auto", !isHomePage && "max-w-5xl")}>
                    {children}
                </div>
            </main>
        </div >
    );
}
