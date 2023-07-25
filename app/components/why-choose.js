import "./why-choose.css"

export default function WhyChoose() {
    return (
        <div class="why-choose-us">
            <h2>ABOUT US</h2>
            <p>Welcome to Rajeswari Ventures! We are a leading venture capital firm dedicated to investing in innovative
                startups and businesses. Our mission is to support and empower entrepreneurs in their journey to success.
            </p>
            <p>At Rajeswari Ventures, we are committed to helping you find the perfect property that suits your needs.
                Whether you're looking to buy, sell, or rent, our team of experienced real estate agents is here to guide
                you every step of the way.</p>
            <h2 className="feature-heading">WHY CHOOSE RAJESWARI VENTURES</h2>
            <div class="feature fade-in">
                <img src="/images/Extensive Property Listings.jpg" alt="Expert Team" />
                <p><b>Extensive Property Listings:</b> We have an extensive database of properties that cater to various
                    budgets and preferences. Whether you're searching for a cozy apartment or a spacious family home, we
                    have something for everyone.</p>
            </div>
            <div class="feature fade-in feature-reverse">
                <img src="/images/annie-spratt-mcrQoYT8VFE-unsplash.jpg" alt="Innovative Projects" />
                <p><b>Expert Guidance:</b> Our team of skilled real estate agents is well-versed in the local market trends. We
                    offer expert advice and insights to help you make informed decisions, whether you're a first-time
                    buyer or a seasoned investor.</p>
            </div>
            <div class="feature fade-in">
                <img src="/images/jj-ying-UcI5OAPD820-unsplash.jpg" alt="Strategic Approach" />
                <p><b>Seamless Buying and Selling Process:</b> We understand that buying or selling a property can be
                    overwhelming. Our dedicated team is committed to making the process as smooth as possible, handling
                    all the paperwork and negotiations on your behalf.</p>
            </div>
            <div class="feature fade-in feature-reverse">
                <img src="/images/erik-mclean-aielvGxZB0g-unsplash.jpg" alt="Global Network" />
                <p><b>Personalized Service:</b> We believe in building lasting relationships with our clients. Our personalized
                    approach ensures that we understand your unique requirements and find the best solutions tailored to
                    your needs.</p>
            </div>
        </div>
    )
}