export const MainInfoCreator = ({title, description})=>{
   
    return(
        <li class="flex grow pt-5">
            <section class="flex flex-col items-center w-full">
                <b>
                    {title}
                </b>
                
                <p class='text-xs w-2/3 text-center'>
                    {description}
                </p>
            </section>
        </li>
    )
    
}
