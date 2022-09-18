import axios from 'axios';

export const getJobs = async (authToken, pageCount) => {
  try {
    const {
      data: { data, success }
    } = await axios.get(`https://jobs-api.squareboat.info/api/v1/recruiters/jobs`, {
      headers: {
        Authorization: authToken
      },
      params: {
        page: pageCount
      }
    });
    if (success && data) return data.data;
    return null;
  } catch (error) {
    console.error('error fetching data: ', error);
  }
};
