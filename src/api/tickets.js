import axiosAPI from ".";

export const getTicketListByUserAPI = (userId) => {
  return axiosAPI.get(
    `/bookings?&userId=${userId}&_expand=user&_expand=room&_limit=3`
  );
};

export const getFullTicketListByUserAPI = (userId) => {
  return axiosAPI.get(`/bookings?&userId=${userId}&_expand=user&_expand=room`);
};
