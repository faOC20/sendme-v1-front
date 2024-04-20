import "./products.css"

export const ProductSlot = ({name})=>{
    return(
            <div className="pokemon-container">
        
                <ul>
                    <li className="pokemon-name">{name.toUpperCase()}</li>
                    
                    {
                        <li className="type-container-container">
                            hola
                        </li>
                    }
                </ul>
        
            </div>
    )
}
