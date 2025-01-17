"use client";

import React from "react";
import { ThemeProvider } from "next-themes";

function Providers({ children }) {
  return (
    <>
      <ThemeProvider 
        defaultTheme="system" 
        attribute="class"
        disableTransitionOnChange={true}
        >
        {/* Wrapper div for consistent dark and light theme styling */}
        <div className="text-gray-700 dark:text-gray-200 dark:bg-gray-700 min-h-screen select-none transition-colors duration-300">
          {children}
        </div>
      </ThemeProvider>
    </>
  );
}

export default Providers;
