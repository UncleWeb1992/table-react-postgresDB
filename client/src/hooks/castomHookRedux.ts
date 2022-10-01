import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/createStore";
import { AppDispatch } from "../store/createStore";

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
