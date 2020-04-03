import React from 'react';
import GridWrap from '../components/gridWrap/gridWrap.component';
import { Card, Divider } from 'antd';
import { gridSize } from '../types';

const RegisterPage = () => (
  <GridWrap size={gridSize.sm}>
    <Card style={{ borderRadius: '10px' }}>
      <div>
        <h1>ลงทะเบียนเพื่อขอรับ Face shield</h1>
        <Divider />
        <p>
          คำอธิบาย คำอธิบาย คำอธิบาย คำอธิบาย คำอธิบาย คำอธิบาย คำอธิบาย
          คำอธิบาย คำอธิบาย คำอธิบาย คำอธิบาย คำอธิบาย
        </p>
      </div>
    </Card>
  </GridWrap>
);

export default RegisterPage;
