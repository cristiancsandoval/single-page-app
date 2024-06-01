import LinearChart from "@/components/chart/LinearChart";
import CurrenciesPanel from "@/components/layout/CurrenciesPanel";

export default function Home() {
  return (
    <div className="p-5 flex flex-col items-start justify-center">
      <CurrenciesPanel />
      <LinearChart />
    </div>
  );
}
