const axios = require('axios').default;

export const postRequest = async (requestDatas) => {
  try {
    const data = await axios.post(
      `${process.env.DOMAIN}/face-shield-request`,
      requestDatas
    );
    return data;
  } catch (error) {
    return { error };
  }
};

export const handlePostRequestError = (error) => {
  switch (error.response.status) {
    case 409:
      return {
        header: 'Username นี้ถูกใช้งานแล้ว',
        body: 'กรุณาเลือก Username ใหม่',
      };
    default:
      return {
        header: 'เซิร์ฟเวอร์ขัดข้อง',
        body: 'ไม่สามารถทำรายการได้ในขณะนี้',
      };
  }
};
