
import type {BlockchainStats} from '../types/blockchain.types';
import { Format,FormatCap,FormatCurrency, FormatPercent } from '../utilities/FormatCurrency';

interface statsCardprops {

    stats: BlockchainStats

}


export const StatsCard = ({stats} : statsCardprops) => {


    return (
        <div>

            <p>{stats.hashrate_24h}</p>
            <p>{`Market Cap: ${FormatCap(stats.market_cap_usd)}`}</p>
            <p>{`Dominance: ${FormatPercent(stats.market_dominance_percentage)}`}</p>
            <p>{`Market Price: ${FormatCurrency(stats.market_price_usd)}`}</p>
            <p>{`Change lasted 24H: ${FormatPercent(stats.market_price_usd_change_24h_percentage)}`}</p>
            <p>{`Menpool: ${Format(stats.mempool_transactions)}`}</p>
            <p>{`Transacction 24H: ${Format(stats.transactions_24h)}`}</p>
            
        </div>
    )




}