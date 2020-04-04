const axios = require('axios').default;

export const getRequests = async () => {
  try {
    const data = await axios.get(`${process.env.DOMAIN}/face-shield-request`);
    return data;
  } catch (error) {
    return { error };
  }
};
