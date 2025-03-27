import { motion } from "framer-motion";

const CaseStudy = () => {
  const caseStudy = {
    image: "https://i.ibb.co.com/sGz1QcT/story-1.jpg",
    title: "The July Revolution of 2025: A New Dawn for Bangladesh",
    description:
      "The July Revolution of 2025 reshaped Bangladesh's socio-political landscape. Sorob, a key force in the movement, led protests, exposed corruption, and demanded justice for the oppressed.",
    actionText: "Read Full Case Study",
    content: {
      introduction:
        "The July Revolution of 2025 was a historic uprising in Bangladesh, driven by years of systemic corruption, economic inequality, and human rights violations...",
      background: {
        politicalClimate:
          "By early 2025, Bangladesh was gripped by unrest. Government policies had deepened economic disparities...",
        triggers:
          "The revolution was triggered by a series of incidents: mass arrests of activists, suppression of protests, and election fraud allegations...",
      },
      sorobInvolvement: {
        mobilization:
          "Sorob played a pivotal role in mobilizing citizens, organizing peaceful demonstrations, and providing legal aid...",
        exposingTruth:
          "Through investigative journalism, Sorob uncovered police brutality, corruption, and censorship...",
        internationalSupport:
          "Sorob engaged with global human rights organizations, drawing international pressure on Bangladesh’s crisis...",
      },
      impact: {
        politicalChanges:
          "The revolution forced electoral reforms, leading to policy changes and government resignations...",
        legalVictories:
          "Sorob’s legal team successfully challenged unlawful detentions, setting a precedent for future human rights cases...",
      },
      futureActions: {
        continuedStruggle:
          "Although the revolution brought progress, Sorob continues to fight for fair elections and press freedom...",
        nextSteps:
          "Sorob plans to expand legal aid, educate citizens on civil rights, and strengthen democratic institutions...",
      },
    },
  };

  return (
    <div className=" py-10 px-6 md:px-20">
      {/* Header */}
      <div className="max-w-5xl mx-auto text-center">
        <motion.h1
          className="text-4xl md:text-5xl font-bold mb-4"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          {caseStudy.title}
        </motion.h1>
        <motion.p
          className="text-lg text-gray-300 mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          {caseStudy.description}
        </motion.p>
      </div>

      {/* Image */}
      <motion.div
        className="max-w-4xl mx-auto mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <img
          src={caseStudy.image}
          alt="Case Study"
          className="w-full h-auto rounded-lg shadow-lg"
        />
      </motion.div>

      {/* Content Sections */}
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Introduction */}
        <motion.div
          className=" p-6 rounded-lg shadow-lg"
          whileHover={{ scale: 1.02 }}
        >
          <h2 className="text-2xl font-semibold text-red-400">Introduction</h2>
          <p className="text-gray-600 mt-2">{caseStudy.content.introduction}</p>
        </motion.div>

        {/* Background */}
        <motion.div className=" p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-red-400">Background</h2>
          <p className="text-gray-600 mt-2">{caseStudy.content.background.politicalClimate}</p>
          <p className="text-gray-600 mt-2">{caseStudy.content.background.triggers}</p>
        </motion.div>

        {/* Sorob Involvement */}
        <motion.div className=" p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-red-400">Sorob's Role</h2>
          <p className="text-gray-600 mt-2">{caseStudy.content.sorobInvolvement.mobilization}</p>
          <p className="text-gray-600 mt-2">{caseStudy.content.sorobInvolvement.exposingTruth}</p>
          <p className="text-gray-600 mt-2">{caseStudy.content.sorobInvolvement.internationalSupport}</p>
        </motion.div>

        {/* Impact */}
        <motion.div className=" p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-red-400">Impact</h2>
          <p className="text-gray-600 mt-2">{caseStudy.content.impact.politicalChanges}</p>
          <p className="text-gray-600 mt-2">{caseStudy.content.impact.legalVictories}</p>
        </motion.div>

        {/* Future Actions */}
        <motion.div className=" p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-red-400">Future Actions</h2>
          <p className="text-gray-600 mt-2">{caseStudy.content.futureActions.continuedStruggle}</p>
          <p className="text-gray-600 mt-2">{caseStudy.content.futureActions.nextSteps}</p>
        </motion.div>
      </div>

    </div>
  );
};

export default CaseStudy;
