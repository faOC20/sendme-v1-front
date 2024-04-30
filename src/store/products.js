import { create } from "zustand";


export const useProductsStore = create((set)=>{

    const url = 'https://real-time-amazon-data.p.rapidapi.com/search?page=1&country=US&category_id=aps&limit=3&offset=0';
    const options = {
	method: 'GET',
	headers: {
        // 'X-RapidAPI-Key': '9addabb7a7msh486d26bb02f3730p13f249jsn2d2006fa318d',
		'X-RapidAPI-Host': 'real-time-amazon-data.p.rapidapi.com'
	}
};

    return{
        results: [],
        gamingProducts:[],
        electronicProducts:[],
        healthProducts:[],
        automotorsProducts:[],
        homeProducts:[],
        clothesProducts:[],
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
                const response = await fetch(`${url}&query=gaming`,options)
                const data = await response.json()
                console.log(data)
                
                set({gamingProducts:data.data.products})
                
            } catch(error){
                console.error(error)
                set({loading:false, error:"Error fetching products"})
            }
           
        },

        fetchElectronicProducts: async()=>{
            try{
                const response = await fetch(`${url}&query=phone`,options)
                const data = await response.json()
                console.log(data)
                
                set({electronicProducts:data.data.products})
                
            } catch(error){
                console.error(error)
                set({loading:false, error:"Error fetching products"})
            }
           
        },

        fetchHealthProducts: async()=>{
            try{
                const response = await fetch(`${url}&query=health`,options)
                const data = await response.json()
                console.log(data)
                
                set({healthProducts:data.data.products})
                
            } catch(error){
                console.error(error)
                set({loading:false, error:"Error fetching products"})
            }
           
        },

        fetchAutomotorsProducts: async()=>{
            try{
                const response = await fetch(`${url}&query=caraccesories`,options)
                const data = await response.json()
                console.log(data)
                
                set({automotorsProducts:data.data.products})
                
            } catch(error){
                console.error(error)
                set({loading:false, error:"Error fetching products"})
            }
           
        },


        fetchHomeProducts: async()=>{
            try{
                const response = await fetch(`${url}&query=hogar`,options)
                const data = await response.json()
                console.log(data)
                
                set({homeProducts:data.data.products})
                
            } catch(error){
                console.error(error)
                set({loading:false, error:"Error fetching products"})
            }
           
        },

        fetchClothesProducts: async()=>{
            try{
                const response = await fetch(`${url}&query=clothes`,options)
                const data = await response.json()
                console.log(data)
                
                set({clothesProducts:data.data.products})
                
            } catch(error){
                console.error(error)
                set({loading:false, error:"Error fetching products"})
            }
           
        },



        
        



    }
});
