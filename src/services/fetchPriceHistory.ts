import type { CoinGeckoMarketChartResponse, PriceHistoryPoint } from "../types/blockchain.types";

const dateFormatter = new Intl.DateTimeFormat("es-ES", {
    day: "2-digit",
    month: "short",
});

export const FetchPriceHistory = async (): Promise<PriceHistoryPoint[]> => {
    const response = await fetch(
        "https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=30&interval=daily"
    );

    if (!response.ok) throw new Error("Could not load price history");

    const data: CoinGeckoMarketChartResponse = await response.json();

    return data.prices.map(([timestamp, price]) => ({
        date: dateFormatter.format(new Date(timestamp)),
        price,
    }));
};
