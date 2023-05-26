import { createContext, PropsWithChildren, useState } from "react";
import { CHOICE, IRPSFunContext } from "./types";

export const RPSFunContext = createContext<IRPSFunContext | null>(null);

const RPSFunProvider = (props: PropsWithChildren<{}>) => {
  const [choice, setChoice] = useState<CHOICE>(CHOICE.ROCK);
  const [score, setScore] = useState<number>(0);

  return (
    <RPSFunContext.Provider
      value={{
        choice,
        setChoice,
        score,
        setScore,
      }}
    >
      {props.children}
    </RPSFunContext.Provider>
  );
};

export default RPSFunProvider;
