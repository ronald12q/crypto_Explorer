
import { useEffect, useState } from "react";
import { FetchStats } from "../services/fetchStats";
import type { BlockchainStats } from "../types/blockchain.types";

export const UseBlockchainStats = (chain: 'bitcoin' | 'ethereum') => {

    const [data, setData] = useState <BlockchainStats | null>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null > (null);




    useEffect(() => {

        const request =  async() => {

            try{

                setLoading(true);
                const response = await FetchStats(chain);
                setData(response);
                console.log(data);
                
            } catch (err : any) {
                setError(err.message);
                
            }finally{
                setLoading(false);

            }
            
        }


        request();
        


    },[chain],)




return {data, error, loading};


}