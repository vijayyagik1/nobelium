import React, { useState } from 'react';
// import './style.css';
import Select from 'react-select';
export default function App() {
  const [data, setData] = useState(null);
  const onption = [
    { value: 'apple', label: 'apple' },
    { value: 'banana', label: 'banana' },
    { value: 'mango', label: 'mango' },
  ];

  return (
    <div>
      <Select options={onption} value={data} onChange={setData} isSearchable />
    </div>
  );
}
