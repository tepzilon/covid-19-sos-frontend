import { requestField } from '../../types';

export default [
  {
    key: 1,
    [requestField.hospitalName]: 'โรงพยาบาล A',
    [requestField.faceShieldDemand]: 1000,
    [requestField.status]: 'ได้รับของแล้ว',
    [requestField.province]: 'ระยอง'
  },
  {
    key: 2,
    [requestField.hospitalName]: 'โรงพยาบาล B',
    [requestField.faceShieldDemand]: 1200,
    [requestField.status]: 'อยู่ในระหว่างการจัดส่ง',
    [requestField.province]: 'ชลบุรี'
  },
  {
    key: 3,
    [requestField.hospitalName]: 'โรงพยาบาล C',
    [requestField.faceShieldDemand]: 900,
    [requestField.status]: 'ขอรับการช่วยเหลือ',
    [requestField.province]: 'กรุงเทพมหานคร'
  },
  {
    key: 4,
    [requestField.hospitalName]: 'โรงพยาบาล D',
    [requestField.faceShieldDemand]: 1500,
    [requestField.status]: 'อยู่ในระหว่างการจัดส่ง',
    [requestField.province]: 'กรุงเทพมหานคร'
  }
];
