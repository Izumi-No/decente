export function Feature({
  src,
  description,
}: {
  src: string;
  description: string;
}) {
  return (
    <div className=" w-24 text-center">
      <div className=" h-1/2 flex flex-col justify-center items-center">
        <img src={src} alt="" className="object-cover" />
      </div>
      <p className="text-md text-black">{description}</p>
    </div>
  );
}
