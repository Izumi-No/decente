export function DroneCard({
  src,
  description,
}: {
  src: string;
  description: string;
}) {
  return (
    <div className="text-center">
      <div className="flex flex-col justify-center items-center ">
        <img src={src} className="" alt="" className="w-[170px]" />
      </div>
      <p className="text-md text-white">{description}</p>
    </div>
  );
}
