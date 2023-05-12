export function BiologicCard({ src, name }: { src: string; name: string }) {
  return (
    <div className="flex justify-between items-center px-5  rounded-sm w-50 h-16 bg-white">
      <img src={src} alt="" className="h-full" />
      <p className="text-md  text-black">{name}</p>
    </div>
  );
}
