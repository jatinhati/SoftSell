import React, { useState } from 'react';
import { AlertCircle, Check } from 'lucide-react';

type FormData = {
  softwareName: string;
  version: string;
  licenseType: string;
  seats: string;
  expiryDate: string;
  price: string;
  description: string;
};

type FormErrors = {
  [key in keyof FormData]?: string;
};

const AddSoftware: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    softwareName: '',
    version: '',
    licenseType: '',
    seats: '',
    expiryDate: '',
    price: '',
    description: ''
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const licenseTypes = [
    'Perpetual',
    'Subscription',
    'Volume',
    'Enterprise',
    'OEM',
    'Other'
  ];

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    
    if (!formData.softwareName.trim()) {
      newErrors.softwareName = 'Software name is required';
    }
    
    if (!formData.version.trim()) {
      newErrors.version = 'Version is required';
    }
    
    if (!formData.licenseType) {
      newErrors.licenseType = 'Please select a license type';
    }
    
    if (!formData.seats.trim()) {
      newErrors.seats = 'Number of seats is required';
    } else if (isNaN(Number(formData.seats)) || Number(formData.seats) < 1) {
      newErrors.seats = 'Please enter a valid number of seats';
    }
    
    if (!formData.expiryDate.trim()) {
      newErrors.expiryDate = 'Expiry date is required';
    }
    
    if (!formData.price.trim()) {
      newErrors.price = 'Price is required';
    } else if (isNaN(Number(formData.price)) || Number(formData.price) < 0) {
      newErrors.price = 'Please enter a valid price';
    }
    
    if (!formData.description.trim()) {
      newErrors.description = 'Description is required';
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
          softwareName: '',
          version: '',
          licenseType: '',
          seats: '',
          expiryDate: '',
          price: '',
          description: ''
        });
      }, 1500);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    if (errors[name as keyof FormData]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  return (
    <section id="add-software" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            List Your Software
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Add your software license details below to start the selling process. Our team will review your listing and contact you within 24 hours.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {isSubmitted ? (
            <div className="bg-green-50 dark:bg-green-900/30 p-8 rounded-xl text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-300 mb-4">
                <Check className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Listing Submitted!</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Your software listing has been received. Our team will review it and get back to you shortly.
              </p>
              <button
                onClick={() => setIsSubmitted(false)}
                className="mt-6 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md font-medium transition-colors"
              >
                Add Another Listing
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-white dark:bg-gray-900 rounded-xl shadow-xl p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="softwareName" className="block text-gray-700 dark:text-gray-300 font-medium mb-2">
                    Software Name
                  </label>
                  <input
                    type="text"
                    id="softwareName"
                    name="softwareName"
                    value={formData.softwareName}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:outline-none transition-colors
                      ${errors.softwareName
                        ? 'border-red-300 focus:border-red-500 focus:ring-red-200 dark:border-red-700 dark:focus:ring-red-900'
                        : 'border-gray-300 focus:border-blue-500 focus:ring-blue-200 dark:border-gray-700 dark:focus:ring-blue-900'
                      }
                      bg-white dark:bg-gray-800 text-gray-900 dark:text-white`}
                    placeholder="e.g., Adobe Creative Cloud"
                  />
                  {errors.softwareName && (
                    <p className="mt-1 text-red-600 dark:text-red-400 text-sm flex items-center">
                      <AlertCircle className="w-4 h-4 mr-1" />
                      {errors.softwareName}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="version" className="block text-gray-700 dark:text-gray-300 font-medium mb-2">
                    Version
                  </label>
                  <input
                    type="text"
                    id="version"
                    name="version"
                    value={formData.version}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:outline-none transition-colors
                      ${errors.version
                        ? 'border-red-300 focus:border-red-500 focus:ring-red-200 dark:border-red-700 dark:focus:ring-red-900'
                        : 'border-gray-300 focus:border-blue-500 focus:ring-blue-200 dark:border-gray-700 dark:focus:ring-blue-900'
                      }
                      bg-white dark:bg-gray-800 text-gray-900 dark:text-white`}
                    placeholder="e.g., 2024"
                  />
                  {errors.version && (
                    <p className="mt-1 text-red-600 dark:text-red-400 text-sm flex items-center">
                      <AlertCircle className="w-4 h-4 mr-1" />
                      {errors.version}
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

                <div>
                  <label htmlFor="seats" className="block text-gray-700 dark:text-gray-300 font-medium mb-2">
                    Number of Seats
                  </label>
                  <input
                    type="number"
                    id="seats"
                    name="seats"
                    value={formData.seats}
                    onChange={handleChange}
                    min="1"
                    className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:outline-none transition-colors
                      ${errors.seats
                        ? 'border-red-300 focus:border-red-500 focus:ring-red-200 dark:border-red-700 dark:focus:ring-red-900'
                        : 'border-gray-300 focus:border-blue-500 focus:ring-blue-200 dark:border-gray-700 dark:focus:ring-blue-900'
                      }
                      bg-white dark:bg-gray-800 text-gray-900 dark:text-white`}
                    placeholder="e.g., 10"
                  />
                  {errors.seats && (
                    <p className="mt-1 text-red-600 dark:text-red-400 text-sm flex items-center">
                      <AlertCircle className="w-4 h-4 mr-1" />
                      {errors.seats}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="expiryDate" className="block text-gray-700 dark:text-gray-300 font-medium mb-2">
                    License Expiry Date
                  </label>
                  <input
                    type="date"
                    id="expiryDate"
                    name="expiryDate"
                    value={formData.expiryDate}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:outline-none transition-colors
                      ${errors.expiryDate
                        ? 'border-red-300 focus:border-red-500 focus:ring-red-200 dark:border-red-700 dark:focus:ring-red-900'
                        : 'border-gray-300 focus:border-blue-500 focus:ring-blue-200 dark:border-gray-700 dark:focus:ring-blue-900'
                      }
                      bg-white dark:bg-gray-800 text-gray-900 dark:text-white`}
                  />
                  {errors.expiryDate && (
                    <p className="mt-1 text-red-600 dark:text-red-400 text-sm flex items-center">
                      <AlertCircle className="w-4 h-4 mr-1" />
                      {errors.expiryDate}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="price" className="block text-gray-700 dark:text-gray-300 font-medium mb-2">
                    Asking Price (USD)
                  </label>
                  <input
                    type="number"
                    id="price"
                    name="price"
                    value={formData.price}
                    onChange={handleChange}
                    min="0"
                    step="0.01"
                    className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:outline-none transition-colors
                      ${errors.price
                        ? 'border-red-300 focus:border-red-500 focus:ring-red-200 dark:border-red-700 dark:focus:ring-red-900'
                        : 'border-gray-300 focus:border-blue-500 focus:ring-blue-200 dark:border-gray-700 dark:focus:ring-blue-900'
                      }
                      bg-white dark:bg-gray-800 text-gray-900 dark:text-white`}
                    placeholder="e.g., 999.99"
                  />
                  {errors.price && (
                    <p className="mt-1 text-red-600 dark:text-red-400 text-sm flex items-center">
                      <AlertCircle className="w-4 h-4 mr-1" />
                      {errors.price}
                    </p>
                  )}
                </div>
              </div>

              <div className="mt-6">
                <label htmlFor="description" className="block text-gray-700 dark:text-gray-300 font-medium mb-2">
                  Description
                </label>
                <textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  rows={5}
                  className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:outline-none transition-colors
                    ${errors.description
                      ? 'border-red-300 focus:border-red-500 focus:ring-red-200 dark:border-red-700 dark:focus:ring-red-900'
                      : 'border-gray-300 focus:border-blue-500 focus:ring-blue-200 dark:border-gray-700 dark:focus:ring-blue-900'
                    }
                    bg-white dark:bg-gray-800 text-gray-900 dark:text-white`}
                  placeholder="Please provide additional details about the software license..."
                ></textarea>
                {errors.description && (
                  <p className="mt-1 text-red-600 dark:text-red-400 text-sm flex items-center">
                    <AlertCircle className="w-4 h-4 mr-1" />
                    {errors.description}
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
                  {isSubmitting ? 'Submitting...' : 'Submit Listing'}
                </button>
              </div>

              <p className="mt-4 text-sm text-gray-500 dark:text-gray-400 text-center">
                By submitting this listing, you confirm that you have the right to sell this software license and agree to our <a href="#" className="text-blue-600 dark:text-blue-400 hover:underline">Terms of Service</a>.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default AddSoftware;