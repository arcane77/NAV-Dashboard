// src/components/Dashboard/ControlsSection.js
import React from 'react';
import Input from '../ui/Input';
import { Search } from 'lucide-react';

const ControlsSection = ({ 
  searchTerm, setSearchTerm, 
  startDate, setStartDate, 
  endDate, setEndDate, 

}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
      {/* Search Input */}
      <div className="flex items-center space-x-2 mt-6">
        <Search className="w-4 h-4 text-gray-500" />
        <Input
          type="text"
          placeholder="Search by Date"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full"
        />
      </div>

      {/* From Date Picker */}
      <div className="flex flex-col space-y-1">
        <label className="text-sm font-medium text-gray-700">From</label>
        <Input
          type="date"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
          className="w-full"
        />
      </div>

      {/* To Date Picker */}
      <div className="flex flex-col space-y-1">
        <label className="text-sm font-medium text-gray-700">To</label>
        <Input
          type="date"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
          className="w-full"
        />
      </div>
    </div>
  );
};

export default ControlsSection;
