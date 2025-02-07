import React from "react";

interface TotalAmountProps {
  amount: number;
}

const TotalAmount: React.FC<TotalAmountProps> = ({ amount }) => {
  return (
    <div className="bg-gray-800 text-white p-4 rounded-lg mt-6">
      <h2 className="text-lg font-semibold">Total Amount</h2>
      <p className="text-xl font-bold">${amount.toFixed(2)}</p>
    </div>
  );
};

export default TotalAmount;
