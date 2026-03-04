import {create} from 'zustand';



interface HashStoreI {
    inputHash: string;
    HandleInputHash: (Hash: string) => void


}



export const HashStore = create<HashStoreI>((set) => ({
    inputHash: '',


    HandleInputHash: (Hash) => set({inputHash : Hash})


})  ) 