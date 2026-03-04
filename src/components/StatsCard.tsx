import type { BlockchainStats } from "../types/blockchain.types";
import { Format, FormatCap, FormatCurrency, FormatPercent } from "../utilities/FormatCurrency";

interface StatsCardProps {
    stats: BlockchainStats;
}

export const StatsCard = ({ stats }: StatsCardProps) => {
    return (
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-lg border border-slate-700/80 bg-slate-900/60 p-4">
                <p className="text-xs uppercase tracking-wide text-slate-400">Precio BTC (USD)</p>
                <p className="mt-2 text-xl font-semibold text-cyan-300">{FormatCurrency(stats.market_price_usd)}</p>
            </div>

            <div className="rounded-lg border border-slate-700/80 bg-slate-900/60 p-4">
                <p className="text-xs uppercase tracking-wide text-slate-400">Variación 24h</p>
                <p className="mt-2 text-xl font-semibold text-slate-100">{FormatPercent(stats.market_price_usd_change_24h_percentage)}</p>
            </div>

            <div className="rounded-lg border border-slate-700/80 bg-slate-900/60 p-4">
                <p className="text-xs uppercase tracking-wide text-slate-400">Capitalización de mercado</p>
                <p className="mt-2 text-lg font-semibold text-cyan-300">{FormatCap(stats.market_cap_usd)}</p>
            </div>

            <div className="rounded-lg border border-slate-700/80 bg-slate-900/60 p-4">
                <p className="text-xs uppercase tracking-wide text-slate-400">Dominancia de mercado</p>
                <p className="mt-2 text-lg font-semibold text-slate-100">{FormatPercent(stats.market_dominance_percentage)}</p>
            </div>

            <div className="rounded-lg border border-slate-700/80 bg-slate-900/60 p-4">
                <p className="text-xs uppercase tracking-wide text-slate-400">Hashrate 24h</p>
                <p className="mt-2 text-lg font-semibold text-slate-100">{Format(Number(stats.hashrate_24h))} H/s</p>
            </div>

            <div className="rounded-lg border border-slate-700/80 bg-slate-900/60 p-4">
                <p className="text-xs uppercase tracking-wide text-slate-400">Transacciones en mempool</p>
                <p className="mt-2 text-lg font-semibold text-slate-100">{Format(stats.mempool_transactions)}</p>
            </div>

            <div className="rounded-lg border border-slate-700/80 bg-slate-900/60 p-4 sm:col-span-2 lg:col-span-3">
                <p className="text-xs uppercase tracking-wide text-slate-400">Transacciones 24h</p>
                <p className="mt-2 text-lg font-semibold text-slate-100">{Format(stats.transactions_24h)}</p>
            </div>
        </div>
    );
};