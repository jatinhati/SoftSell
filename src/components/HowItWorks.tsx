import React from 'react';
import { Upload, DollarSign, CreditCard } from 'lucide-react';

const steps = [
  {
    icon: <Upload className="h-12 w-12 text-blue-600 dark:text-blue-400 mb-4" />,
    title: 'Upload Your Licenses',
    description: 'Easily upload your unused or underutilized software licenses to our secure platform.'
  },
  {
    icon: <DollarSign className="h-12 w-12 text-blue-600 dark:text-blue-400 mb-4" />,
    title: 'Get a Valuation',
    description: 'Our AI-powered system provides an instant market valuation based on current demand and trends.'
  },
  {
    icon: <CreditCard className="h-12 w-12 text-blue-600 dark:text-blue-400 mb-4" />,
    title: 'Get Paid Quickly',
    description: 'Once your license sells, receive payment directly to your account within 48 hours.'
  }
];

const HowItWorks: React.FC = () => {
  return (
    <section id="how-it-works" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            How SoftSell Works
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Our streamlined process makes it easy to turn unused software licenses into cash.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="bg-gray-50 dark:bg-gray-800 rounded-xl p-8 text-center transition-all duration-300 hover:shadow-xl hover:transform hover:-translate-y-2"
            >
              <div className="flex justify-center">
                {step.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                {step.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {step.description}
              </p>
              <div className="mt-6">
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 font-bold">
                  {index + 1}
                </span>
              </div>
            </div>
          ))}
        </div>
        
        <div className="flex justify-center mt-12">
          <div className="bg-blue-50 dark:bg-gray-800 p-4 md:p-6 rounded-lg border-l-4 border-blue-600 dark:border-blue-400 max-w-3xl">
            <p className="text-blue-800 dark:text-blue-300 font-medium">
              "SoftSell has partnerships with over 200+ software vendors, ensuring seamless license transfers and full compliance with terms of service."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;