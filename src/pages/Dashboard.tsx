
import { UseBlockchainStats } from "../hooks/useBlockchainStats";
import { StatsCard } from "../components/StatsCard";

export const Dashboard = () => {
    const { data, error, loading } = UseBlockchainStats();

    return (
        <section className="mx-auto w-full max-w-7xl px-4 py-8 text-slate-100 sm:px-6 lg:px-8">
            <div className="rounded-xl border border-slate-700/60 bg-slate-900/70 p-6 shadow-lg shadow-slate-950/30 backdrop-blur sm:p-8">
                <div className="mb-8 flex flex-col gap-4 border-b border-slate-700/70 pb-6 sm:flex-row sm:items-end sm:justify-between">
                    <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-cyan-300">Bitcoin Network</p>
                        <h1 className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl">Dashboard de Bitcoin</h1>
                        <p className="mt-2 text-sm text-slate-400">
                            Panel en tiempo real con las métricas clave del mercado y actividad on-chain de BTC.
                        </p>
                    </div>

                    <div className="rounded-lg border border-cyan-500/30 bg-cyan-500/10 px-3 py-2">
                        <p className="text-xs font-medium text-cyan-200">Activo monitoreado: BTC</p>
                    </div>
                </div>

                {loading && (
                    <div className="rounded-lg border border-slate-700 bg-slate-800/70 px-4 py-5 text-sm text-slate-300">
                        Cargando estadísticas...
                    </div>
                )}

                {error && (
                    <div className="rounded-lg border border-red-500/40 bg-red-500/10 px-4 py-5 text-sm text-red-200">
                        {error}
                    </div>
                )}

                {data && (
                    <div className="rounded-lg border border-slate-700 bg-slate-800/60 p-5 sm:p-6">
                        <StatsCard stats={data} />
                    </div>
                )}
            </div>
        </section>
    );
};