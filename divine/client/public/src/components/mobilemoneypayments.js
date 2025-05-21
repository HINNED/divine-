// client/src/components/MobileMoneyPayment.js
import React, { useState } from 'react';

const MobileMoneyPayment = ({ amount, onSuccess }) => {
  const [phone, setPhone] = useState('');
  const [network, setNetwork] = useState('MTN');
  const [isProcessing, setIsProcessing] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsProcessing(true);
    
    try {
      // In a real app, this would call your backend API
      const response = await fetch('/api/payments/mobile-money', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ phone, amount, network })
      });
      
      const data = await response.json();
      if (data.success) {
        onSuccess(data.transactionId);
      }
    } catch (error) {
      console.error('Payment error:', error);
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-lg font-semibold mb-4">Mobile Money Payment</h3>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Phone Number</label>
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="e.g. 256742934093"
            className="w-full px-3 py-2 border rounded-md"
            required
          />
        </div>
        
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Mobile Network</label>
          <select
            value={network}
            onChange={(e) => setNetwork(e.target.value)}
            className="w-full px-3 py-2 border rounded-md"
          >
            <option value="MTN">MTN Mobile Money</option>
            <option value="Airtel">Airtel Money</option>
          </select>
        </div>
        
        <div className="mb-4 p-3 bg-gray-100 rounded-md">
          <p className="font-semibold">Amount to pay: UGX {amount.toLocaleString()}</p>
        </div>
        
        <button
          type="submit"
          disabled={isProcessing}
          className={`w-full py-2 px-4 rounded-md text-white ${isProcessing ? 'bg-blue-400' : 'bg-blue-600 hover:bg-blue-700'}`}
        >
          {isProcessing ? 'Processing...' : 'Pay with Mobile Money'}
        </button>
      </form>
    </div>
  );
};

export default MobileMoneyPayment;