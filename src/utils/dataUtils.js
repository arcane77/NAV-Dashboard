export const generateData = () => {
    const data = [];
    let currentNAV = 1000;
  
    for (let i = 0; i < 100; i++) {
      const date = new Date();
      date.setDate(date.getDate() - i);
      const change = (Math.random() * 2 - 1) / 100;
      const newNAV = currentNAV * (1 + change);
  
      data.push({
        date: date.toISOString().split('T')[0],
        nav: Number(newNAV.toFixed(2)),
        change: Number((change * 100).toFixed(2)),
        volume: Math.floor(Math.random() * 100000),
        inflows: Math.floor(Math.random() * 50000),
        outflows: Math.floor(Math.random() * 50000),
        investors: Math.floor(Math.random() * 100) + 400,
      });
  
      currentNAV = newNAV;
    }
  
    return data.reverse();
  };
  