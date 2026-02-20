

export const FetchStats = async( chain: 'bitcoin' | 'ethereum') => {

    const response = await fetch(`https://api.blockchair.com/${chain}/stats`);

    if(!response.ok) throw new Error('algo salio mal');
     
    const data = await response.json();

    return data.data;
    

}
    