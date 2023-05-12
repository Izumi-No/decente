import { ProductLayout } from "@/layouts/productLayout.tsx";
import {
  BiologicsMock,
  droneMock,
  featuresMock,
  harvestMock,
} from "@/mocks/productMock.ts";

export default function Home() {
  return (
    <ProductLayout
      biologics={BiologicsMock}
      drones={droneMock}
      features={featuresMock}
      harvests={harvestMock}
    />
  );
}
