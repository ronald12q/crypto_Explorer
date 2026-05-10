import {
    Area,
    AreaChart,
    CartesianGrid,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis,
} from "recharts";
import type { PriceHistoryPoint } from "../types/blockchain.types";
import { FormatCurrency, FormatPercent } from "../utilities/FormatCurrency";

interface PriceMovementChartProps {
    data: PriceHistoryPoint[];
}

type TooltipPayload = {
    payload: {
        date: string;
        price: number;
    };
};

interface ChartTooltipProps {
    active?: boolean;
    payload?: TooltipPayload[];
}

const ChartTooltip = ({ active, payload }: ChartTooltipProps) => {
    if (!active || !payload?.length) return null;

    const point = payload[0].payload;

    return (
        <div className="rounded-lg border border-slate-700 bg-slate-950/95 px-3 py-2 shadow-xl">
            <p className="text-xs font-medium text-slate-400">{point.date}</p>
            <p className="mt-1 text-sm font-semibold text-cyan-200">{FormatCurrency(point.price)}</p>
        </div>
    );
};

export const PriceMovementChart = ({ data }: PriceMovementChartProps) => {
    const firstPrice = data[0]?.price ?? 0;
    const lastPrice = data[data.length - 1]?.price ?? 0;
    const change = firstPrice ? ((lastPrice - firstPrice) / firstPrice) * 100 : 0;
    const isPositive = change >= 0;
    const strokeColor = isPositive ? "#22d3ee" : "#fb7185";

    return (
        <div className="mt-6 rounded-lg border border-slate-700 bg-slate-800/60 p-5 sm:p-6">
            <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
                <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-cyan-300">Market Movement</p>
                    <h2 className="mt-2 text-xl font-bold text-slate-100">BTC Price Over the Last 30 Days</h2>
                    <p className="mt-1 text-sm text-slate-400">
                        Daily Bitcoin price history in USD over the last month.
                    </p>
                </div>

                <div className={`rounded-lg border px-3 py-2 ${isPositive ? "border-emerald-400/30 bg-emerald-400/10" : "border-rose-400/30 bg-rose-400/10"}`}>
                    <p className={`text-sm font-semibold ${isPositive ? "text-emerald-300" : "text-rose-300"}`}>
                        {FormatPercent(change)}
                    </p>
                </div>
            </div>

            <div className="h-72 w-full">
                <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={data} margin={{ top: 10, right: 8, left: 0, bottom: 0 }}>
                        <defs>
                            <linearGradient id="priceMovement" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor={strokeColor} stopOpacity={0.38} />
                                <stop offset="95%" stopColor={strokeColor} stopOpacity={0.02} />
                            </linearGradient>
                        </defs>
                        <CartesianGrid stroke="#334155" strokeDasharray="4 4" vertical={false} />
                        <XAxis
                            dataKey="date"
                            tick={{ fill: "#94a3b8", fontSize: 12 }}
                            axisLine={false}
                            interval="preserveStartEnd"
                            minTickGap={24}
                            tickLine={false}
                        />
                        <YAxis
                            domain={["dataMin", "dataMax"]}
                            tick={{ fill: "#94a3b8", fontSize: 12 }}
                            axisLine={false}
                            tickFormatter={(value) => `$${Number(value).toLocaleString("en-US")}`}
                            tickLine={false}
                            width={86}
                        />
                        <Tooltip content={<ChartTooltip />} cursor={{ stroke: "#64748b", strokeDasharray: "4 4" }} />
                        <Area
                            type="monotone"
                            dataKey="price"
                            stroke={strokeColor}
                            strokeWidth={3}
                            fill="url(#priceMovement)"
                            dot={{ r: 5, strokeWidth: 2, fill: "#0f172a", stroke: strokeColor }}
                            activeDot={{ r: 7, strokeWidth: 2, fill: strokeColor, stroke: "#e2e8f0" }}
                        />
                    </AreaChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};
