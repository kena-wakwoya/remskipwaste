import React from "react";
import type { HeaderProps } from "../types/allTypes";
export const Header = ({ steps }:HeaderProps) => {
  return (
    <header className="w-full max-w-7xl bg-gray-800 rounded-xl p-4 mb-8 shadow-lg">
      <nav className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8">
        {steps.map((step) => (
          <div key={step.name} className={`flex items-center text-sm font-medium ${step.current ? 'text-blue-400' : 'text-gray-400'}`}>
            {React.createElement(step.icon, {
              className: `w-5 h-5 mr-2 ${step.current ? 'text-blue-500' : 'text-gray-500'}`
            })}
            <span className="hidden sm:inline">{step.name}</span>
          </div>
        ))}
      </nav>
    </header>
  );
}