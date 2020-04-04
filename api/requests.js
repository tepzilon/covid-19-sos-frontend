const axios = require('axios').default;

const second = () => {
  return new Promise((resolve) => setTimeout(resolve, 1000));
};

export const getRequests = async () => {
  try {
    await second();
    return {
      data: [
        {
          _id: '5e88b58374c77a00284eef0d',
          name: 'bruh',
          faceShieldDemand: 8000,
          notice: '',
          phoneNumber: '09-1231-1111',
          email: 'mail@test.com',
          status: 'pending',
          __v: 0,
          hospitalName: 'hospitalName0',
          hospitalType: 'private',
          address: 'addre addersss dsdsd',
          province: 'ขอนแก่น',
        },
        {
          _id: '5e88cf3b492dbd0028f80abe',
          name: 'hellochamp',
          faceShieldDemand: 500,
          notice: 'bring frech fries',
          phoneNumber: '09-1231-7711',
          email: 'mail@est2.com',
          status: 'pending',
          __v: 0,
          hospitalName: 'hospitalName22',
          hospitalType: 'private',
          address: 'addre addersss dsdsd',
          province: 'กระบี่',
        },
      ],
      status: 200,
      statusText: 'OK',
      headers: {},
      config: {},
      request: {},
    };
  } catch (error) {}
};
