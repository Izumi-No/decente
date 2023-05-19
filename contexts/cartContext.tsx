import { PropsWithChildren, createContext } from "react";

export const cartContext = createContext({});

export function CartContextProvider({ children }: PropsWithChildren) {
  return <cartContext.Provider value={{}}>{children}</cartContext.Provider>;
}
