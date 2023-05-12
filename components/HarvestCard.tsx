export function HarvestCard({ src, name }: { src: string; name: string }) {
  return (
    <div className="flex flex-col justify-between items-center p-3 bg-slate-300 rounded-sm w-36 h-36 text-center ">
      <img src={src} alt="" className=" h-full " />
      <p className="text-md font-bold text-slate-800">{name}</p>
    </div>
  );
}
