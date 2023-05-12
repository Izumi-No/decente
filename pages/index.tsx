import Image from "next/image";
import { Inter } from "next/font/google";
import { HarvestCard } from "../components/HarvestCard.tsx";
import { BiologicCard } from "../components/BiologicCard.tsx";
import { DroneCard } from "../components/DroneCard.tsx";
import { Feature } from "../components/Feature.tsx";

const inter = Inter({ subsets: ["latin"] });

const BiologicsMock = [
  {
    name: "Telenomus",
    image: "icons/nsei.png",
  },
  {
    name: "Trichogramma",
    image: "icons/bicho4.png",
  },

  {
    name: "Chrisopideos",
    image: "icons/bicho1.png",
  },
  {
    name: "Amblyseius",
    image: "icons/bicho4.png",
  },
  {
    name: "cortesia",
    image: "icons/bicho3.png",
  },
];

const harvestMock = [
  {
    name: "Soja",
    image: "icons/soja.png",
  },
  {
    name: "Milho",
    image: "icons/milho.png",
  },
  {
    name: "Abacate",
    image: "icons/abacate.png",
  },
  {
    name: "Café",
    image: "icons/cafe.png",
  },
  {
    name: "Cana",
    image: "icons/cana.png",
  },

  {
    name: "Banana",
    image: "icons/banana.png",
  },
  {
    name: "feijão",
    image: "icons/feijao.png",
  },
  {
    name: "Óleo de Palma",
    image: "icons/palma.png",
  },
];
/*
description="DJI - Matrice 30
Series"
                src="https://flybiohub-beta-310621.rj.r.appspot.com/static/media/product_hardware_bioBOT.12542f7e.png"
*/

const droneMock = [
  {
    name: "DJI - Matrice 30 Series",
    image:
      "https://flybiohub-beta-310621.rj.r.appspot.com/static/media/product_hardware_bioBOT.12542f7e.png",
  },
  {
    name: "DJI - Matrice 30 Series",
    image:
      "https://flybiohub-beta-310621.rj.r.appspot.com/static/media/product_hardware_bioBOT.12542f7e.png",
  },
  {
    name: "DJI - Matrice 30 Series",
    image:
      "https://flybiohub-beta-310621.rj.r.appspot.com/static/media/product_hardware_bioBOT.12542f7e.png",
  },
  {
    name: "DJI - Matrice 30 Series",
    image:
      "https://flybiohub-beta-310621.rj.r.appspot.com/static/media/product_hardware_bioBOT.12542f7e.png",
  },
  {
    name: "DJI - Matrice 30 Series",
    image:
      "https://flybiohub-beta-310621.rj.r.appspot.com/static/media/product_hardware_bioBOT.12542f7e.png",
  },
];

const featuresMock = [
  {
    name: "Funciona com o bioMAP",
    image:
      "data:image/png;base64,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",
  },
  {
    name: "À prova de intempéries",
    image:
      "data:image/png;base64,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",
  },
  {
    name: "+5 horas de autonomia",
    image:
      "data:image/png;base64,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",
  },
];

export default function Home() {
  return (
    <div className="">
      <div className="flex flex-col justify-center w-full h-20 bg-[#1d4f90] pl-20">
        <h1 className="text-xl">bioBOT</h1>
        <p className="text-sm text-blue-300">Liberador de insumos biológicos</p>
      </div>
      <div>
        <div className="grid grid-cols-3">
          <div className="w-full h-full col-span-2">
            <div className="flex flex-col justify-center gap-4 w-full py-16 bg-[#efefef] pl-20 pr-20">
              <div className="">
                <p className="text-black">
                  É um parasita em massa e liberador de ovos, usado
                  principalmente para o controle de pragas. Com ele é possível
                  lançar insumos biológicos como Trichogramma, Telenomus e
                  Chrysopa (todos testados e em operação comercial com DRONES no
                  Brasil, Colômbia e América Central).
                </p>
              </div>
              <div className="flex justify-center w-full ">
                <img src="drone.jpeg" />
              </div>
              <div className="flex flex-col gap-">
                <h2 className="text-2xl text-[#ef7622] ">Destaques</h2>
                <div className="flex gap-3 ">
                  {featuresMock.map((feature, index) => (
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
                {droneMock.map((drone, index) => (
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
                {harvestMock.map((harvest, index) => (
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
                {BiologicsMock.map((biologic, index) => (
                  <BiologicCard
                    key={index}
                    src={biologic.image}
                    name={biologic.name}
                  />
                ))}
              </div>
            </div>
            <div className="flex flex-col items-center justify-centerw-full py-20 bg-[#efefef] pl-20 pr-20 pt-7 gap-6 relative">
              <div className="absolute top-0 right-[ calc(50% - 5rem)] w-20 h-4 rounded-full bg-[#1d4f90] mt-2"></div>

              <h2 className="text-3xl  text-[#1d4f90]">
                Como Funciona o bioBOT ?
              </h2>
              <img src="drone.jpeg" />
            </div>
          </div>
          <div className="flex flex-col justify-center items-center bg-[#efefef] h-full w-full col-auto"></div>
        </div>
      </div>
      <div className="w-full h-[50vh] bg-[#1d4f90]"></div>
    </div>
  );
}
