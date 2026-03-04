import { HashStore } from "../store/hashStore"




interface FetchHashProps {
    consultApi: () => Promise<void>
}

export const SearchForm = ({consultApi}: FetchHashProps) => {

   const {inputHash, HandleInputHash} =  HashStore();
    return(
        <div className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
            <div className="rounded-xl border border-slate-700/60 bg-slate-900/70 p-6 shadow-lg shadow-slate-950/30 backdrop-blur sm:p-8">
                <div className="mb-5">
                    <h1 className="text-2xl font-bold tracking-tight text-slate-100 sm:text-3xl">Hash Explorer</h1>
                    <p className="mt-1 text-sm text-slate-400">Busca una transacción o bloque a partir de su hash</p>
                </div>

                <form
                    className="flex flex-col gap-3 sm:flex-row sm:items-center"
                    onSubmit={(e) => {
                        e.preventDefault();
                        consultApi();
                    }}
                >
                    <input
                        value={inputHash}
                        onChange={(e) => HandleInputHash(e.target.value) }
                        type="text"
                        placeholder="Digite su hash"
                        className="w-full rounded-md border border-slate-700 bg-slate-800/80 px-4 py-2.5 text-sm text-slate-100 placeholder:text-slate-500 outline-none transition focus:border-cyan-400/70 focus:ring-2 focus:ring-cyan-400/30"
                    />
                    <button
                        type="submit"
                        className="rounded-md border border-cyan-400/60 bg-cyan-500/20 px-5 py-2.5 text-sm font-medium text-cyan-300 transition-colors duration-200 hover:bg-cyan-500/30 hover:text-cyan-200"
                    >
                        Buscar
                    </button>
                </form>
            </div>
        </div>
    )
}