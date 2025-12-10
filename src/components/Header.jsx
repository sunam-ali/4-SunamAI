import Logo from "../assets/logo.svg";
import useRouter from "../hooks/useRouter";

export default function Header() {
  const { currentRoute, setCurrentRoute } = useRouter();
  return (
    <>
      <header className="flex items-center mb-12 justify-between">
        <div className="flex items-center justify-center gap-1 cursor-pointer">
          <img src={Logo} className="h-10" />
          <span className="text-sm font-bold hidden sm:flex">
            Sunam
            <br />
            AI Studio
          </span>
        </div>
        <ul className="ml-4 text-sm text-zinc-400 flex sm:gap-8 gap-1">
          <a
            className={`hover:text-zinc-200 ${
              currentRoute === "create" && "font-medium text-white"
            } p-3 rounded-md  cursor-pointer transition-all flex justify-center items-center gap-1.5`}
            onClick={() => setCurrentRoute("create")}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-sparkles-icon lucide-sparkles"
            >
              <path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z" />
              <path d="M20 2v4" />
              <path d="M22 4h-4" />
              <circle cx="4" cy="20" r="2" />
            </svg>
            <span>Create Image</span>
          </a>
          <a
            className={`hover:text-zinc-200 ${
              currentRoute === "downloaded" && "font-medium text-white"
            } p-3 rounded-md  cursor-pointer transition-all flex justify-center items-center gap-1.5`}
            onClick={() => setCurrentRoute("downloaded")}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-download-icon lucide-download"
            >
              <path d="M12 15V3" />
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <path d="m7 10 5 5 5-5" />
            </svg>
            <span>Downloaded</span>
          </a>
        </ul>
      </header>
    </>
  );
}
