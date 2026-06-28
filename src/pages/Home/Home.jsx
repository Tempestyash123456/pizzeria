import './Home.css'; 

export default function Home() {
    return (
        <div className="home">
            <section className="home__story">
                <h2 className="home__story-title">
                    Our Story
                </h2>

                <p className="home__story-text">
                    We believe in good. We launched Fresh Pan Pizza Best Excuse Awards on
                    our Facebook fan page. Fans were given situations where they had to
                    come up with wacky and fun excuses. The person with the best excuse
                    won the Best Excuse Badge and won Pizzeria&apos;s vouchers. Their
                    enthusiastic response proved that Pizzeria&apos;s Fresh Pan Pizza is
                    the Tastiest Pan Pizza. Ever!
                </p>

                <p className="home__story-text">
                    Ever since we launched the Tastiest Pan Pizza ever, people have not
                    been able to resist the softest, cheesiest, crunchiest, butteriest
                    Domino&apos;s Fresh Pan Pizza. They have been leaving the stage in the
                    middle of a performance and even finding excuses to be disqualified in
                    a football match.
                </p>

                <p className="home__story-text">
                    We launched Fresh Pan Pizza Best Excuse Awards on our Facebook fan
                    page. Fans were given situations where they had to come up with wacky
                    and fun excuses. The person with the best excuse won the Best Excuse
                    Badge and won Domino&apos;s vouchers. Their enthusiastic response
                    proved that Pizzeria&apos;s Fresh Pan Pizza is the Tastiest Pan Pizza.
                    Ever!
                </p>
            </section>

            <section className="home__section home__section-ingredients">
                <div className="home__section-img">
                    <img src="https://media.istockphoto.com/id/1155240408/photo/table-filled-with-large-variety-of-food.jpg?s=1024x1024&w=is&k=20&c=y-Lbco14g-CbkNKEaNId872h0XaYxtiRWwrh35aAAOk=" alt="Fresh ingredients" className="home__img"/>
                </div>

                <div className="home__section-content">
                    <h3 className="home__section-title">
                        Ingredients
                    </h3>

                    <p className="home__section-text">
                        We&apos;re ruthless about goodness. We have no qualms about tearing
                        up a day-old lettuce leaf (straight from the farm), or steaming a
                        baby carrot. Cut. Chop. Steam. Steam. Stir. Stir. While they&apos;re
                        still young and fresh - that&apos;s our motto. It makes the kitchen
                        a better place.
                    </p>
                </div>
            </section>

            <section className="home__section home__section-chefs">
                <div className="home__section-content">
                    <h3 className="home__section-title">
                        Our Chefs
                    </h3>

                    <p className="home__section-text">
                        They make bacon sing and salads dance. They create magic with
                        skill, knowledge, passion, and stirring spoons (among other
                        things). They make goodness so good, it doesn&apos;t know what to
                        do with itself. We do though. We send it to you.
                    </p>
                </div>

                <div className="home__section-img">
                    <img src="https://static.vecteezy.com/system/resources/previews/033/692/644/non_2x/chef-preparing-food-in-the-kitchen-at-the-restaurant-professional-chef-cooking-gourmet-chef-cooking-in-a-commercial-kitchen-ai-generated-free-photo.jpg" alt="Our Chefs" className="home__img"/>
                </div>
            </section>

            <section className="home__section home__section-delivery">
                <div className="home__section-img">
                    <img src="https://www.shutterstock.com/image-vector/45-min-clock-stopwatch-isolated-600w-2563065869.jpg" alt="45 minute delivery" className="home__img home__img-delivery"/>
                </div>

                <div className="home__section-content">
                    <h3 className="home__section-title">
                        45 Min Delivery
                    </h3>

                    <p className="home__section-text">
                        We promise to deliver your hot, fresh pizza to your doorstep
                        within 45 minutes. Because good food should not make you wait.
                    </p>
                </div>
            </section>
        </div>
    );
}