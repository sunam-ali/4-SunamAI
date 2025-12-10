import { useState } from "react";
import { SettingsContext } from "../context";

export const SettingsProvider = ({ children }) => {
  const [settings, setSettings] = useState({
    model: "",
    seed: "",
    width: "1024",
    height: "1024",
    aspectRatio: "1:1",
  });

  return (
    <SettingsContext.Provider value={{ settings, setSettings }}>
      {children}
    </SettingsContext.Provider>
  );
};
