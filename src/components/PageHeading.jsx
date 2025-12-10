import useRouter from "../hooks/useRouter";

function RenderHeading({ currentRoute }) {
  switch (currentRoute) {
    case "create":
      return (
        <div className="text-center mb-8">
          <h1 className="sm:text-5xl text-3xl font-bold mb-4 text-teal-400">
            Create AI Images
          </h1>
          <p className="sm:text-lg text-[16px] text-zinc-400 max-w-xl mx-auto">
            Transform your ideas into stunning visuals with the power of AI.
            Generate 9 unique variations instantly.
          </p>
        </div>
      );
    case "downloaded":
      return (
        <div className="text-center mb-8">
          <h1 className="sm:text-5xl text-3xl font-bold mb-4 text-teal-400">
            Downloaded Images
          </h1>
          <p className="sm:text-lg text-[16px] text-zinc-400 max-w-xl mx-auto">
            Access all your previously generated AI images here. Quickly
            download and use them however you like.
          </p>
        </div>
      );
    default:
      return null;
  }
}

export default function PageHeading() {
  const { currentRoute } = useRouter();
  return <RenderHeading currentRoute={currentRoute} />;
}
