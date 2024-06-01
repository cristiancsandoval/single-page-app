import React from "react";

const CurrenciesPanel = () => {
  return (
    <div className="w-full flex items-center justify-start py-5 gap-5">
      <button className="w-32 py-2 flex flex-col gap-1 justify-center items-center rounded-lg text-white font-bold bg-golden-gradient">
        <div className="flex gap-1">
          <span>BTC</span>
          <span>1.9678</span>
        </div>
        <span>+12,5%</span>
      </button>
      <button className="w-32 py-2 flex flex-col gap-1 justify-center items-center rounded-lg text-white font-bold bg-slate-gradient">
        <div className="flex gap-1">
          <span className="text-lime-300">ETH</span>
          <span>1.9678</span>
        </div>
        <span className="text-red-400">-5,23%</span>
      </button>
      <button className="w-32 py-2 flex flex-col gap-1 justify-center items-center rounded-lg text-white font-bold bg-slate-gradient">
        <div className="flex gap-1">
          <span className="text-sky-400">LTC</span>
          <span>1.9678</span>
        </div>
        <span className="text-green-400">+39,69%</span>
      </button>
      <button className="w-32 py-2 flex flex-col gap-1 justify-center items-center rounded-lg border border-dashed border-slate-600 text-slate-600">
        <span className="my-3">+ Add currency</span>
      </button>
    </div>
  );
};

export default CurrenciesPanel;
