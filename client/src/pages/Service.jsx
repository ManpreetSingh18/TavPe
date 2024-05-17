import { useAuth } from "../store/auth";

export const Service = () => {
  const { services } = useAuth();

  return (
    <section className="section-services">
      <div className="container">
        <h1 className="main-heading">Services</h1>
      </div>

      <div className="container grid grid-three-cols">
        {services.map((currElem, index) => {
          //console.log(currElem);
          const {service, description, price, provider} = currElem;

          return (
            <div className="card" key={index}>
              <div className="card-img">
                <img
                  src="https://navi.com/static/media/mutualFundHeroWebBanner.1fbfd15e.webp"
                  alt="Our services Info"
                  width="200"
                />
              </div>
              <div className="card-details">
                <div className="grid grid-two-cols">
                  <p>{provider}</p>
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
