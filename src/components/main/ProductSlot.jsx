export const ProductSlot = ({name,sprite})=>{
    return(
            <div class="pokemon-container">
        
                <header class="sprite-container">
                    <img src={sprite} alt=""/>
                </header>
        
        
                <ul>
                    <li class="pokemon-name">{name.toUpperCase()}</li>
                    
                    {
                        <li class="type-container-container">
                            hola
                        </li>
                    }
                </ul>
        
            </div>
    )
}
