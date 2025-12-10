import { useContext } from 'react';
import { DownloadContext } from "../context";

const useDownloads = () => {
  const context = useContext(DownloadContext);
  return context
}

export default useDownloads;