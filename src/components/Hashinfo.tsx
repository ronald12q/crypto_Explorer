import type { SimpleTxResponse } from "../types/blockchain.types";

interface HashInfoProps {
    data: SimpleTxResponse;
}

const numberFormatter = new Intl.NumberFormat("en-US");

export const Hashinfo = ({ data }: HashInfoProps) => {
    const txData = Object.values(data.data)[0]?.transaction;

    if (!txData) {
        return (
            <div className="rounded-lg border border-slate-700 bg-slate-800/60 px-4 py-5 text-sm text-slate-300">
                No transaction information was found.
            </div>
        );
    }

    return (
        <section className="rounded-xl border border-slate-700/60 bg-slate-900/70 p-6 shadow-lg shadow-slate-950/30 backdrop-blur sm:p-8">
            <div className="mb-6 border-b border-slate-700/70 pb-4">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-cyan-300">Bitcoin Transaction</p>
                <h2 className="mt-2 text-xl font-bold tracking-tight text-slate-100 sm:text-2xl">Transaction Details</h2>
            </div>

            <div className="space-y-3">
                <div className="rounded-lg border border-slate-700/80 bg-slate-900/60 p-4">
                    <p className="text-xs uppercase tracking-wide text-slate-400">Hash</p>
                    <p className="mt-2 break-all text-sm font-medium text-slate-100">{txData.hash}</p>
                </div>

                <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
                    <div className="rounded-lg border border-slate-700/80 bg-slate-900/60 p-4">
                        <p className="text-xs uppercase tracking-wide text-slate-400">Fee</p>
                        <p className="mt-2 text-lg font-semibold text-cyan-300">{numberFormatter.format(txData.fee)} sats</p>
                    </div>

                    <div className="rounded-lg border border-slate-700/80 bg-slate-900/60 p-4">
                        <p className="text-xs uppercase tracking-wide text-slate-400">Input total</p>
                        <p className="mt-2 text-lg font-semibold text-slate-100">{numberFormatter.format(txData.input_total)} sats</p>
                    </div>

                    <div className="rounded-lg border border-slate-700/80 bg-slate-900/60 p-4">
                        <p className="text-xs uppercase tracking-wide text-slate-400">Output total</p>
                        <p className="mt-2 text-lg font-semibold text-slate-100">{numberFormatter.format(txData.output_total)} sats</p>
                    </div>
                </div>
            </div>
        </section>
    );
};
