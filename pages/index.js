import React, { useState } from 'react';
import { Input } from 'antd';

import PageHeader from '../components/pageHeader/pageHeader.component';

const Home = () => {
  const [searchKey, setSearchKey] = useState('');

  return (
    <>
      <PageHeader label="แสดงผล Face Sheild" />
      <Input
        label="search"
        onChange={e => {
          setSearchKey(e.value);
        }}
        value={searchKey}
      />
    </>
  );
};

export default Home;
