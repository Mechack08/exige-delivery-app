import { TypedUseSelectorHook, useSelector } from "react-redux";
import { RootState } from "./store";

export const useSelectorCustom: TypedUseSelectorHook<RootState> = (
  selectorFn
) => {
  return useSelector(selectorFn);
};
