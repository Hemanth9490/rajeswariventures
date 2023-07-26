import Image from "next/image"
import "./TopCities.css"

export default function TopCities() {
    return (
        <>
             <h5 className="service-heading">Top Cities</h5>
                
                <h1 class="Explore">Explore Real Estate in Andhra Pradesh</h1>
                <div class="row">
                <div class="service">
                    <img src="/images/Rajampet.jpg" class="image"/>
                        <h1 class="header">Rajampet</h1>
                        <p class="para">100+ properties</p> 
                </div>
                <div class="service ">
                    <img src="/images/nellore.jpg" class="image"/>
                        <h1 class="header">Nellore</h1>
                        <p class="para">100+ properties</p>
                </div>
                <div class="service">
                    <img  src="/images/kadapa.jpg" class="image" />
                        <h1 class="header">Kadapa</h1>
                        <p class="para">100+ properties</p>
                </div>   
                <div class="service">
                    <img  src="/images/chitvel.jpg" class="image" />  
                        <h1 class="header">Chitvel</h1>
                        <p class="para">100+ properties</p>
                </div> 
                <div class="service">
                    <img src="/images/tirupathi.jpg" class="image"/>     
                        <h1 class="header">Thirupathi</h1>
                        <p class="para">100+ properties</p> 
                </div>    
            </div>
        
      
        </>
    )
}