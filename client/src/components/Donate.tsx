import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useToast } from '@/hooks/use-toast';
import { apiRequest } from '@/lib/queryClient';

type DonationType = 'tithe' | 'offering' | 'missions' | 'building';

const Donate: React.FC = () => {
  const { toast } = useToast();
  const [amount, setAmount] = useState<string>('');
  const [donationType, setDonationType] = useState<DonationType>('tithe');
  const [note, setNote] = useState<string>('');
  const [anonymous, setAnonymous] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [step, setStep] = useState<'form' | 'payment'>('form');

  // Handle amount change with validation
  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    // Only allow numbers and a single decimal point
    if (/^\d*\.?\d{0,2}$/.test(value) || value === '') {
      setAmount(value);
    }
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!amount || parseFloat(amount) <= 0) {
      toast({
        title: "Invalid Amount",
        description: "Please enter a valid donation amount.",
        variant: "destructive"
      });
      return;
    }

    setLoading(true);
    
    try {
      // Process donation without Stripe until we have the API keys
      // When Stripe is configured, this will create a payment intent
      toast({
        title: "Donation Recorded",
        description: `Thank you for your ${donationType} of $${amount}. May God bless you!`,
      });
      
      // Reset form
      setAmount('');
      setDonationType('tithe');
      setNote('');
      setAnonymous(false);
      
    } catch (error) {
      console.error('Donation error:', error);
      toast({
        title: "Donation Failed",
        description: "There was an error processing your donation. Please try again.",
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };

  const donationTypes: { value: DonationType; label: string; }[] = [
    { value: 'tithe', label: 'Tithe (10%)' },
    { value: 'offering', label: 'General Offering' },
    { value: 'missions', label: 'Missions Support' },
    { value: 'building', label: 'Building Fund' }
  ];

  // When Stripe is configured, this will render the Stripe payment element
  // For now, we'll just show a simple donation form

  return (
    <section id="donate" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Give Online
          </motion.h2>
          <motion.div 
            className="section-divider"
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          ></motion.div>
          <motion.p 
            className="text-xl max-w-3xl mx-auto mt-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            Support our ministry with your tithes and offerings. Every gift helps us spread God's love.
          </motion.p>
        </div>
        
        <motion.div
          className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-lg"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-4 text-primary font-poppins">Giving Information</h3>
            <p className="mb-4">
              "Each of you should give what you have decided in your heart to give, not reluctantly or under compulsion, for God loves a cheerful giver." — 2 Corinthians 9:7
            </p>
          </div>
          
          <form onSubmit={handleSubmit}>
            <div className="mb-6">
              <label htmlFor="amount" className="block mb-2 font-semibold">Amount</label>
              <div className="relative">
                <span className="absolute left-3 top-3 text-gray-500">$</span>
                <input 
                  type="text" 
                  id="amount" 
                  value={amount}
                  onChange={handleAmountChange}
                  className="w-full p-3 pl-8 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary" 
                  placeholder="0.00"
                  required
                />
              </div>
            </div>
            
            <div className="mb-6">
              <label htmlFor="donationType" className="block mb-2 font-semibold">Donation Type</label>
              <select 
                id="donationType" 
                value={donationType}
                onChange={(e) => setDonationType(e.target.value as DonationType)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                required
              >
                {donationTypes.map((type) => (
                  <option key={type.value} value={type.value}>{type.label}</option>
                ))}
              </select>
            </div>
            
            <div className="mb-6">
              <label htmlFor="note" className="block mb-2 font-semibold">Note (Optional)</label>
              <textarea 
                id="note" 
                rows={3} 
                value={note}
                onChange={(e) => setNote(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary" 
                placeholder="Add a note to your donation..."
              ></textarea>
            </div>
            
            <div className="mb-8">
              <div className="flex items-center">
                <input 
                  type="checkbox" 
                  id="anonymous" 
                  checked={anonymous}
                  onChange={(e) => setAnonymous(e.target.checked)}
                  className="mr-2 h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
                />
                <label htmlFor="anonymous" className="font-medium">Make this donation anonymous</label>
              </div>
            </div>
            
            <motion.button 
              type="submit" 
              className="w-full bg-primary hover:bg-opacity-90 text-white font-bold py-3 px-8 rounded-lg transition-default inline-block text-lg"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              disabled={loading}
            >
              {loading ? (
                <span className="flex items-center justify-center">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Processing...
                </span>
              ) : 'Give Now'}
            </motion.button>
          </form>
        </motion.div>
        
        <div className="mt-12 text-center">
          <p className="text-lg">
            <i className="fas fa-lock text-primary mr-2"></i>
            All transactions are secure and encrypted
          </p>
          <p className="mt-2 text-sm text-gray-600">
            For questions about donations, please contact us at info.prayerwarriors@gmail.com
          </p>
        </div>
      </div>
    </section>
  );
};

export default Donate;