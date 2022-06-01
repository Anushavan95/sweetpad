import { TypedUseSelectorHook, useSelector } from "react-redux";
import { RootState } from "../store";
// const { balanceCount } = useTypedSelector((state) => state.socials);
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
