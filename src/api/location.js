import axiosAPI from ".";
export const getLocationListAPI = (location) => {
  return axiosAPI.get(`/locations?name_like=${location}`);
};
