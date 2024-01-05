import Hero from "./components/Hero";
import Popular from "./components/Popular";
import Recommended from "./components/Recommended";

export default function Home() {
  return (
    <div className="min-h-screen w-full   ">
      <Hero />
      <Popular />
      <Recommended />
    </div>
  );
}
