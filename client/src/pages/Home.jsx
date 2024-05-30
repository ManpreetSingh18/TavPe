import { Analytics } from "../components/Analytics";
import { Carousel } from "./carousel";
import { Service } from "./Service";
export const Home = () => {
  return (
    //checking the staging directory
    <>
      <main>
        <section className="section-hero">
        <Carousel/>
        
          {/* <div className="container grid grid-two-cols">
            
            <div className="hero-content">
              <p>Achieve your finacial goal</p>
              <h1>Loans for For Daily Expenses</h1>
              <p>
              Welcome to TavPrasad! We offer personalized loan solutions for personal, business/professional, car (new and used), and home/property needs. Achieve your financial goals with us today!



              </p>
              <div className="btn btn-group">
                <a href="/contact">
                  <button className="btn">Apply Loan now</button>
                </a>
                <a href="/services">
                  <button className="btn secondary-btn">Our Services</button>
                </a>
              </div>
            </div>

           
            <div className="hero-image">
              <img
                src="https://public-assets.prod.navi-tech.in/navi-website-assests/images/personal-loan/Web/CL_web.webp"
                alt="coding together"
                width="400"
                height="500"
              />
            </div>
          </div> */}
        </section>
      </main>

      {/* 2nd section  */}

      
      <Service/>
      {/* <Analytics /> */}

      {/* 3rd section  */}
        
      {/* commented Section */}
      {/* <section className="section-hero">
        <div className="container grid grid-two-cols">
          
          <div className="hero-image">
            <img
              src="https://navi.com/static/media/InterestRateAndChargesImgNew.ea1a2610.webp"
              alt="coding together"
              width="400"
              height="500"
            />
          </div>

          <div className="hero-content">
            <p>Apply Loan now</p>
            <h1>Get Started Today</h1>
            <p>
              Our team comprises seasoned financial professionals dedicated to
              staying abreast of the ever-changing landscape of the lending
              industry. We thrive on leveraging our extensive experience to
              guide you through the complexities of loan options and market
              trends.
            </p>
            <div className="btn btn-group">
              <a href="/contact">
                <button className="btn">Apply Loan now</button>
              </a>
              <a href="/emi">
                <button className="btn secondary-btn">Calculate Emi</button>
              </a>
            </div>
          </div>
        </div>
      </section> */}
      <Analytics />
    </>
  );
};
