import React from "react";

type Props = {
  material: string;
  imageSrc: string;
  onClick: (material: string) => void;
};

const MaterialCard = ({ material, imageSrc, onClick }: Props) => {
  return (
    <div
      onClick={() => onClick(material)}
      className="flex flex-col justify-center items-center gap-4 bg-gradient-to-r from-green-200 via-white to-green-100 shadow-xl rounded-2xl p-4 border-2 border-gray-300 hover:scale-105 transform transition-transform duration-200 ease-out cursor-pointer"
    >
      <div className="relative w-32 h-32 rounded-full overflow-hidden shadow-md border-2 border-green-400">
        <img src={imageSrc} alt={material} fill className="object-cover" />
      </div>
      <h1 className="text-xl font-semibold text-gray-800 tracking-tight">
        {material}
      </h1>
      <div className="w-full h-1 bg-green-300 rounded-full"></div>
    </div>
  );
};

export default MaterialCard;
