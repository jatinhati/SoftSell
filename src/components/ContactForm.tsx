import React, { useState } from 'react';
import { Check, AlertCircle } from 'lucide-react';

type FormData = {
  name: string;
  email: string;
  company: string;
  licenseType: string;
  message: string;
};

type FormErrors = {
  [key in keyof FormData]?: string;
};

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    company: '',
    licenseType: '',
    message: ''
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const licenseTypes = [
    'Microsoft 365',
    'Adobe Creative Cloud',
    'Autodesk',
    'Oracle',
    'SAP',
    'Salesforce',
    'Other'
  ];

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!formData.company.trim()) {
      newErrors.company = 'Company name is required';
    }
    
    if (!formData.licenseType) {
      newErrors.licenseType = 'Please select a license type';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      setIsSubmitting(true);
      
      // Simulate API call
      setTimeout(() => {
        setIsSubmitting(false);
        setIsSubmitted(true);
        setFormData({
          name: '',
          email: '',
          company: '',
          licenseType: '',
          message: ''
        });
      }, 1500);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (errors[name as keyof FormData]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Get in Touch
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Ready to sell your unused licenses or need more information? Fill out the form below and our team will contact you within 24 hours.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {isSubmitted ? (
            <div className="bg-green-50 dark:bg-green-900/30 p-8 rounded-xl text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-300 mb-4">
                <Check className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Thank You!</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Your message has been received. A member of our team will reach out to you shortly.
              </p>
              <button
                onClick={() => setIsSubmitted(false)}
                className="mt-6 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md font-medium transition-colors"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-white dark:bg-gray-900 rounded-xl shadow-xl p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-gray-700 dark:text-gray-300 font-medium mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:outline-none transition-colors
                      ${errors.name
                        ? 'border-red-300 focus:border-red-500 focus:ring-red-200 dark:border-red-700 dark:focus:ring-red-900'
                        : 'border-gray-300 focus:border-blue-500 focus:ring-blue-200 dark:border-gray-700 dark:focus:ring-blue-900'
                      }
                      bg-white dark:bg-gray-800 text-gray-900 dark:text-white`}
                    placeholder="John Doe"
                  />
                  {errors.name && (
                    <p className="mt-1 text-red-600 dark:text-red-400 text-sm flex items-center">
                      <AlertCircle className="w-4 h-4 mr-1" />
                      {errors.name}
                    </p>
                  )}
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-gray-700 dark:text-gray-300 font-medium mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:outline-none transition-colors
                      ${errors.email
                        ? 'border-red-300 focus:border-red-500 focus:ring-red-200 dark:border-red-700 dark:focus:ring-red-900'
                        : 'border-gray-300 focus:border-blue-500 focus:ring-blue-200 dark:border-gray-700 dark:focus:ring-blue-900'
                      }
                      bg-white dark:bg-gray-800 text-gray-900 dark:text-white`}
                    placeholder="john@example.com"
                  />
                  {errors.email && (
                    <p className="mt-1 text-red-600 dark:text-red-400 text-sm flex items-center">
                      <AlertCircle className="w-4 h-4 mr-1" />
                      {errors.email}
                    </p>
                  )}
                </div>
                
                <div>
                  <label htmlFor="company" className="block text-gray-700 dark:text-gray-300 font-medium mb-2">
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:outline-none transition-colors
                      ${errors.company
                        ? 'border-red-300 focus:border-red-500 focus:ring-red-200 dark:border-red-700 dark:focus:ring-red-900'
                        : 'border-gray-300 focus:border-blue-500 focus:ring-blue-200 dark:border-gray-700 dark:focus:ring-blue-900'
                      }
                      bg-white dark:bg-gray-800 text-gray-900 dark:text-white`}
                    placeholder="Acme Inc."
                  />
                  {errors.company && (
                    <p className="mt-1 text-red-600 dark:text-red-400 text-sm flex items-center">
                      <AlertCircle className="w-4 h-4 mr-1" />
                      {errors.company}
                    </p>
                  )}
                </div>
                
                <div>
                  <label htmlFor="licenseType" className="block text-gray-700 dark:text-gray-300 font-medium mb-2">
                    License Type
                  </label>
                  <select
                    id="licenseType"
                    name="licenseType"
                    value={formData.licenseType}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:outline-none transition-colors
                      ${errors.licenseType
                        ? 'border-red-300 focus:border-red-500 focus:ring-red-200 dark:border-red-700 dark:focus:ring-red-900'
                        : 'border-gray-300 focus:border-blue-500 focus:ring-blue-200 dark:border-gray-700 dark:focus:ring-blue-900'
                      }
                      bg-white dark:bg-gray-800 text-gray-900 dark:text-white`}
                  >
                    <option value="">Select License Type</option>
                    {licenseTypes.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                  {errors.licenseType && (
                    <p className="mt-1 text-red-600 dark:text-red-400 text-sm flex items-center">
                      <AlertCircle className="w-4 h-4 mr-1" />
                      {errors.licenseType}
                    </p>
                  )}
                </div>
              </div>
              
              <div className="mt-6">
                <label htmlFor="message" className="block text-gray-700 dark:text-gray-300 font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:outline-none transition-colors
                    ${errors.message
                      ? 'border-red-300 focus:border-red-500 focus:ring-red-200 dark:border-red-700 dark:focus:ring-red-900'
                      : 'border-gray-300 focus:border-blue-500 focus:ring-blue-200 dark:border-gray-700 dark:focus:ring-blue-900'
                    }
                    bg-white dark:bg-gray-800 text-gray-900 dark:text-white`}
                  placeholder="Please describe the software licenses you're interested in selling..."
                ></textarea>
                {errors.message && (
                  <p className="mt-1 text-red-600 dark:text-red-400 text-sm flex items-center">
                    <AlertCircle className="w-4 h-4 mr-1" />
                    {errors.message}
                  </p>
                )}
              </div>
              
              <div className="mt-8">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-medium transition-colors
                    ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </div>
              
              <p className="mt-4 text-sm text-gray-500 dark:text-gray-400 text-center">
                By submitting this form, you agree to our <a href="#" className="text-blue-600 dark:text-blue-400 hover:underline">Privacy Policy</a> and <a href="#" className="text-blue-600 dark:text-blue-400 hover:underline">Terms of Service</a>.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default ContactForm;