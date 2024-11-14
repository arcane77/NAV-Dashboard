import React from 'react';

// main card
const Card = ({ children }) => {
  return (
    <div className="border rounded shadow-lg p-4">
      {children}
    </div>
  );
};

Card.Header = ({ children }) => (
  <div className="border-b p-4 font-semibold">
    {children}
  </div>
);

Card.Title = ({ children }) => (
  <h2 className="text-xl font-bold">
    {children}
  </h2>
);

Card.Content = ({ children }) => (
  <div className="p-4">
    {children}
  </div>
);

export default Card;
