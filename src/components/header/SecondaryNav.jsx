import { FiatChanger } from "./FiatChanger"
import { SessionButton } from "./SessionButton"
import { ShoppingCartButton } from "./ShoppingCartButton"

export const SecondaryNav = ()=>{
    return(
       <div class="flex-grow content-center">
         <nav class="flex-grow content-end h-3/6">
            <ul class="flex h-full">
                
                <FiatChanger/>
                
                <SessionButton/>
                
                <ShoppingCartButton/>

            </ul>
        </nav>
       </div>
    )
}
