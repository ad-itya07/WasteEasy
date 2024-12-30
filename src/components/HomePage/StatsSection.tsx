import React from "react";
import { Landmark, Cloud, Recycle, Trash2 } from "lucide-react";
import { LiaDumpsterSolid } from "react-icons/lia";
{
  /* <Trash2 /> */
}
type Props = {
  totalPoints: number | string;
  totalCO2Saved: number | string;
  wasteRecycled: number | string;
  wasteDumped: number | string;
};

const StatsSection = ({
  totalPoints = "STATIC DATA",
  totalCO2Saved = "STATIC-DATA",
  wasteRecycled = "STATIC DATA",
  wasteDumped = "STATIC DATA",
}: Props) => {
  return (
    <div className="bg-green-600 shadow-2xl p-6 shadow-black/30 rounded-lg w-full max-w-4xl mx-auto">
      <div className="flex flex-col sm:flex-row items-center justify-around gap-6 sm:gap-4 p-4 text-white">
        {/* Points Section */}
        <div className="flex flex-col justify-center items-center">
          <div className="border-2 rounded-full p-4 mb-2 bg-white/10">
            <Landmark size={32} />
          </div>
          <span className="font-semibold uppercase text-lg">{totalPoints}</span>
          <span className="uppercase text-xs opacity-70 font-semibold tracking-wider">
            Points
          </span>
        </div>

        <div className="hidden sm:block h-16 w-[2px] bg-white/40"></div>

        {/* CO2 Saved Section */}
        <div className="flex flex-col justify-center items-center">
          <div className="border-2 rounded-full p-4 mb-2 bg-white/10">
            <Cloud size={32} />
          </div>
          <span className="font-semibold uppercase text-lg">
            {totalCO2Saved},G
          </span>
          <span className="uppercase text-xs opacity-70 font-semibold tracking-wider">
            Saved CO2
          </span>
        </div>

        <div className="hidden sm:block h-16 w-[2px] bg-white/40"></div>

        {/* Waste Recycled Section */}
        <div className="flex flex-col justify-center items-center">
          <div className="border-2 rounded-full p-4 mb-2 bg-white/10">
            <Recycle size={32} />
          </div>
          <span className="font-semibold uppercase text-lg">
            {wasteRecycled}
          </span>
          <span className="uppercase text-xs opacity-70 font-semibold tracking-wider">
            Recycled
          </span>
        </div>

        <div className="hidden sm:block h-16 w-[2px] bg-white/40"></div>

        {/* Local Impact Section */}
        <div className="flex flex-col justify-center items-center">
          <div className="border-2 rounded-full p-4 mb-2 bg-white/10">
            <Trash2 size={32} />
          </div>
          <span className="font-semibold uppercase text-lg">
            {wasteDumped} Kg
          </span>
          <span className="uppercase text-xs opacity-70 font-semibold tracking-wider">
            Waste Dumped
          </span>
        </div>
      </div>
    </div>
  );
};

export default StatsSection;
