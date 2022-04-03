import { useContext } from "react";
import AppContext from "./Context";
const useStore = () => {
  return useContext(AppContext);
};
export { useStore };
