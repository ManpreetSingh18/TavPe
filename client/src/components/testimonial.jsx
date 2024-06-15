import React from 'react';

// Define an array of testimonials
const testimonials = [
  {
    id: 1,
    imgSrc: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/karen-nelson.png",
    name: "Rajesh Kumar",
    title: "Simplified Home Loan Process",
    occupation: "IT Professional",
    text: "Tavpe made buying our dream home a reality. The entire loan process was transparent and hassle-free. Their team guided us every step of the way and made sure we got the best interest rate available. We couldn't be happier!",
  },
  {
    id: 2,
    imgSrc: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/roberta-casas.png",
    name: "Priya Singh",
    title: "Excellent Service for Business Loans",
    occupation: "Entrepreneur",
    text: "Securing a business loan through Tavpe was a game-changer for our startup. Their support and professionalism were unmatched. The process was swift, and we received the funds much quicker than expected. Tavpe truly understands the needs of small businesses.",
  },
  {
    id: 3,
    imgSrc: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png",
    name: "Mohit Sharma",
    title: "Quick and Easy Personal Loan",
    occupation: "Freelance Designer",
    text: "I needed a personal loan for a medical emergency and Tavpe came through when I needed it the most. The application process was straightforward, and I got the funds in just a few days. Their customer service is exceptional and empathetic.",
  },
  {
    id: 4,
    imgSrc: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/joseph-mcfall.png",
    name: "Rohan Pandey",
    title: "Seamless Car Loan Experience",
    occupation: "Software Engineer",
    text: "Thanks to Tavpe, I was able to purchase my dream car without any hassle. The car loan process was smooth and the interest rates were very competitive. I'm extremely satisfied with the service and support I received from Tavpe.",
  },
  {
    id: 5,
    imgSrc: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png",
    name: "Anita Desai",
    title: "Efficient Loan Approval",
    occupation: "Accountant",
    text: "Tavpe provided an efficient and transparent loan approval process. Their team was supportive throughout, ensuring that all my questions were answered promptly. I'm very pleased with their service and would recommend Tavpe to others.",
  },
  {
    id: 6,
    imgSrc: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/sofia-jones.png",
    name: "Vikram Patel",
    title: "Smooth Loan Repayment Options",
    occupation: "Marketing Manager",
    text: "Tavpe offered flexible and smooth loan repayment options that fit my financial situation perfectly. Their customer support team was always available to assist me with any concerns. Highly recommend their services!",
  },
];

// TestimonialItem Component
const TestimonialItem = ({ imgSrc, name, title, occupation, text }) => (
  <figure className="flex flex-col bg-gray-200 justify-center items-center p-8 text-center bg-black-50 border-b border-black-200 md:p-12">
    <blockquote className="mx-auto mb-8 max-w-2xl text-black-500">
      <h3 className="text-lg font-semibold text-black-900">{title}</h3>
      <p className="my-4">{text}</p>
    </blockquote>
    <figcaption className="flex justify-center items-center space-x-3">
      <img className="w-9 h-9 rounded-full" src={imgSrc} alt={`Profile of ${name}`} />
      <div className="space-y-0.5 font-medium text-left">
        <div>{name}</div>
        <div className="text-sm font-light text-black-500">{occupation}</div>
      </div>
    </figcaption>
  </figure>
);

// Main Testimonial Component
export const Testimonial = () => {
  return (
    <div>
      <section className="bg-white text-black">
        <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6">
          <div className="mx-auto max-w-screen-sm">
            <h2 className="mb-4 text-7xl tracking-tight font-extrabold text-black-900">
              Testimonials
            </h2>
            <p className="mb-8 text-black-500 lg:mb-16 sm:text-2xl">
              Hear what our satisfied customers have to say about Tavpe's exceptional loan services.
            </p>
          </div>
          <div className="grid mb-8 lg:mb-12 lg:grid-cols-2">
            {testimonials.map((testimonial) => (
              <TestimonialItem
                key={testimonial.id}
                imgSrc={testimonial.imgSrc}
                name={testimonial.name}
                title={testimonial.title}
                occupation={testimonial.occupation}
                text={testimonial.text}
              />
            ))}
          </div>
          <div className="text-center">
            <a
              href="#"
              className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-black-900 focus:outline-none bg-white rounded-lg border border-black-200 hover:bg-black-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-black-200"
            >
              Show more...
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
