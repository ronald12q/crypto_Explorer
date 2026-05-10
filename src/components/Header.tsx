import { Link, NavLink } from "react-router-dom";

export const Header = () => {
    const baseLinkClasses =
        "rounded-md px-4 py-2 text-sm font-medium transition-colors duration-200";

    return (
        <header className="sticky top-0 z-50 border-b border-slate-700/60 bg-slate-900/90 backdrop-blur">
            <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
                <Link
                    to="/"
                    className="text-lg font-bold tracking-tight text-slate-100 transition hover:text-cyan-400"
                >
                    Crypto Explorer
                </Link>

                <nav className="flex items-center gap-2" aria-label="Main navigation">
                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            `${baseLinkClasses} ${
                                isActive
                                    ? "bg-cyan-500/20 text-cyan-300"
                                    : "text-slate-300 hover:bg-slate-800 hover:text-slate-100"
                            }`
                        }
                    >
                        Dashboard
                    </NavLink>

                    <NavLink
                        to="/HashExplorer"
                        className={({ isActive }) =>
                            `${baseLinkClasses} ${
                                isActive
                                    ? "bg-cyan-500/20 text-cyan-300"
                                    : "text-slate-300 hover:bg-slate-800 hover:text-slate-100"
                            }`
                        }
                    >
                        Hash Explorer
                    </NavLink>
                </nav>
            </div>
        </header>
    );
};
