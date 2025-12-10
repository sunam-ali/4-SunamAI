import { useContext } from "react";
import { SettingsContext } from "../context";

const useSettings = () => {
  const context = useContext(SettingsContext);
  return context;
};

export default useSettings;
