import {  useState } from "react"
import { HashStore } from "../store/hashStore";
import type { SimpleTxResponse } from "../types/blockchain.types";

export const FetchHash = () => {

  


    const [data,setData] = useState<SimpleTxResponse | null > (null); 
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
    const { inputHash, HandleInputHash } = HashStore();


        const consultApi = async () =>  {
            try {
                if (!inputHash.trim()) {
                    setError("Ingresa un hash para buscar.");
                    return;
                }

                setLoading(true);
                setError(null);

                const request = await fetch(`https://api.blockchair.com/bitcoin/dashboards/transaction/${inputHash}`)
                if(!request.ok) throw new Error('algo salio mal con la consulta');
                const requestJson : SimpleTxResponse = await request.json();
                setData(requestJson);
                HandleInputHash("");

                
            } catch (err) {
                if(err instanceof Error){
                    setError(err.message);
                }else {
                    setError('algo salio mal');
                }
                

                
            }finally{
                setLoading(false);


            }

            

        }




    return {data, consultApi, loading, error};
    
}