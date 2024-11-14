import React, { useEffect, useState, useMemo } from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend
} from 'recharts';
import CustomTooltip from './CustomToolTip';

const ChartSection = ({ data }) => {
  const [showDots, setShowDots] = useState(window.innerWidth >= 768);

  // y-axis domain with small buffer for visible fluctuations
  const yDomain = useMemo(() => {
    const navValues = data.map(d => d.nav);
    const minNav = Math.min(...navValues);
    const maxNav = Math.max(...navValues);
    const padding = (maxNav - minNav) * 0.1; 
    return [minNav - padding, maxNav + padding];
  }, [data]);

  useEffect(() => {
    const handleResize = () => {
      setShowDots(window.innerWidth >= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="h-48 sm:h-64 md:h-96 md:mb-6 md:w-110% -ml-10">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data} margin={{ top: 20, right: 30, left: 60, bottom: 20 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis domain={yDomain} /> 
          <Tooltip content={<CustomTooltip />} />
          <Legend />
          <Line 
            type="monotone" 
            dataKey="nav" 
            stroke="#2563eb" 
            strokeWidth={2} 
            dot={showDots} 
            activeDot={showDots ? { r: 6 } : false}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ChartSection;
