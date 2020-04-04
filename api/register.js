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
