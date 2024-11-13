// src/components/ui/Card.js
import React from 'react';

// Main Card component
const Card = ({ children }) => {
  return (
    <div className="border rounded shadow-lg p-4">
      {children}
    </div>
  );
};

// CardHeader subcomponent
Card.Header = ({ children }) => (
  <div className="border-b p-4 font-semibold">
    {children}
  </div>
);

// CardTitle subcomponent
Card.Title = ({ children }) => (
  <h2 className="text-xl font-bold">
    {children}
  </h2>
);

// CardContent subcomponent
Card.Content = ({ children }) => (
  <div className="p-4">
    {children}
  </div>
);

export default Card;
