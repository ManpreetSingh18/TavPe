import React from 'react';

export const Service = () => {
  const services = [
    {
      _id: '6648c91bb94a6a0d78de24e7',
      service: 'Personal Loan',
      description: 'Affordable personal loans for various personal needs such as medical expenses, education, or travel.',
      price: '₹50,000 - ₹1,00,00,000',
      provider: 'Muthoot',
      imageUrl: 'https://www.fincover.com/wp-content/uploads/2020/10/personal-loan3.png'
    },
    {
      _id: '6648c91bb94a6a0d78de24e8',
      service: 'Business Loan',
      description: 'Tailored loans to support small businesses and professionals in expanding their operations.',
      price: '₹50,000 - ₹1,00,00,000',
      provider: 'Muthoot',
      imageUrl: 'https://www.fincover.com/wp-content/uploads/2020/10/property-loan.png'
    },
    {
      _id: '6648c91bb94a6a0d78de24e9',
      service: 'Car Loan (New/Used)',
      description: 'Flexible financing options for purchasing a new/old car with competitive interest rates.',
      price: '₹2,00,000 - ₹1,00,00,000',
      provider: 'Muthoot',
      imageUrl: 'https://www.fincover.com/wp-content/uploads/2020/10/car-loan.png'
    },
    {
      _id: '6648c91bb94a6a0d78de24eb',
      service: 'Home/Property Loan',
      description: 'Comprehensive home loans for purchasing or renovating property with easy repayment options.',
      price: '₹5,00,000 - ₹1,00,00,000',
      provider: 'Muthoot',
      imageUrl: 'https://www.fincover.com/wp-content/uploads/2020/10/property-loan.png'
    },
    {
      _id: '6648c91bb94a6a0d78de24ec',
      service: 'Health Insurance',
      description: 'Affordable health insurance plans providing extensive coverage for medical expenses.',
      price: '₹50,000 - ₹1,00,00,000',
      provider: 'Muthoot',
      imageUrl: 'https://www.fincover.com/wp-content/uploads/2020/03/health-ins01.png'
    },
    {
      _id: '6648c91bb94a6a0d78de24ed',
      service: 'Credit Card',
      description: 'Credit cards with attractive rewards and cashback offers tailored to your spending habits.',
      price: '₹50,000 - ₹1,00,00,000',
      provider: 'Muthoot',
      imageUrl: 'https://www.fincover.com/wp-content/uploads/2024/01/Best-Credit-card.png'
    }
  ];

  return (
    <section className="section-services py-10">
      <div className="container mx-auto px-4">
       
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div className="bg-white rounded-lg shadow-md overflow-hidden transition duration-300 transform hover:scale-105 hover:bg-gray-100 cursor-pointer" key={service._id}>
              <div className="h-56 overflow-hidden">
                <img
                  src={service.imageUrl}
                  alt={service.service}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <a href="/applyloan">
                    <button className="bg-gray-900 text-white py-2 px-4 rounded-lg hover:bg-gray-800 transition duration-200">
                      Apply Now
                    </button>
                  </a>
                  <p className="text-lg font-bold text-gray-900">{service.price}</p>
                </div>
                <h2 className="text-xl font-semibold mb-2">{service.service}</h2>
                <p className="text-gray-700">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};


