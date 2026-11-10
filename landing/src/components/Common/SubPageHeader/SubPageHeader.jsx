"use client";

import React from 'react';
import { useRouter } from "next/navigation";
import { ArrowLeft, Home, ChevronRight } from 'lucide-react';

function SubPageHeader({ title, moduleTitle, breadcrumbs = [] }) {
  const router = useRouter();

  return (
    <div className="flex flex-col gap-[12px] w-full mb-8 mt-4">
      {/* Top Row: Module Title */}
      <div className="flex flex-row justify-between items-center w-full min-h-[32px]">
        <h2 className="text-[#212844] dark:text-white text-[24px] font-bold leading-[32px] font-lato">
          {moduleTitle || title}
        </h2>
      </div>

      {/* Bottom Row: Breadcrumb */}
      <div className="hidden md:flex items-center gap-[4px] h-[20px]">
        <Home size={16} className="text-[#9397BB]" />
        {breadcrumbs.map((crumb, index) => (
          <div key={index} className="flex items-center gap-[2px]">
            <ChevronRight size={16} className="text-[#9397BB]" />
            <span 
              className={`text-[12px] leading-[16px] font-lato transition-colors ${
                index === breadcrumbs.length - 1 
                  ? 'text-[#5B04C5] font-bold' 
                  : 'text-[#9397BB] font-normal cursor-pointer hover:text-[#5B04C5]'
              }`}
              onClick={() => crumb.path && router.push(crumb.path)}
            >
              {crumb.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SubPageHeader;
