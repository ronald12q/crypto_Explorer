import { SearchForm } from "../components/searchform"
import { FetchHash } from "../hooks/useFetchHash"
import { Hashinfo } from "../components/Hashinfo";



export const HashExplorer = () => {
    const {data, consultApi, loading, error} = FetchHash();
    return (
        <div>
            <SearchForm consultApi={consultApi} />

            <div className="mx-auto w-full max-w-7xl px-4 pb-8 sm:px-6 lg:px-8">
                {loading && (
                    <div className="rounded-lg border border-slate-700 bg-slate-800/70 px-4 py-5 text-sm text-slate-300">
                        Consultando transacción...
                    </div>
                )}

                {error && (
                    <div className="rounded-lg border border-red-500/40 bg-red-500/10 px-4 py-5 text-sm text-red-200">
                        {error}
                    </div>
                )}

                {data && <Hashinfo data={data} />}
            </div>
        </div>
    )
}