"use client";

import { createStore } from "./";
import { Provider } from "react-redux";
import { type InitialState } from "@/shared/types";
import { type FC, type ReactNode } from "react";

interface Props {
  children: ReactNode;
  initialState: InitialState;
}

export const StoreProvider: FC<Props> = ({ children, initialState }) => {
  const store = createStore(initialState);
  console.log(store);
  return <Provider store={store}>{children}</Provider>;
};
