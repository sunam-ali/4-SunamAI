import useImages from "../../hooks/useImages";
import useModels from "../../hooks/useModels";
import useSettings from "../../hooks/useSettings";

export default function AdvanceSettings() {
  const { models, loading, error } = useModels();
  const { settings, setSettings } = useSettings();
  const { isFetchingAll } = useImages();

  const handleChange = (e) => {
    const { id, value } = e.target;

    setSettings((prev) => {
      const newSettings = { ...prev, [id]: value };
      if (id === "width" || id === "height") {
        newSettings.aspectRatio = "";
      }
      return newSettings;
    });
  };

  const handleAspectRatio = (label, width, height) => {
    setSettings((prev) => ({
      ...prev,
      width: String(width),
      height: String(height),
      aspectRatio: label,
    }));
  };

  const aspectRatios = [
    { label: "1:1", width: 1024, height: 1024 },
    { label: "16:9", width: 1280, height: 720 },
    { label: "4:3", width: 1024, height: 768 },
    { label: "3:2", width: 1200, height: 800 },
  ];
  return (
    <div className="border border-zinc-700/70 mb-6 rounded-lg p-4">
      <div className="flex items-center justify-between mb-4">
        <h4 className="font-medium">Advanced Settings</h4>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Model Selection */}
        <div>
          <label
            htmlFor="model"
            className="block text-sm font-medium text-zinc-700 mb-1"
          >
            Model
          </label>
          {error && <p className="text-red-400 text-sm mb-1">{error}</p>}
          <select
            id="model"
            disabled={isFetchingAll}
            value={settings.model}
            onChange={handleChange}
            className="w-full px-3 py-2 bg-zinc-900/10 border border-zinc-700/70 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
          >
            {loading && (
              <option className="bg-zinc-900">⏳ Loading Models...</option>
            )}
            {models.map((model) => (
              <option key={model} className="bg-zinc-900" value={model}>
                {model}
              </option>
            ))}
          </select>
        </div>

        {/* Seed Input */}
        <div>
          <label
            htmlFor="seed"
            className="block text-sm font-medium text-zinc-700 mb-1"
          >
            Seed (for reproducible results)
          </label>
          <input
            type="number"
            id="seed"
            value={settings.seed}
            disabled
            onChange={handleChange}
            className="w-full bg-zinc-900/10 px-3 py-2 border border-zinc-700/70 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
            placeholder="Random"
          />
        </div>

        <div>
          <label
            htmlFor="width"
            className="block text-sm font-medium text-zinc-700 mb-1"
          >
            Width
          </label>
          <input
            type="number"
            id="width"
            value={settings.width}
            disabled={isFetchingAll}
            onChange={handleChange}
            className="w-full bg-zinc-900/10 px-3 py-2 border border-zinc-700/70 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
          />
        </div>

        <div>
          <label
            htmlFor="height"
            className="block text-sm font-medium text-zinc-700 mb-1"
          >
            Height
          </label>
          <input
            type="number"
            id="height"
            value={settings.height}
            disabled={isFetchingAll}
            onChange={handleChange}
            className="w-full bg-zinc-900/10 px-3 py-2 border border-zinc-700/70 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
          />
        </div>

        {/* Aspect Ratio Presets */}
        <div>
          <label className="block text-sm font-medium text-zinc-700 mb-1">
            Aspect Ratio Presets
          </label>
          <div className="flex flex-wrap gap-2">
            {aspectRatios.map(({ label, width, height }) => (
              <button
                key={label}
                type="button"
                disabled={isFetchingAll}
                onClick={() => handleAspectRatio(label, width, height)}
                className={`px-3 py-3 text-xs rounded ${
                  settings.aspectRatio === label
                    ? "bg-zinc-800 text-white"
                    : "bg-zinc-900/10 hover:bg-zinc-800 text-zinc-200"
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
