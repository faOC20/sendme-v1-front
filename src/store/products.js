import { create } from "zustand";


export const useProductsStore = create((set)=>{

    const url = 'https://real-time-amazon-data.p.rapidapi.com/search?query=iphone&page=1&country=US&category_id=aps';
    const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '99858570a1msh50bcaed822bbb6cp1a1826jsn598f43990361',
		'X-RapidAPI-Host': 'real-time-amazon-data.p.rapidapi.com'
	}
};

    return{
        results: [],
        gamingProducts:[],
        loading: true,
        error: null,
        
        fetchProducts: async()=>{
            try{
                const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=2&offset=0')
                const {results} = await response.json()
                console.log(results)
                set({results, loading:false})
                
            } catch(error){
                console.error(error)
                set({loading:false, error:"Error fetching products"})
            }
           
        },

        fetchGamingProducts: async()=>{
            try{
                const response = await fetch(url,options)
                const data = await response.json()
                console.log(data)
                
                set({gamingProducts:data.data.products})
                
            } catch(error){
                console.error(error)
                set({loading:false, error:"Error fetching products"})
            }
           
        }
        



    }
});
