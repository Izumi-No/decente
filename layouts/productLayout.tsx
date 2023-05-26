import { HarvestCard } from "../components/HarvestCard.tsx";
import { BiologicCard } from "../components/BiologicCard.tsx";
import { DroneCard } from "../components/DroneCard.tsx";
import { Feature } from "../components/Feature.tsx";
import { CardHashMap } from "@/types/cardHashMap.ts";
import CartCard from "@/components/cartCards.tsx";

export function ProductLayout({
  features,
  drones,
  harvests,
  biologics,
  texts,
  images,
}: ProductLayout.Props) {
  return (
    <div>
      <div className="flex flex-col justify-center w-full h-20 bg-[#1d4f90] pl-20">
        <h1 className="text-xl">bioBOT</h1>
        <p className="text-sm text-blue-300">Liberador de insumos biológicos</p>
      </div>
      <div>
        <div className="grid grid-cols-3">
          <div className="w-full h-full col-span-2">
            <div className="flex flex-col justify-center gap-4 w-full py-16 bg-[#efefef] pl-20 pr-20">
              <div className="">
                <p className="text-black">{texts[0]}</p>
              </div>
              <div className="flex justify-center w-full ">
                <img src={images[0]} />
              </div>
              <div className="flex flex-col gap-3">
                <h2 className="text-2xl text-[#ef7622] ">Destaques</h2>
                <div className="flex gap-3 ">
                  {features.map((feature, index) => (
                    <Feature
                      key={index}
                      src={feature.image}
                      description={feature.name}
                    />
                  ))}
                </div>
              </div>
            </div>
            <div className="flex flex-col  w-full  bg-[#1d4f90] pl-20 pr-20 py-6 gap-6">
              <h2 className="text-2xl text-600 text-blue-300">
                Drones Compatíveis
              </h2>
              <div className="flex items-center justify-start w-full gap-4">
                {drones.map((drone, index) => (
                  <DroneCard
                    key={index}
                    src={drone.image}
                    description={drone.name}
                  />
                ))}
              </div>
            </div>
            <div className="flex flex-col  w-full  bg-[#efefef] pl-20 pr-20 py-6 gap-6">
              <h2 className="text-[#ef7622] text-2xl text-600">
                Safras Beneficiadas
              </h2>
              <div className="flex gap-4 flex-wrap">
                {harvests.map((harvest, index) => (
                  <HarvestCard
                    key={index}
                    src={harvest.image}
                    name={harvest.name}
                  />
                ))}
              </div>
            </div>
            <div className="flex flex-col  w-full  bg-[#1d4f90] pl-20 pr-20 py-6 gap-6">
              <h2 className="text-2xl text-600">Biológicos</h2>
              <div className="flex gap-4 flex-wrap">
                {biologics.map((biologic, index) => (
                  <BiologicCard
                    key={index}
                    src={biologic.image}
                    name={biologic.name}
                  />
                ))}
              </div>
            </div>
            <div className="flex flex-col items-center justify-center w-full py-20 bg-[#efefef] pl-20 pr-20 pt-7 gap-6 relative">
              <div className="absolute top-0 right-[ calc(50% - 5rem) ] w-20 h-4 rounded-full bg-[#1d4f90] mt-2"></div>

              <h2 className="text-3xl  text-[#1d4f90]">{texts[1]}</h2>
              <img src={images[1]} />
            </div>
          </div>
          <div className="flex flex-col  items-center bg-[#efefef] px-16 pt-8 h-full w-full col-auto">
            <div className="flex flex-col items-center sticky top-4 w-full   h-[750px] ">
              <div>
                <h2 className="text-md text-600 text-black">
                  Incluídos por padrão:
                </h2>
                <div className="flex flex-col items-center justify-center">
                  <CartCard>BioCot</CartCard>
                  <span className="text-black/50">+</span>
                  <CartCard>BioCot</CartCard>
                </div>
              </div>
              <div></div>
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export namespace ProductLayout {
  export type Props = {
    features: CardHashMap;
    drones: CardHashMap;
    harvests: CardHashMap;
    biologics: CardHashMap;
    texts: string[];
    images: string[];
  };
}
