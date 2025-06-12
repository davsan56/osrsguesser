import { createContext, useContext } from "react";
import * as LocalStorageHelper from "../data/LocalStorageHelper";

const LocalStorageHelperContext = createContext();

export function LocalStorageHelperProvider({ children }) {
  return (
    <LocalStorageHelperContext.Provider value={LocalStorageHelper}>
      {children}
    </LocalStorageHelperContext.Provider>
  );
}

export function useLocalStorageHelper() {
  return useContext(LocalStorageHelperContext);
}
