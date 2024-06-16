import { useState } from "react";

export const FAQ = ({faqs}) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null); // Collapse the active accordion if clicked again
    } else {
      setActiveIndex(index); // Expand the clicked accordion
    }
  };

   
  return (
    <section className="py-10 bg-gray-50 sm:py-16 lg:py-24">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        
          <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-6xl">
            Frequently Asked Questions
          </h2>
        
        

        <div className="max-w-7xl mx-auto mt-8 space-y-4 md:mt-16">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="transition-all duration-200 bg-white border border-gray-200 shadow-lg cursor-pointer hover:bg-gray-50"
              onClick={() => toggleAccordion(index)}
            >
              <button
                type="button"
                className=" bg-white flex items-center justify-between w-full px-4 py-5 sm:p-6"
              >
                <span className="flex text-2xl font-semibold  text-customRed-500">
                  {faq.question}
                </span>

                <svg
                  className={`w-6 h-6 text-gray-400 ${
                    activeIndex === index ? "rotate-180" : ""
                  }`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              <div
                className={`${
                  activeIndex === index ? "block" : "hidden"
                } px-4 pb-5 sm:px-6 sm:pb-6`}
              >
                <p>
                  {faq.answer}{" "}
                  <a
                    href="#"
                    title=""
                    className="text-blue-600 transition-all duration-200 hover:underline"
                  >
                    aliqua dolor
                  </a>{" "}
                  do amet sint. Velit officia consequat duis enim velit mollit.
                </p>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-gray-600 textbase mt-9">
          Didn’t find the answer you are looking for?{" "}
          <a
            href="#"
            title=""
            className="font-medium text-blue-600 transition-all duration-200 hover:text-blue-700 focus:text-blue-700 hover:underline"
          >
            Contact our support
          </a>
        </p>
      </div>
    </section>
  );
};

