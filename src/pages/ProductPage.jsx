import { useEffect, useState } from "react"
import { useProductsStore } from "../store/products"
import { useParams } from "react-router-dom"

export const ProductPage = ()=>{
    const {getClickedProduct} = useProductsStore()

    const[loading, setLoading] = useState(true)
    const[product, setProduct] = useState({})

    const {id} = useParams()

    const fetchClickedProduct = async(id)=>{
        const data = await getClickedProduct(id)
        setProduct(data)
        setLoading(false)
    }

    useEffect(()=>{
        fetchClickedProduct(id)
    },[])

    if (loading){
        return (
            <div>
                sexo
            </div>
        )
    }

    return (
        <>
            <h1>
                {product.asin}
            </h1>
        </>
    )
}