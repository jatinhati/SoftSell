import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <section className="pt-28 md:pt-40 pb-20 bg-gradient-to-br from-white to-blue-50 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0 md:pr-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
              Unlock the Value of Your Unused Software Licenses
            </h1>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              SoftSell helps businesses turn idle software licenses into revenue. 
              Our platform makes selling unused licenses simple, secure, and profitable.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <a 
                href="#contact" 
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold text-center transition-transform hover:scale-105 transform duration-200 shadow-lg"
              >
                Sell My Licenses
              </a>
              <a 
                href="#how-it-works" 
                className="bg-white dark:bg-gray-800 text-blue-600 dark:text-blue-400 border border-blue-600 dark:border-blue-400 px-8 py-3 rounded-lg font-semibold text-center hover:bg-blue-50 dark:hover:bg-gray-700 transition-colors"
              >
                Learn How It Works
              </a>
            </div>
          </div>
          <div className="md:w-1/2 relative">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-xl p-6 md:p-8 transform rotate-1 transition-transform hover:rotate-0 duration-300">
              <div className="aspect-w-16 aspect-h-9 mb-6 overflow-hidden rounded-lg">
                <img 
                  src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Business professionals reviewing software licenses" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="space-y-2">
                <div className="bg-blue-50 dark:bg-gray-700 h-4 rounded-full w-3/4"></div>
                <div className="bg-blue-50 dark:bg-gray-700 h-4 rounded-full"></div>
                <div className="bg-blue-50 dark:bg-gray-700 h-4 rounded-full w-5/6"></div>
              </div>
              <div className="absolute -top-6 -right-6 bg-green-500 text-white text-lg font-bold py-2 px-4 rounded-lg shadow-lg transform -rotate-6">
                Save 40%+
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;