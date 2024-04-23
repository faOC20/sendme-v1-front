import { MainDecoration } from "../../../assets/images/MainDecoration"
import { MainHeaderInfo } from "./MainHeaderInfo"

export const MainHeader = ()=>{
    return <>
        <div class="relative w-full h-60">
            <div class="absolute w-full -top-14 z-10">
                <MainDecoration/> 
            </div>

            <MainHeaderInfo/>
        
        </div>
    
    </>
}
