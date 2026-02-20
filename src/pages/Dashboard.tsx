
import { useState } from "react";
import { UseBlockchainStats } from "../hooks/useBlockchainStats"
import { StatsCard } from "../components/StatsCard";
export const Dashboard = () => {

    type value1 = 'bitcoin' | 'ethereum';
    
    interface valor {
        Id: number,
        Nombre: value1

    }

    const [current, setCurrent] = useState<'bitcoin' | 'ethereum'>('bitcoin');
    const {data, error, loading} = UseBlockchainStats(current);
    const valores: valor[] = [
        {Id: 1, Nombre: 'bitcoin'},
        {Id:2, Nombre: 'ethereum'}]; 
       

    return (
        <div className="text-amber-50">
            <h1>Crypto Dashboard</h1>
            <div>
                {valores.map((e) => 
                <button className={current === e.Nombre ? 'bg-blue-300': ''} key={e.Id} onClick={() => setCurrent(e.Nombre)}>
                    {e.Nombre}
                </button>)}

                { loading &&<div>
                    <h1>cargando</h1>

                </div>}

                {error &&  <div>
                    <h1>{error}</h1>
                    
                    </div>}

                    {data && <StatsCard stats={data}  />}



               
            </div>


        </div>
    )
}