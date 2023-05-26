import { Dispatch, SetStateAction } from "react";

export interface IRPSFunContext {
  choice: CHOICE;
  setChoice: Dispatch<SetStateAction<CHOICE>>;
  score: number;
  setScore: Dispatch<SetStateAction<number>>;
}

export enum CHOICE {
  PAPER = "paper",
  SCISSORS = "scissors",
  ROCK = "rock",
}
