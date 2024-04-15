import axiosAPI from ".";

export const getReviewsListAPI = (roomId) => {
  return axiosAPI.get(`/reviews?roomId=${roomId}&_expand=user`);
};
