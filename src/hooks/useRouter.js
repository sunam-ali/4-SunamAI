import { useContext } from "react";
import { RouterContext } from "../context";

const useRouter = () => {
  const context = useContext(RouterContext);
  return context;
};

export default useRouter;
