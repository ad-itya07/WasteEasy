import React from "react";
import { Material } from "@/types/MaterialData";
import { CircleCheck, CircleX, X } from "lucide-react";

interface ModalProps {
  openModal: boolean;
  setOpenModal: (state: boolean) => void;
  selectedMaterial?: Material | null;
}

const MaterialModal: React.FC<ModalProps> = ({
  openModal,
  setOpenModal,
  selectedMaterial,
}) => {
  return (
    <div
      className={`fixed inset-0 bg-black/70 z-50 flex justify-center items-center transition-transform duration-300 ${
        openModal ? "scale-100" : "scale-0"
      }`}
    >
      <div className="bg-white rounded-xl shadow-lg w-[90%] md:w-[60%] lg:w-[40%] max-h-[80%] overflow-y-auto relative">
        <button
          onClick={() => setOpenModal(false)}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 transition-colors"
        >
          <X size={30} />
        </button>

        {selectedMaterial ? (
          <div className="p-6 flex flex-col gap-4">
            <h2 className="text-2xl font-bold text-gray-800 border-b pb-2">
              {selectedMaterial.material}
            </h2>
            <div className="flex items-start gap-2">
              <CircleCheck size={24} color="green" />
              <p className="text-gray-700 text-lg font-medium">
                {selectedMaterial.merits}
              </p>
            </div>
            <div className="flex items-start gap-2">
              <CircleX size={24} color="red" />
              <p className="text-gray-700 text-lg font-medium">
                {selectedMaterial.demerits}
              </p>
            </div>
          </div>
        ) : (
          <div className="p-6 text-center text-gray-600 text-lg">
            No material selected.
          </div>
        )}
      </div>
    </div>
  );
};

export default MaterialModal;
