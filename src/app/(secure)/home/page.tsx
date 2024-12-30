"use client";
import React, { useEffect, useState } from "react";
import { ApiResponse } from "@/types/UserApiResponse";

import Contact from "@/components/contact";
import SpinLoading from "@/components/SpinLoading";
import StatsSection from "@/components/HomePage/StatsSection";
import UserSection from "@/components/HomePage/UserSection";
import MaterialCaousel from "@/components/HomePage/MaterialCaousel";

const Page = () => {
  const [user, setUserData] = useState<ApiResponse | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  // TODO: fetch user and its details (i.e location) and then fetch other details like CO2 saved, waste dumped etc

  return (
    <section className="flex flex-col gap-3 pt-2 m-10">
      {loading ? (
        <div className="min-h-screen flex justify-center items-center">
          <SpinLoading />
        </div>
      ) : (
        <>
          <section className=" p-2 flex flex-col gap-8 relative">
            {/* TODO: User details KO ISME PASS KRNA HAI, USER DETAILS WILL BE TAKEN FROM DB */}
            <UserSection />

            {/* Candidate Extra details */}
            {/* TODO: STATS SECTION ME USER STATS FROM DB PASS KRNA HAI */}
            <StatsSection /> 
            
            {/* MATERIALS INFO */}
            <div className="flex flex-col gap-3 ">
              <div className="flex justify-between items-center p-4 shadow-md border border-gray-300 rounded-2xl">
                <h1 className="font-bold text-3xl text-green-800 tracking-wider uppercase">
                  Materials
                </h1>
                <div className="h-1 w-20 bg-green-800 rounded-full hidden sm:block"></div>
              </div>

              <MaterialCaousel />
            </div>
            <Contact />
          </section>
        </>
      )}  
    </section>
  );
};
export default Page;
