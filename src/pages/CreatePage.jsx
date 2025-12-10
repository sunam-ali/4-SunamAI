import AdvanceSettings from "../components/CreateImage/AdvanceSettings";
import Results from "../components/CreateImage/Results";
import Search from "../components/CreateImage/Search";
import PageHeading from "../components/PageHeading";

export default function CreatePage() {
  return (
    <main className="relative z-10">
      <PageHeading />
      <Search />
      <AdvanceSettings />
      <Results />
    </main>
  );
}
