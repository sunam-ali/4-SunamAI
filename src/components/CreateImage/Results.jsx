import useDownloads from "../../hooks/useDownloads";
import useImages from "../../hooks/useImages";

export default function Results() {
  const { images } = useImages();
  const { addDownloadedImage } = useDownloads();
  const handleDownload = async (image) => {
    try {
      const response = await fetch(image.url);
      if (!response.ok) throw new Error("Download failed");

      const blob = await response.blob();
      const blobUrl = URL.createObjectURL(blob);

      const link = document.createElement("a");
      link.href = blobUrl;
      link.download = `image-${image.id}.png`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(blobUrl);

      addDownloadedImage(image);
    } catch (err) {
      console.error("Download failed:", err);
    }
  };

  return (
    <div>
      <h3 className="text-zinc-200 mb-4 font-bold text-lg">Result</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
        {images.map((image, index) => (
          <div
            key={image.id}
            className="relative rounded-xl overflow-hidden bg-zinc-900 h-48 w-full flex items-center justify-center"
          >
            {image.loading ? (
              <div className="w-full h-full rounded-xl bg-linear-to-r from-zinc-700 via-zinc-600 to-zinc-700 animate-pulse" />
            ) : image.error ? (
              <div className="text-red-400 text-center px-2 text-sm font-medium">
                Unable to load
              </div>
            ) : (
              <>
                <img
                  src={image.url}
                  alt={`Generated ${index}`}
                  className="w-full h-48 object-cover rounded-xl"
                />
                <button
                  onClick={() => handleDownload(image)}
                  className="absolute bottom-2 right-2 bg-zinc-900/80 hover:bg-zinc-800 text-white p-2 rounded-full transition"
                  title="Download image cursor-pointer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M10.3 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10l-3.1-3.1a2 2 0 0 0-2.814.014L6 21" />
                    <path d="m14 19 3 3v-5.5" />
                    <path d="m17 22 3-3" />
                    <circle cx="9" cy="9" r="2" />
                  </svg>
                </button>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
