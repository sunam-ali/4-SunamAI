import Header from "./components/Header";
import useRouter from "./hooks/useRouter";
import CreatePage from "./pages/CreatePage";
import DownloadPage from "./pages/DownloadPage";
import NotFound from "./pages/NotFoundPage";
import { DownloadProvider } from "./providers/DownloadsProvider";
import { ImageProvider } from "./providers/ImageProvider";
import { RouterProvider } from "./providers/RouterProvider";
import { SettingsProvider } from "./providers/SettingsProvider";

function App() {
  const Page = () => {
    const { currentRoute } = useRouter();
    switch (currentRoute) {
      case "create":
        return <CreatePage />;
      case "downloaded":
        return <DownloadPage />;
      default:
        return <NotFound />;
    }
  };

  return (
    <DownloadProvider>
      <SettingsProvider>
        <ImageProvider>
          <RouterProvider>
            <div className="container mx-auto px-4 py-8 max-w-6xl">
              <Header />
              <Page />
            </div>
          </RouterProvider>
        </ImageProvider>
      </SettingsProvider>
    </DownloadProvider>
  );
}

export default App;
