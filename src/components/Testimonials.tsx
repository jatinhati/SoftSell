import React from 'react';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    content: "SoftSell helped us recover over $50,000 from unused Adobe and Microsoft licenses. The process was incredibly smooth, and we received payment faster than expected.",
    author: "Sarah Johnson",
    position: "IT Director",
    company: "Horizon Media Group"
  },
  {
    content: "As a growing startup, we were able to save significantly by purchasing pre-owned licenses through SoftSell. Their verification process gave us complete confidence in the transaction.",
    author: "David Chen",
    position: "CTO",
    company: "FinTech Innovations"
  }
];

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            What Our Customers Say
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Hear from businesses that have successfully bought and sold software licenses through our platform.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-gray-50 dark:bg-gray-800 rounded-xl p-8 relative shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Quote className="absolute text-blue-100 dark:text-gray-700 h-16 w-16 -top-6 -left-6 rotate-180" />
              <div className="relative">
                <p className="text-gray-700 dark:text-gray-300 italic text-lg mb-6 leading-relaxed">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-blue-600 dark:bg-blue-700 flex items-center justify-center text-white font-bold text-lg">
                    {testimonial.author.charAt(0)}
                  </div>
                  <div className="ml-4">
                    <div className="font-bold text-gray-900 dark:text-white">
                      {testimonial.author}
                    </div>
                    <div className="text-gray-600 dark:text-gray-400 text-sm">
                      {testimonial.position}, {testimonial.company}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;