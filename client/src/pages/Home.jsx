import { Analytics } from "../components/Analytics";
import { Carousel } from "./carousel";
import { Service } from "./Service";
import { Testimonial } from "../components/testimonial";
import { Feature } from "../components/Features";
export const Home = () => {
  return (
    <>
      <main>
        <section className="section-hero">
        <Carousel/>
        
         
        </section>
      </main>

      {/* 2nd section  */}

      <h1 className="mt-10 mb-10">Our Services</h1>
      <Service/>
      
      
      <Feature/>
      
      <Testimonial/>

    
      <Analytics />
    </>
  );
};
