import letterLogo from '../../assets/images/sendme.png'  
import { SearchBar } from './SearchBar'
import { SecondaryNav } from './SecondaryNav'
import { Navigation } from './nav/Navigation'

export const Header = ()=>{
    return(
        <>
            <header class="h-2/3 flex pl-32 pr-32 text-xs"> 
			    <picture class='flex min-w-60 h-full items-center'>
                    <img src={letterLogo.src} class='w-44 object-contain' alt="sendme logo y nombre" />
                </picture>

                <SearchBar/>

                <SecondaryNav/>   


		    </header>
		
            <Navigation/>
        </>
    )
}


