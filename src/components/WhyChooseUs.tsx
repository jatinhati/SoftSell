import React from 'react';
import { Shield, Clock, Coins, Award } from 'lucide-react';

const benefits = [
  {
    icon: <Shield className="h-10 w-10 text-blue-600 dark:text-blue-400" />,
    title: 'Secure Transactions',
    description: 'Bank-level security for all license transfers with full audit trails and compliance verification.'
  },
  {
    icon: <Clock className="h-10 w-10 text-blue-600 dark:text-blue-400" />,
    title: 'Fast Turnaround',
    description: 'Most licenses are valued within minutes and sold within 72 hours of listing.'
  },
  {
    icon: <Coins className="h-10 w-10 text-blue-600 dark:text-blue-400" />,
    title: 'Maximum Value',
    description: 'Our market analytics ensure you get the best possible price for your software licenses.'
  },
  {
    icon: <Award className="h-10 w-10 text-blue-600 dark:text-blue-400" />,
    title: 'Expert Support',
    description: 'Dedicated account managers assist with compliance, transfer, and payment questions.'
  }
];

const WhyChooseUs: React.FC = () => {
  return (
    <section id="why-choose-us" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Why Choose SoftSell
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Trusted by thousands of businesses worldwide to maximize the value of their software investments.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="p-3 bg-blue-50 dark:bg-blue-900/30 inline-block rounded-lg mb-4">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                {benefit.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-blue-600 dark:bg-blue-700 rounded-2xl p-8 text-white shadow-xl">
          <div className="grid md:grid-cols-3 gap-8 items-center">
            <div className="text-center md:text-left">
              <div className="text-4xl font-bold mb-2">5,000+</div>
              <div className="text-blue-100">Successful Transactions</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">$25M+</div>
              <div className="text-blue-100">Saved by Customers</div>
            </div>
            <div className="text-center md:text-right">
              <div className="text-4xl font-bold mb-2">98%</div>
              <div className="text-blue-100">Customer Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;