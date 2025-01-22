'use client'
import { sidebarLinks } from "@/constants";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React from "react";

const LeftSidebar = () => {

  const pathname = usePathname();
  const router = useRouter();
  return (
    <div>
      <section className="left_sidebar">
        <nav className="flex flex-col gap-6">
          <Link
            href="/"
            className="cursor-pointer flex gap-1 items-center pb-10 max-lg:justify-center"
          >
            <Image
              src="/icons/logo (1).svg"
              alt="logo"
              width={23}
              height={27}
            />
            <h1 className="text-24 font-extrabold text-white-1 max-lg:hidden">
              Podcaster
            </h1>
          </Link>
          {sidebarLinks.map(({ route, label,imgURL }) => {
            const isActive = pathname === route || pathname.startsWith(`${route}/`)
            return (
              <Link href={route} key={label} className={cn("flex gap-3 items-center py-4 max-lg:px-4 justify-center lg:justify-start", {'bg-nav-focus border-r-4 border-orange-1': isActive})}>
                <Image src={imgURL} alt={label} width={24} height={24}/>
                <p>{label}</p>
              </Link>
            );
          })}
        </nav>
      </section>
    </div>
  );
};

export default LeftSidebar;
