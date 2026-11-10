"use client";

import React from "react";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { House } from "phosphor-react";
import { ChevronRightIcon } from "@heroicons/react/24/solid";

function Breadcrumb() {
  const router = useRouter();
  const pathname = usePathname();
  const pathnames = pathname.split("/").filter((x) => x);

  return (
    <div className="hidden md:block ">
      <div className=" flex md:justify-between md:flex-row flex-col md:items-center justify-start">
        <nav className="flex items-center gap-2 text-gray-500 text-sm mb-4 mt-2 ">
          <Link href="/" className="flex items-center gap-1 hover:text-primary">
            <House size={16} />
          </Link>
          {pathnames.map((name, index) => {
            const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
            const isLast = index === pathnames.length - 1;
            return (
              <span key={index} className="flex items-center gap-1">
                <span className="text-gray-300">
                  <ChevronRightIcon className="w-4 h-4" />
                </span>
                {isLast ? (
                  <span className="text-primary font-bold capitalize">
                    {name}
                  </span>
                ) : (
                  <Link href={routeTo} className="hover:text-primary capitalize">
                    {name}
                  </Link>
                )}
              </span>
            );
          })}
        </nav>
      </div>
    </div>
  );
}

export default Breadcrumb;
