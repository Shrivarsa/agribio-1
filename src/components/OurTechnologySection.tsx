import React from 'react';
import { motion } from 'framer-motion';
import techIllustration from '../assets/your-tech-image.png';
import comparisonImage from '../assets/comparison-image.png';

const OurTechnologySection: React.FC = () => {
  return (
    <section className="bg-white text-gray-900 py-16 px-6 lg:px-32" id="technology">
      <div className="max-w-6xl mx-auto space-y-16">

        {/* Heading */}
        <motion.h2 
          className="text-4xl font-bold text-center"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Our Technology
        </motion.h2>

        {/* CAT-HTR Explained */}
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <img src={techIllustration} alt="CAT-HTR Illustration" className="rounded-xl shadow-md" />
          <div>
            <h3 className="text-2xl font-semibold mb-4">What is CAT-HTR?</h3>
            <p className="text-lg text-gray-700">
              The Catalytic Hydrothermal Reactor (CAT-HTR) is a cutting-edge process that transforms agricultural waste into renewable fuels using high-pressure, high-temperature water...
            </p>
          </div>
        </div>

        {/* Comparative Advantage */}
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-2xl font-semibold mb-4">Why it's Better</h3>
            <p className="text-lg text-gray-700 mb-4">
              Compared to incineration and composting, CAT-HTR offers higher energy recovery, lower emissions, and handles mixed feedstocks more efficiently.
            </p>
            {/* Could be a future table or interactive tab */}
          </div>
          <img src={comparisonImage} alt="Technology Comparison" className="rounded-xl shadow-md" />
        </div>

        {/* Process Animation (Placeholder) */}
        <div className="text-center">
          <h3 className="text-2xl font-semibold mb-6">How it Works</h3>
          <div className="w-full h-64 bg-gray-100 flex items-center justify-center rounded-lg shadow-inner">
            <span className="text-gray-500">[Animated Diagram Here]</span>
          </div>
        </div>

        {/* Technology Validation */}
        <div className="bg-gray-50 p-6 rounded-xl shadow-md">
          <h3 className="text-2xl font-semibold mb-4">Proven and Validated</h3>
          <ul className="list-disc pl-6 text-lg text-gray-700 space-y-2">
            <li>Backed by scientific research</li>
            <li>Patents granted across multiple countries</li>
            <li>Successful pilot and demo programs</li>
          </ul>
        </div>

        {/* Adaptability */}
        <div>
          <h3 className="text-2xl font-semibold mb-4">Adaptable to Many Environments</h3>
          <p className="text-lg text-gray-700">
            CAT-HTR works with diverse feedstocks including agricultural waste, forestry residues, and food waste. Its modular design allows deployment in rural, urban, or industrial settings.
          </p>
        </div>

      </div>
    </section>
  );
};

export default OurTechnologySection;
