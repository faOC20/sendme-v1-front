import { MainDecoration } from "../../assets/images/MainDecoration"
import { MainHeaderInfo } from "./MainHeaderInfo"
import logo from '../../assets/images/sendmefondo.png'
import "./products.css"
import { useEffect } from "react"
import { useProductsStore } from "../../store/products"
import { ProductSlot } from "./ProductSlot"


export const Main = ()=>{

    
    
    const {results, fetchProducts, loading, error} = useProductsStore()

    useEffect(()=>{
        fetchProducts()
    },[fetchProducts])
    
    if (loading) {
        return <div>Cargando...</div>
      }
    
      if (error) {
        return <div>{error}</div>
      }
    
      return (
        <>
            <div class="relative w-full h-60">
            <div class="absolute w-full -top-14 z-10">
                <MainDecoration/> 
            </div>

            <MainHeaderInfo/>
        
        </div>

        <div className="products-container">
                {
                    results.map((data)=>(
                        <ProductSlot 
                                key={data.name}
                                name={data.name}
                                
                            />
                        ))
                    
                }

                
        </div>
        </>
       
      )
    }

   
