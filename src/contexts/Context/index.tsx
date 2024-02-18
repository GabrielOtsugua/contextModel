import { ReactNode, createContext, useState } from "react";

interface ContextProps {
  color: string;
  changeColor: (color: string) => void;
}

export const Context = createContext({} as ContextProps);

interface ChildrenType {
  children: ReactNode;
}

export const ContextProvider = ({ children }: ChildrenType) => {
  const [color, setColor] = useState("red");

  const changeColor = (color: string) => {
    setColor(color);
  };

  return (
    <Context.Provider value={{ color, changeColor }}>
      {children}
    </Context.Provider>
  );
};
