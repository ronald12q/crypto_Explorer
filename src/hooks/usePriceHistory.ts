import { useEffect, useState } from "react";
import { FetchPriceHistory } from "../services/fetchPriceHistory";
import type { PriceHistoryPoint } from "../types/blockchain.types";

export const usePriceHistory = () => {
    const [data, setData] = useState<PriceHistoryPoint[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const request = async () => {
            try {
                setLoading(true);
                setError(null);
                const response = await FetchPriceHistory();
                setData(response);
            } catch (err: unknown) {
                setError(err instanceof Error ? err.message : "Could not load price history");
            } finally {
                setLoading(false);
            }
        };

        request();
    }, []);

    return { data, error, loading };
};
