import React from 'react';
import { useInView } from 'react-intersection-observer';
import {
  CodeBracketIcon,
  CloudArrowUpIcon,
  DevicePhoneMobileIcon,
  ShieldCheckIcon,
} from '@heroicons/react/24/outline';

const services = [
  {
    name: 'Custom Software Development',
    description: 'Tailored solutions to meet your specific business needs and requirements.',
    icon: CodeBracketIcon,
  },
  {
    name: 'Cloud Solutions',
    description: 'Secure and scalable cloud infrastructure services for your growing business.',
    icon: CloudArrowUpIcon,
  },
  {
    name: 'Mobile App Development',
    description: 'Native and cross-platform mobile applications for iOS and Android.',
    icon: DevicePhoneMobileIcon,
  },
  {
    name: 'Cyber Security',
    description: 'Comprehensive security solutions to protect your digital assets.',
    icon: ShieldCheckIcon,
  },
  {
    name: 'Data Analytics',
    description: 'Turn your data into actionable insights.',
    icon:www.streamlinehq.com/icons/download/graph-bar-increase,
  },
  {
    name: 'IT Consulting',
    description: 'Strategic technology consulting and digital transformation',
    icon: ShieldCheckIcon,
  },
];

export default function Services() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section id="services" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Our Services
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Comprehensive IT solutions to drive your business forward
          </p>
        </div>

        <div
          ref={ref}
          className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4"
        >
          {services.map((service, index) => (
            <div
              key={service.name}
              className={`relative p-6 bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 transform ${
                inView
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div>
                <div className="absolute h-12 w-12 rounded-md bg-primary-500 flex items-center justify-center">
                  <service.icon
                    className="h-6 w-6 text-white"
                    aria-hidden="true"
                  />
                </div>
                <div className="ml-16">
                  <h3 className="text-xl font-medium text-gray-900">
                    {service.name}
                  </h3>
                  <p className="mt-2 text-base text-gray-500">
                    {service.description}
                  </p>
                </div>
              </div>
              <div className="mt-6 ml-16">
                <a
                  href="#contact"
                  className="text-base font-medium text-primary-600 hover:text-primary-500"
                >
                  Learn more →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
