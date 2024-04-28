import { MainDecoration } from "../../assets/images/MainDecoration"
import { MainHeaderInfo } from "./mainHeader/MainHeaderInfo"
import logo from '../../assets/images/sendmefondo.png'
import "./products.css"
import { useEffect } from "react"
import { useProductsStore } from "../../store/products"
import { ProductSlot } from "./ProductSlot"
import { MainHeader } from "./mainHeader/MainHeader"
import { HorizontalCategory } from "./HorizontalCategory"
import { VerticalCategory } from "./VerticalCategory"
import { GamingCategory } from "./mainCategories/GamingCategory"
import { ElectronicCategory } from "./mainCategories/ElectronicCategory"


export const Main = ()=>{

    
    
    const {results, fetchProducts, loading, error} = useProductsStore()

    useEffect(()=>{
        fetchProducts()
    },[fetchProducts])
    
    if (loading) {
        return (
          <>
            <MainHeader/>
            <div>Cargando...</div>
          </>
        )
      }
    
      if (error) {
        return <div>{error}</div>
      }
    
      return (
        <>
          <MainHeader/>

          <div className="products-grid">
            <GamingCategory name='gaming'/>
            <VerticalCategory catName="Salud y belleza"/>          
            <ElectronicCategory name='Electrónica'/>
            <VerticalCategory catName="Automotriz"/>
            <HorizontalCategory catName="Hogar y cocina"/>
            <HorizontalCategory catName="Ropa y accesorios"/>
          </div>
        </>
       
      )
    }

  /** 
     {
        results.map((data)=>(
            <ProductSlot 
                    key={data.name}
                    name={data.name}
                    
                />
            ))
                    
      }
  */
