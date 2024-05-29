import { useAuth } from "../store/auth";

export const Service = () => {
  const { services } = useAuth();

  return (
    <section className="section-services">
      <div className="container">
        {/* <h1 className="main-heading" >Services</h1> */}
      </div>
      <h1  >Our Services</h1>
      <div className="container grid grid-three-cols">
        {services.map((currElem, index) => {
          const { service, description, price, provider, imageUrl } = currElem;

          return (
            <div className="card" key={index}>
              <div className="card-img">
                <img
                  src={imageUrl}
                  alt="Our services Info"
                  width="200"
                />
              </div>
              <div className="card-details">
                <div className="grid grid-two-cols">
                  {/* <p>{provider}</p> */}
                  <a href="/contact">
                    <button className="btn service-btn">Apply Now</button>
                  </a>
                  <p>{price}</p>
                </div>
                <h2>{service}</h2>
                <p>{description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
