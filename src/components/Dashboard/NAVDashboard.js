import React, { useState, useMemo } from 'react';
import Card from '../ui/Card';
import ChartSection from './ChartSection';
import ControlsSection from './ControlsSection';
import TableSection from './TableSection';
import { generateData } from '../../utils/dataUtils';

const NAVDashboard = () => {
  const [data] = useState(generateData());
  const [searchTerm, setSearchTerm] = useState('');
  const [sortConfig, setSortConfig] = useState({ key: 'date', direction: 'asc' });
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const handleSort = (key) => {
    setSortConfig({
      key,
      direction: sortConfig.key === key && sortConfig.direction === 'asc' ? 'desc' : 'asc'
    });
  };

  const filteredAndSortedData = useMemo(() => {
    let filtered = [...data];

    if (startDate && endDate) {
      filtered = filtered.filter(item => 
        item.date >= startDate && item.date <= endDate
      );
    }

    if (searchTerm) {
      filtered = filtered.filter(item =>
        Object.values(item).some(value => 
          value.toString().toLowerCase().includes(searchTerm.toLowerCase())
        )
      );
    }

    filtered.sort((a, b) => {
      if (sortConfig.key === 'nav' || sortConfig.key === 'change') {
        return sortConfig.direction === 'asc' 
          ? parseFloat(a[sortConfig.key]) - parseFloat(b[sortConfig.key])
          : parseFloat(b[sortConfig.key]) - parseFloat(a[sortConfig.key]);
      }
      return sortConfig.direction === 'asc'
        ? a[sortConfig.key].localeCompare(b[sortConfig.key])
        : b[sortConfig.key].localeCompare(a[sortConfig.key]);
    });

    return filtered;
  }, [data, searchTerm, sortConfig, startDate, endDate]);

  return (
    <div className="p-4 max-w-7xl mx-auto space-y-6">
      <Card>
        <Card.Header>
          <Card.Title>Hedge Fund NAV Dashboard</Card.Title>
        </Card.Header>
        <Card.Content>
          {/* chart */}
          <ChartSection data={filteredAndSortedData} />

          {/* controls */}
          <ControlsSection 
            searchTerm={searchTerm} setSearchTerm={setSearchTerm}
            startDate={startDate} setStartDate={setStartDate}
            endDate={endDate} setEndDate={setEndDate}
            sortConfig={sortConfig} handleSort={handleSort}
          />

          {/* table */}
          <TableSection data={filteredAndSortedData} sortConfig={sortConfig} handleSort={handleSort} />
        </Card.Content>
      </Card>
    </div>
  );
};

export default NAVDashboard;
