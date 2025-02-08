import React from 'react';
import { useInView } from 'react-intersection-observer';

export default function Hero() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section id="home" className="relative bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 lg:mt-16 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <h1 ref={ref} className={`text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <span className="block xl:inline">Transform Your Business</span>{' '}
                <span className="block text-primary-600 xl:inline">with Digital Innovation</span>
              </h1>
              <p className={`mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0 transition-all duration-1000 delay-300 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              TechNova Solutions is a leading IT software company specializing in cutting-edge software development, cloud computing, and AI-driven solutions. With a global presence and a commitment to innovation, TechNova empowers businesses with scalable and high-performance technology solutions.
              </p>
              <div className={`mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start transition-all duration-1000 delay-500 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <div className="rounded-md shadow">
                  <a
                    href="#contact"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 md:py-4 md:text-lg md:px-10"
                  >
                    Get Started
                  </a>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <a
                    href="#services"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-primary-700 bg-primary-100 hover:bg-primary-200 md:py-4 md:text-lg md:px-10"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <div className="h-56 w-full bg-gradient-to-r from-primary-400 to-primary-600 sm:h-72 md:h-96 lg:w-full lg:h-full"></div>
      </div>
    </section>
  );
}
