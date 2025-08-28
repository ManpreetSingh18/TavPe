import React from 'react';
import { Link } from 'react-router-dom';

// Define an array of loan features
import PersonalLoanImg from '../assets/images/personalLoan.jpg';
const features = [
  {
    id: 1,
    type: 'Personal Loans',
    image: PersonalLoanImg,
    description: 'Get quick and easy access to funds with Tavpe\'s Personal Loans. Whether you need cash for emergencies, travel, or home improvements, our loans offer competitive interest rates and flexible repayment options. Apply online today!',
    benefits: [
      'Quick application process',
      'Competitive interest rates',
      'Flexible repayment terms',
      'Fast processing time'
    ],
    link: 'personalloan'
  },
  {
    id: 2,
    type: 'Home Loans',
    image: 'https://media.istockphoto.com/id/1209904855/vector/people-buying-property-with-bank-credit.jpg?s=612x612&w=0&k=20&c=3Ww725UYrlWepWTn0kmBtgPzrbGCstJF2E1o2nz44LE=',
    description: 'Secure your dream home with Tavpe\'s Home Loans. Enjoy flexible repayment terms, quick approval, and dedicated customer support. Find the right loan for your home purchase needs today!',
    benefits: [
      'Flexible repayment terms',
      'Quick approval process',
      'Dedicated customer support',
      'Competitive interest rates'
    ],
    link: 'homeloan'
  },
  {
    id: 3,
    type: 'Car Loans',
    image: 'https://img.freepik.com/premium-vector/man-rejoices-approval-car-loan-vector-illustration_357257-1155.jpg',
    description: 'Drive away with your dream car with Tavpe\'s Car Loans. Benefit from low EMI options, fast processing, and attractive interest rates. Explore our car financing solutions today!',
    benefits: [
      'Low EMI options',
      'Fast processing time',
      'Loan for new and used cars',
      'Attractive interest rates'
    ],
    link: 'carloan'
  },
  {
    id: 4,
    type: 'Business Loans',
    image: 'https://media.istockphoto.com/id/1383599809/vector/financing-business-concept.jpg?s=612x612&w=0&k=20&c=QLzhI0erh7sZ5442mr1q-sLaMHG7H4GJyk-aUppC4js=',
    description: 'Fuel your business growth with Tavpe\'s Business Loans. Access flexible loan amounts, competitive interest rates, and expert financial advice. Discover the right business financing solution for you!',
    benefits: [
      'Flexible loan amounts',
      'Competitive interest rates',
      'Quick approval process',
      'Expert financial advice'
    ],
    link: 'businessloan'
  },
  {
    id: 5,
    type: 'Health Insurance',
    image: 'https://img.freepik.com/premium-vector/health-insurance-concept-woman-offer-health-insurance-doctor_101179-2108.jpg',
    description: 'Protect your health and financial well-being with Tavpe\'s Health Insurance plans. Enjoy extensive coverage options, cashless hospitalization, and affordable premiums. Get peace of mind with our health insurance solutions!',
    benefits: [
      'Extensive coverage options',
      'Cashless hospitalisation',
      'Affordable premiums',
      '24/7 customer support'
    ],
    link: 'healthinsurance'
  },
  {
    id: 6,
    type: 'Credit Cards',
    image: 'https://img.freepik.com/free-vector/concept-landing-page-credit-card-payment_52683-25532.jpg',
    description: 'Choose Tavpe\'s Credit Cards tailored to your lifestyle. Earn rewards on every spend, benefit from low annual fees, and enjoy wide global acceptance. Apply for a credit card that suits you today!',
    benefits: [
      'Reward points on every spend',
      'Low annual fees',
      'Wide acceptance globally',
      'Exclusive discounts and offers'
    ],
    link: 'creditcard'
  }
];

export default features;


export const Feature = () => {
  return (
    <div className="bg-gray-100">
    {features.map((feature) => (
      <div key={feature.id} className={`py-24 sm:py-32 lg:flex ${feature.id % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
        <div className="container mx-auto px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between gap-16">
          {/* Image */}
          <div className={`w-full lg:w-1/2 ${feature.id % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}`}>
            <div className="relative overflow-hidden rounded-lg shadow-xl">
              <img
                className="w-full h-auto rounded-3xl"
                src={feature.image}
                alt={`Background for ${feature.type}`}
              />
            </div>
          </div>

          {/* Content */}
          <div className={`w-full lg:w-1/2 ${feature.id % 2 === 0 ? 'order-2' : 'order-1'}`}>
            <div className="text-gray-800">
              <h1 className="mt-2 text-6xl sm:text-6xl font-bold text-gray-900">{feature.type}</h1>
              <p className="mt-6 text-lg text-gray-700">{feature.description}</p>
              <ul className="mt-8 space-y-4">
                {feature.benefits.map((benefit, idx) => (
                  <li key={idx} className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-10">
              <Link to={`/${feature.link}`} className="inline-block px-8 py-4 bg-gray-900 text-white hover:bg-cyan-600 font-semibold rounded-lg text-xl transition duration-300 transform hover:scale-105">
                Apply Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    ))}
  </div>
  );
};
