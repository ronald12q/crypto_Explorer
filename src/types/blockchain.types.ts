

export interface BlockchainStats {
  blocks_24h: number;
  market_price_usd: number;
  market_price_usd_change_24h_percentage: number;
  market_cap_usd: number;
  hashrate_24h: string;
  transactions_24h: number;
  mempool_transactions: number;
  mempool_size: number;
  volume_24h: number;
  average_transaction_fee_usd_24h: number;
  median_transaction_fee_usd_24h: number;
  market_dominance_percentage: number;
}

export interface PriceHistoryPoint {
  date: string;
  price: number;
}


export interface CoinGeckoMarketChartResponse {
  prices: [number, number][];
}




export interface SimpleTxResponse {
  data: {
    [txHash: string]: {
      transaction: {
        hash: string;
        fee: number;
        input_total: number;
        output_total: number;
      };
    };
  };
}
