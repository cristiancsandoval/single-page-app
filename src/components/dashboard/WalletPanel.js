import { wallet } from "@/data/wallet";

const WalletPanel = () => {
  return (
    <div className="w-80 bg-slate-gradient rounded-xl p-6 flex flex-col gap-4">
      <h4 className="text-white text-lg font-bold">Wallet Activity</h4>
      <div className="w-full flex items-center justify-between text-slate-300 text-sm">
        <span>History</span>
        <button>See All</button>
      </div>
      <table className="table-auto">
        <tbody className="">
          {wallet.map((transaction, i) => (
            <tr key={i} className="text-xs text-indigo-400">
              <td className="py-2">{transaction.concept}</td>
              <td
                className={`text-right py-2 ${
                  transaction.numberValue < 0
                    ? "text-red-400"
                    : "text-green-400"
                }`}
              >
                {transaction.textValue}
              </td>
              <td className="text-right">{transaction.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default WalletPanel;
