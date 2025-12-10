import { useState } from "react";
import { RouterContext } from "../context";

export const RouterProvider = ({ children }) => {
  const [currentRoute, setCurrentRoute] = useState("create");
  return (
    <RouterContext.Provider value={{ currentRoute, setCurrentRoute }}>
      {children}
    </RouterContext.Provider>
  );
};
