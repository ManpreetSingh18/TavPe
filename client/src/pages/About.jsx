import { NavLink } from "react-router-dom";
import { Analytics } from "../components/Analytics";
import { useAuth } from "../store/auth";
export const About = () => {
  const { user } = useAuth();
  return (
    <>
      <main>
        <section className="section-hero">
          <div className="container grid grid-two-cols">
            <div className="hero-content">
              {/* <p>We care to cure your Health</p> */}
              <p>Welcome {user ? user.username : "to our website"}</p>
              <h1>Why Choose Us? </h1>
              <p>
                Expertise: Our team comprises seasoned financial professionals
                dedicated to staying abreast of the ever-changing landscape of
                the lending industry.
              </p>
              <p>
                Personalization: Recognizing the individuality of each borrower,
                we craft bespoke solutions tailored precisely to your financial
                requirements and aspirations. 
              </p>
              <p>
                Customer-Centric Focus: Your satisfaction is paramount to us. We
                go above and beyond to provide unparalleled support, addressing
                your concerns with diligence and care.
              </p>
              <p>
                Affordability: Offering competitive rates without compromising
                on the quality of service is our promise.
              </p>
              <p>
                Reliability: Depend on us to be your steadfast partner in
                navigating the lending landscape. We guarantee round-the-clock
                availability and steadfast support.
              </p>

              <div className="btn btn-group">
                <NavLink to="/contact">
                  <button className="btn">Apply for Loan</button>
                </NavLink >
                <NavLink to="/">
                  <button className="btn secondary-btn">learn more</button>
                </NavLink>
              </div>
            </div>
            <div className="hero-image">
              <img
                src="https://public-assets.prod.navi-tech.in/navi-website-assests/images/home-loan/web/HL_web.webp"
                alt="coding buddies "
                width="1000"
                height="1900"
              />
            </div>
          </div>
        </section>
      </main>

      <Analytics />
    </>
  );
};
