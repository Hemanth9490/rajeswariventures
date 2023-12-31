import Image from "next/image"
import "./testimonial.css"

export default function Testimonials() {
    return (
        <>
            <h5 className="testimonial-heading">CUSTOMER REVIEWS</h5>
            <div class="testimonial-container">
                <div class="testimonial">
                    <div class="customer-info">
                        <Image width="500" height="5" class="profile-image" src="/images/testimonials/1.jpg" alt="Customer Profile 1" />
                        <p class="customer-name">John Doe</p>
                    </div>
                    <p class="customer-review">
                    &quot;I had a fantastic experience with Rajeshwari Ventures. Their team was incredibly helpful
                        throughout the entire process. I am thrilled with my new home! Highly recommended.&quot;
                    </p>
                </div>


                <div class="testimonial">
                    <div class="customer-info">
                        <Image width="500" height="5" class="profile-image" src="/images/testimonials/2.jpg" alt="Customer Profile 2" />
                        <p class="customer-name">Jane Smith</p>
                    </div>
                    <p class="customer-review">
                    &quot;Working with Rajeshwari Ventures was a pleasure. They helped me find the perfect location
                        for my dream home. I couldn&apos;t be happier with my purchase!&quot;
                    </p>
                </div>


                <div class="testimonial">
                    <div class="customer-info">
                        <Image width="500" height="5" class="profile-image" src="/images/testimonials/3.jpg" alt="Customer Profile 2" />
                        <p class="customer-name">Jane Smith</p>
                    </div>
                    <p class="customer-review">
                    &quot;Working with Rajeshwari Ventures was a pleasure. They helped me find the perfect location
                        for my dream home. I couldn&apos;t be happier with my purchase!&quot;
                    </p>
                </div>


                <div class="testimonial">
                    <div class="customer-info">
                        <Image width="500" height="5" class="profile-image" src="/images/testimonials/4.jpg" alt="Customer Profile 2" />
                        <p class="customer-name">Jane Smith</p>
                    </div>
                    <p class="customer-review">
                    &quot;Working with Rajeshwari Ventures was a pleasure. They helped me find the perfect location
                        for my dream home. I couldn&apos;t be happier with my purchase!&quot;
                    </p>
                </div>


                <div class="testimonial">
                    <div class="customer-info">
                        <Image width="500" height="5" class="profile-image" src="/images/testimonials/5.jpg" alt="Customer Profile 2" />
                        <p class="customer-name">Jane Smith</p>
                    </div>
                    <p class="customer-review">
                    &quot;Working with Rajeshwari Ventures was a pleasure. They helped me find the perfect location
                        for my dream home. I couldn&apos;t be happier with my purchase!&quot;
                    </p>
                </div>


                <div class="testimonial">
                    <div class="customer-info">
                        <Image width="500" height="5" class="profile-image" src="/images/testimonials/1.jpg" alt="Customer Profile 2" />
                        <p class="customer-name">Jane Smith</p>
                    </div>
                    <p class="customer-review">
                    &quot;Working with Rajeshwari Ventures was a pleasure. They helped me find the perfect location
                        for my dream home. I couldn&apos;t be happier with my purchase!&quot;
                    </p>
                </div>

            </div>
        </>
    )
}