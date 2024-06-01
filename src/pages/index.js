import LinearChart from "@/components/chart/LinearChart";
import CurrenciesPanel from "@/components/dashboard/CurrenciesPanel";
import WalletPanel from "@/components/dashboard/WalletPanel";

export default function Home() {
  return (
    <div className="w-full p-5 flex flex-col items-start justify-center">
      <h2 className="text-white text-2xl font-bold">Total balance $183.936</h2>
      <CurrenciesPanel />
      <div className="w-full flex flex-wrap items-start justify-start gap-5">
        <LinearChart />
        <WalletPanel />
      </div>
    </div>
  );
}
