import React from 'react';

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-4 border rounded shadow-lg">
        <p>{label}</p>
        <p>NAV: ${Number(payload[0].value).toLocaleString()}</p>
        {payload[1] && <p>Change: {payload[1].value}%</p>}
      </div>
    );
  }
  return null;
};

export default CustomTooltip;
