"use client";
import React from "react";
import { File, Home, MapPin, Scan, Ticket, User } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

function Navbar() {
  const pathname = usePathname();
  if (
    pathname === "/login" ||
    pathname === "/register" ||
    pathname === "/forgot-password" ||
    pathname === "/verify-register" ||
    pathname === "/verify-forget-password"
  ) {
    return null;
  }
  return (
    <>
      <nav className="z-50 m-auto max-w-[800px] md:max-w-full left-0 right-0 bg-white w-full top-0">
        <div className="flex flex-row justify-between items-center p-4 gap-3 bg-white shadow-md shadow-black w-full">
          <div>
            <span className="text-3xl font-bold mb-6 text-gray-800 tracking-tight">
              Waste <span className="text-green-600">Easy</span>
            </span>
          </div>
          <div className="flex gap-8 items-center">
            <Link
              href={"/home"}
              className="flex justify-center items-center gap-1 flex-col"
            >
              <Home size={32} />
              <span className="text-xs font-medium opacity-70">Home</span>
            </Link>
            <Link
              href={"/location"}
              className="flex justify-center gap-1 items-center flex-col"
            >
              <MapPin size={32} />
              <span className="text-xs font-medium opacity-70">
                Bin Station
              </span>
            </Link>
            <Link
              href={"/upload-waste"}
              className="flex justify-center gap-1 items-center flex-col"
            >
              <File size={30} />
              <span className="text-xs font-medium opacity-70">Upload Image</span>
            </Link>

            <Link
              href={"/coupons"}
              className="flex justify-center gap-1 items-center flex-col"
            >
              <Ticket size={32} />
              <span className="text-xs font-medium opacity-70">Coupons</span>
            </Link>
            <Link
              href={"/profile"}
              className="flex justify gap-1 items-center flex-col"
            >
              <User size={32} />
              <span className="text-xs font-medium opacity-70">Profile</span>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
