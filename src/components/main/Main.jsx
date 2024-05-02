import "./products.css"
import { MainHeader } from "./mainHeader/MainHeader"
import { GamingCategory } from "./mainCategories/GamingCategory"
import { ElectronicCategory } from "./mainCategories/ElectronicCategory"
import { HealthCategory } from "./mainCategories/HealthCategory"
import { AutomotorCategory } from "./mainCategories/AutomotorCategory"
import { HomeCategory } from "./mainCategories/HomeCategory"
import { ClothesCategory } from "./mainCategories/ClothesCategory"
import { BrowserRouter } from "react-router-dom"
import { Route, Routes } from "react-router-dom"
import { ProductPage } from "../../pages/ProductPage"



export const Main = ()=>{
    
      return (
        <>
              <MainHeader/>
              <div className="products-grid">
              <GamingCategory name='Gaming'/>
              {/* <HealthCategory name='Salud y belleza'/>         
              <ElectronicCategory name='Electrónica'/>
              <AutomotorCategory name='Automotriz'/> 
              <HomeCategory name='Hogar y cocina'/>
              <ClothesCategory name='Ropa y accesorios'/> */}
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
