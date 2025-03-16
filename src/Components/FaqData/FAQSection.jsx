import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import goal from '../../assets/goal.jpg';

const faqData = [
  { title: "Mission", content: "Our mission is to create a sustainable impact through donations and support for communities in need." },
  { title: "Vision", content: "We envision a world where generosity leads to positive change and empowerment for everyone." },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-7xl mx-auto px-6 md:px-12 py-16">
    
      <div className="flex flex-col md:flex-row items-center gap-12">
        {/* FAQ Section */}
        <div className="space-y-6 w-full md:w-1/2">
        <h2 className="text-xl md:text-4xl font-bold text-center mb-8">Achieve Goal sorob</h2>
          <div>
            <p className="text-lg font-semibold">
            At Sorob, we believe in turning aspirations into achievements. Our goal is to provide the support, tools, and resources you need to reach your full potential. Whether it’s in the professional or personal realm, Sorob is here to guide you on your path to success..
            </p>
          </div>
          {faqData.map((faq, index) => (
            <div key={index} className="rounded-lg shadow-md overflow-hidden">
              <button
                className="w-full flex justify-between items-center p-4 text-lg font-semibold text-white bg-red-600 border-red-500 border-2"
                onClick={() => toggleFAQ(index)}
              >
                {faq.title}
                {openIndex === index ? <FaMinus /> : <FaPlus />}
              </button>
              {openIndex === index && (
                <div className="p-4 text-gray-700">{faq.content}</div>
              )}
           </div>
          ))}
        </div>

        {/* Image Section */}
        <div className="w-full md:w-1/2">
          <img className="rounded-xl w-full object-cover" src={goal} alt="Goal" />
        </div>
      </div>
    </div>
  );
}
