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
              <h1>About TavPe? </h1>
              <p>
                About TavPrasad Loans At TavPrasad Loans, we understand that
                financial needs can arise unexpectedly and sometimes require
                urgent attention. That's why we are committed to providing
                hassle-free loan solutions tailored to meet your specific
                requirements.
              </p>
              <h2>Why Choose us? </h2>
              <p>
                Flexible Loan Options: Whether you need a personal loan for
                unexpected expenses or a business loan to fuel growth, we offer
                a range of flexible loan options to suit your needs.
              </p>
              <p>
                Quick Approval Process: We understand the importance of time,
                which is why we have streamlined our approval process to ensure
                quick turnaround times.
              </p>
              <p>
                Competitive Interest Rates: Our aim is to make borrowing
                affordable for everyone. That's why we offer competitive
                interest rates,
              </p>
              <p>
                Dedicated Customer Support: Have questions or need assistance?
                Our team of experienced professionals is here to help
              </p>

              <div className="btn btn-group">
                <NavLink to="/applyloan">
                  <button className="btn">Apply for Loan</button>
                </NavLink>
                <NavLink to="/emi">
                  <button className="btn secondary-btn">Check EMI</button>
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
