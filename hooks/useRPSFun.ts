import { RPSFunContext } from "context/RPSFunProvider";
import useContextOrError from "./useContextOrError";

const useRPSFunContext = () => {
  return useContextOrError(RPSFunContext);
};

export default useRPSFunContext;
