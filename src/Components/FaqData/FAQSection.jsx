import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import goal from '../../assets/goal.png';

const faqData = [
  { title: "Mission", content: "Our mission at Sorob is to protect and promote human rights by actively standing against oppression, inequality, and injustice. We strive to raise awareness, advocate for marginalized voices, and work towards creating a society where every individual can enjoy their fundamental freedoms, regardless of race, gender, or background. Sorob is committed to challenging tyranny and irregularity, ensuring that human dignity is upheld for all." },
  { title: "Vision", content: "Our vision is a world where human rights are universally respected, and justice prevails in every corner of society. We envision a future where Sorob’s efforts contribute to the eradication of systemic oppression, where equality is the foundation of every community, and where individuals can live without fear of discrimination or violence. Through continuous advocacy and action, Sorob aims to inspire a global movement for lasting change, where everyone has the opportunity to thrive in a just and fair world." },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-7xl mx-auto px-6 md:px-12 py-16">
    
      <div className="flex flex-col-reverse md:flex-row-reverse items-center gap-12">
        {/* FAQ Section */}
        <div className="space-y-6 w-full md:w-1/2">
        <h2 className="text-xl md:text-4xl font-bold text-center mb-8">Achieve Goal</h2>
          <div>
            <p className="text-lg font-semibold">
            At Sorob, our goal is to foster a world where human rights are respected and upheld for all. We aim to dismantle systems of oppression, challenge tyranny, and expose irregularities that hinder justice. Through advocacy, awareness campaigns, and direct action, Sorob strives to empower marginalized communities and amplify their voices. By standing steadfastly against injustice, we seek to inspire change, promote equality, and ensure that every individual can live with freedom, dignity, and respect
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
