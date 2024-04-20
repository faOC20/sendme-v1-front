import { create } from "zustand";
import { useEffect } from "react";



/*const getAllProducts = async()=>(
    fetch(URL)
    .then(response=>response.json())
    .then(result=>result)
)

const allProducts = await getAllProducts()*/

export const useProductsStore = create((set)=>{

    return{
        results: [],
        loading: true,
        error: null,
        products: [],
        fetchProducts: async()=>{
            try{
                const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=20&offset=0')
                const {results} = await response.json()
                console.log(results)
                set({results, loading:false})
                
            } catch(error){
                console.error(error)
                set({loading:false, error:"Error fetching products"})
            }
           
        },

    }
});
