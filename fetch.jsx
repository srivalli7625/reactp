import React, { useState, useEffect } from 'react';
import axios from 'axios';

const YourComponent = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [sortBy, setSortBy] = useState('date');
  const [search, setSearch] = useState('');

  /*const fetchData = async () => {
    
    try {
      const response = await axios.get(`/customers?page=${page}&sort=${sortBy}&search=${search}`);
      setData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };*/
  const fetchData = async () => {
    const result = await axios.get('/api/records', {
      params: { search, sort, page },
    });
    setData(result.data);
  };

  useEffect(() => {
    // Call fetchData or perform other actions when the component mounts or when dependencies change
    fetchData();
  }, [page, sortBy, search]);

  return (
    <div>
      {/* Your component JSX */}
    </div>
  );
};

export default YourComponent;
