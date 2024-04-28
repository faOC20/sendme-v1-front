import "./products.css"

export const ProductSlot = ({name, photo})=>{
    return(
            <div className="product-container">

                <div className="sprite-container">
                    <picture>
                        <img src={photo} alt={name} />
                    </picture>
                </div>
        
                <ul>
                    <li className="pokemon-name">{name}</li>
                </ul>
        
            </div>
    )
}
