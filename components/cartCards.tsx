import { PropsWithChildren } from "react";

export default function CartCard({ children }: PropsWithChildren) {
  return (
    <>
      <div
        className={`flex p-10 justify-center items-center rounded-md border border-black/60 hover:border-[#1d4f90] bg-[#efefef] text-black/50 hover:text-[#1d4f90]`}
      >
        {typeof children === "string" ? (
          <span className="text-2xl font-bold">{children}</span>
        ) : (
          children
        )}
      </div>
    </>
  );
}
