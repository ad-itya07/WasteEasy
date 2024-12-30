import { materialsData } from "@/raw-data/MaterialData";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "../ui/carousel";
import { useState } from "react";
import MaterialCard from "./MaterialCard"
import MaterialModal from "./ModalWindow"

const MaterialCaousel = () => {
  const [selectedMaterial, setSelectedMaterial] = useState<Material | null>(); // State to hold the selected material
  const [openModal, setOpenModal] = useState<boolean>(false);

  const handleMaterialClick = (material: string) => {
    const fullSelectedMaterial = materialsData.find(
      (materialData) => materialData.material === material
    );
    setSelectedMaterial(fullSelectedMaterial);
    setOpenModal(true);
  };
  return (
    <>
      <Carousel className="mx-3 h-full">
        <CarouselContent className="my-5 px-5">
          {materialsData.map((material, index) => (
            <CarouselItem key={index} className="sm:basis-1/2 md:basis-1/4">
              {/* TODO: MATERIALS KA PROPER LINK DAALNA HAI */}
              <MaterialCard
                material={material.material}
                imageSrc="https://placehold.co/400x400"
                onClick={handleMaterialClick}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="size-10 bg-green-500 hover:bg-green-300" />
        <CarouselNext className="size-10 bg-green-500 hover:bg-green-300" />
      </Carousel>

      <MaterialModal
        openModal={openModal}
        setOpenModal={setOpenModal}
        selectedMaterial={selectedMaterial}
      />
    </>
  );
};

export default MaterialCaousel;
