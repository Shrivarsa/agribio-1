import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Users, BarChart3, Droplets, Leaf, Handshake, Lightbulb, Heart } from 'lucide-react';
import AnimatedCounter from './animations/AnimatedCounter';

const AboutSection: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const stats = [
    {
      icon: <Users className="h-8 w-8 text-green-600" />,
      title: "Jobs Created",
      value: 15000,
      suffix: "+",
      description: "Direct and indirect employment across the supply chain"
    },
    {
      icon: <BarChart3 className="h-8 w-8 text-blue-600" />,
      title: "GDP Contribution",
      value: 0.5,
      suffix: "%",
      prefix: "+",
      description: "Estimated contribution to regional GDP in partner countries"
    },
    {
      icon: <Droplets className="h-8 w-8 text-amber-600" />,
      title: "SAF Produced",
      value: 250,
      suffix: "M Liters",
      description: "Annual production capacity at full scale operations"
    },
    {
      icon: <Leaf className="h-8 w-8 text-green-700" />,
      title: "CO₂ Reduced",
      value: 1.8,
      suffix: "M Tonnes",
      description: "Annual carbon emission reduction through our technology"
    }
  ];

  const values = [
    {
      icon: <Lightbulb className="h-6 w-6" />,
      title: "Innovation",
      description: "Pioneering sustainable solutions through cutting-edge technology"
    },
    {
      icon: <Leaf className="h-6 w-6" />,
      title: "Sustainability",
      description: "Committed to environmental stewardship and circular economy"
    },
    {
      icon: <Heart className="h-6 w-6" />,
      title: "Community",
      description: "Empowering local communities through economic opportunities"
    },
    {
      icon: <Handshake className="h-6 w-6" />,
      title: "Partnership",
      description: "Building strong relationships with stakeholders globally"
    }
  ];

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="about" className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeInUp}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            About Agri-BioFuels Global
          </h2>
          <div className="w-24 h-1 bg-green-600 mx-auto mt-4 mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We're revolutionizing the renewable energy sector by creating sustainable aviation and maritime fuels from agricultural waste.
          </p>
        </motion.div>

        {/* Company Story */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-w-16 aspect-h-9 rounded-2xl overflow-hidden">
              <img
                src="https://images.pexels.com/photos/2132171/pexels-photo-2132171.jpeg"
                alt="Agri-BioFuels facility"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-green-600 text-white p-6 rounded-lg shadow-xl">
              <p className="text-2xl font-bold">Est. 2020</p>
              <p className="text-sm">Leading the Green Revolution</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Story</h3>
            <p className="text-gray-600 mb-6">
              Founded in 2020 by Ross James and Deependra Mehta, Agri-BioFuels Global emerged from a shared vision to transform agricultural waste into sustainable aviation fuel. Our journey began with a groundbreaking partnership with Licella, whose CAT-HTR technology formed the foundation of our innovative approach.
            </p>
            <p className="text-gray-600">
              Today, we're at the forefront of the sustainable fuel revolution, working with farmers, airlines, and shipping companies to create a cleaner future for transportation while empowering agricultural communities worldwide.
            </p>
          </motion.div>
        </div>

        {/* Leadership Team */}
        <div className="mb-20">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="text-2xl font-bold text-center text-gray-800 mb-12"
          >
            Leadership Team
          </motion.h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden group"
            >
              <div className="aspect-w-16 aspect-h-9 relative overflow-hidden">
                <img
                  src="/src/assets/ross-james.jpg"
                  alt="Ross James"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h4 className="text-xl font-bold text-gray-800">Ross James</h4>
                <p className="text-green-600 mb-4">Founder & CEO</p>
                <p className="text-gray-600">
                  With over 20 years in renewable energy, Ross leads our mission to revolutionize sustainable fuel production.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden group"
            >
              <div className="aspect-w-16 aspect-h-9 relative overflow-hidden">
                <img
                  src="/src/assets/deependra-mehta.jpg"
                  alt="Deependra Mehta"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h4 className="text-xl font-bold text-gray-800">Deependra Mehta</h4>
                <p className="text-green-600 mb-4">Co-Founder & CTO</p>
                <p className="text-gray-600">
                  A pioneer in biomass conversion technology, Deependra drives our technical innovation and process optimization.
                </p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Corporate Values */}
        <div className="mb-20">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="text-2xl font-bold text-center text-gray-800 mb-12"
          >
            Our Values
          </motion.h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow"
              >
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4 text-green-600">
                  {value.icon}
                </div>
                <h4 className="text-xl font-semibold text-gray-800 mb-2">{value.title}</h4>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center justify-center mb-4">
                {stat.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-800 text-center mb-2">{stat.title}</h3>
              <div className="text-3xl font-bold text-center text-gray-900 mb-3">
                {stat.prefix && <span>{stat.prefix}</span>}
                <AnimatedCounter
                  from={0}
                  to={stat.value}
                  duration={2000}
                  decimals={stat.value % 1 !== 0 ? 1 : 0}
                />
                {stat.suffix && <span>{stat.suffix}</span>}
              </div>
              <p className="text-sm text-gray-600 text-center">{stat.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
