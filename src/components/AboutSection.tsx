import React from "react";
import RossJamesImg from "../assets/ROSS-James.jpg";
import DeependraMehtaImg from "../assets/DEEPENDRA.jpg";

const AboutSection: React.FC = () => {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          About Agri-BioFuels Global
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {/* Ross James */}
          <div className="w-full flex flex-col items-center">
            <img
              src={RossJamesImg}
              alt="Ross James - Founder & CEO"
              className="w-full max-w-xs h-80 object-cover border border-gray-200 rounded-lg shadow-md"
            />
            <div className="text-center mt-3 font-bold text-lg text-gray-800">
              Ross James – Founder & CEO
            </div>
            <div className="text-center mt-1 text-sm text-gray-600 max-w-md mx-auto">
              With over 20 years in renewable energy, Ross leads our mission to revolutionize sustainable fuel production.
            </div>
          </div>

          {/* Deependra Mehta */}
          <div className="w-full flex flex-col items-center">
            <img
              src={DeependraMehtaImg}
              alt="Deependra Mehta - Co-Founder & CTO"
              className="w-full max-w-xs h-80 object-cover border border-gray-200 rounded-lg shadow-md"
            />
            <div className="text-center mt-3 font-bold text-lg text-gray-800">
              Deependra Mehta – Co-Founder & CTO
            </div>
            <div className="text-center mt-1 text-sm text-gray-600 max-w-md mx-auto">
              A pioneer in biomass conversion technology, Deependra drives our technical innovation and process optimization.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
