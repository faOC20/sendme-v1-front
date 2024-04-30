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
import { HealthCategory } from "./mainCategories/HealthCategory"
import { AutomotorCategory } from "./mainCategories/AutomotorCategory"
import { HomeCategory } from "./mainCategories/HomeCategory"
import { ClothesCategory } from "./mainCategories/ClothesCategory"


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
            <GamingCategory name='Gaming'/>
            <HealthCategory name='Salud y belleza'/>         
            <ElectronicCategory name='Electrónica'/>
            <AutomotorCategory name='Automotriz'/>
            <HomeCategory name='Hogar y cocina'/>
            <ClothesCategory name='Ropa y accesorios'/>
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
