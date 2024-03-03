import React, { useState, useEffect } from 'react';
import axios from 'axios';


function App() {
  const [customers, setCustomers] = useState([]);
  const [search, setSearch] = useState('');
  const [sortBy, setSortBy] = useState('created_at');
  const [page, setPage] = useState(1);

  useEffect(() => {
   // fetchData();
  }, [search, sortBy, page]
 );

  /*const fetchData = async () => {
    try {
      const response = await axios.get(`/customers?page=${page}&sort=${sortBy}&search=${search}`);
      setData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
      // Log or display more details about the error
    }*/
   // import React, { useState } from 'react';

const YourComponent = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [sortBy, setSortBy] = useState('date');
  const [search, setSearch] = useState('');
 
  

 // Make sure you have this line

  // Your other code...
 
 const  Search = async () => {
    try {
      const response = await axios.get(`/customers?page=${page}&sort=${sortBy}&search=${search}`);
      setData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
};
 
 

  // Your other code...

  return (
    <div>
      {/* Your component JSX */}
    </div>
  );
};

//export default YourComponent;

    
  //  }
  //};

  return (
    <div>
      <input type="text" placeholder="customer_name " value={search} onChange={(e) => setSearch(e.target.value)} />
      <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
        <option value="created_at">Date</option>
       
      </select>
      <table>
        <thead>
          <tr>
            <th>customer Name</th>

            <th>age</th>

            <th>phone</th>

            <th>location</th>
            
            <th>created_at</th>
          </tr>
        </thead>
        <tbody>
          {customers.map((customer) => (
            <tr key={customers.sno}>
              <td>{customers.customer_name}</td>
              <td>{customers.age}</td>
              <td>{customers.phone}</td>
              <td>{customers.location}</td>
              <td>{new Date(customers.created_at).toLocaleDateString()}</td>
              <td>{new Date(customers.created_at).toLocaleTimeString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={() => setPage(page - 1)} disabled={page === 1}>Previous</button>
      <button onClick={() => setPage(page + 1)}>Next</button>
    </div>
  );

};

export default App;