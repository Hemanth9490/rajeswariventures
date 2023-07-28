import Image from "next/image"
import "./services.css"

export default function Services() {
    return ( <>
    <h5 className="service-heading">GET STARTED WITH EXPLORING REAL ESTATE OPTIONS</h5>
        <div class="gallery">
            <div class="service">
                <Image width="500" height="500" src="/images/explore-images/1.png" alt="Early-stage funding" />
                <h3>Buying a Home</h3>
                {/* <p>Discover Your Dream Home with Rajeshwari Ventures. Begin Your Journey!</p> */}
            </div>
            <div class="service">
                <Image width="500" height="500" src="/images/explore-images/Home Service.jpg" alt="Business consulting" />
                <h3>Home Services</h3>
                {/* <p>Find Your Perfect Rental Home with Rajeshwari Ventures. Start Now!</p> */}
            </div>
            <div class="service">
                <Image width="500" height="500" src="/images/explore-images/2.png" alt="Strategic partnerships" />
                <h3>Invest in Real Estate</h3>
                {/* <p>Secure Your Future: Invest in Real Estate with Rajeshwari Ventures.</p> */}
            </div>
            <div class="service">
                <Image width="500" height="500" src="/images/explore-images/4.png" alt="Market research" />
                <h3>Sell/Rent your property</h3>
                {/* <p>Unlock Value: Sell or Rent Your Property with Rajeshwari Ventures.</p> */}
            </div>
            <div class="service">
                <Image width="500" height="500" src="/images/explore-images/3.png" alt="Early-stage funding" />
                <h3>Plots/Land</h3>
                {/* <p>nvest in Prime Plots/Land - Rajeshwari Ventures. Secure Your Future!</p> */}
            </div>
             
        </div></>
    )
}