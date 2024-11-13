// src/components/Dashboard/TableSection.js
import React from 'react';
import { SortAsc, SortDesc } from 'lucide-react';

const TableSection = ({ data, sortConfig, handleSort }) => (
  <div className="overflow-x-auto">
    <table className="w-full">
      <thead>
        <tr className="border-b">
          <th className="p-2 text-left">
            <button
              onClick={() => handleSort('date')}
              className="flex items-center space-x-1 hover:text-blue-600"
            >
              <span>Date</span>
              {sortConfig.key === 'date' && (
                sortConfig.direction === 'asc' ? 
                  <SortAsc className="w-4 h-4" /> : 
                  <SortDesc className="w-4 h-4" />
              )}
            </button>
          </th>
          <th className="p-2 text-left">
            <button
              onClick={() => handleSort('nav')}
              className="flex items-center space-x-1 hover:text-blue-600"
            >
              <span>NAV</span>
              {sortConfig.key === 'nav' && (
                sortConfig.direction === 'asc' ? 
                  <SortAsc className="w-4 h-4" /> : 
                  <SortDesc className="w-4 h-4" />
              )}
            </button>
          </th>
          <th className="p-2 text-left">Change</th>
          <th className="p-2 text-left">Volume</th>
          <th className="p-2 text-left">Inflows</th>
          <th className="p-2 text-left">Outflows</th>
          <th className="p-2 text-left">Investors</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => (
          <tr 
            key={row.date}
            className={`border-b hover:bg-gray-50 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}
          >
            <td className="p-2">{row.date}</td>
            <td className="p-2">${row.nav.toLocaleString()}</td>
            <td className={`p-2 ${row.change >= 0 ? 'text-green-600' : 'text-red-600'}`}>
              {row.change}%
            </td>
            <td className="p-2">{row.volume.toLocaleString()}</td>
            <td className="p-2">${row.inflows.toLocaleString()}</td>
            <td className="p-2">${row.outflows.toLocaleString()}</td>
            <td className="p-2">{row.investors}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default TableSection;
