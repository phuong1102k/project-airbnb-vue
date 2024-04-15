import axiosAPI from ".";
// call API danh sách phòng
export const getRoomsListByLocationAPI = (locationId) => {
  return axiosAPI.get(`/rooms?locationId=${locationId}`);
};

// call API chi tiết phòng
export const getRoomDetailAPI = (roomId) => {
  return axiosAPI.get(`/rooms/${roomId}`);
};

// call API lấy ra  phòng đã đặt
export const getBookedListAtRoomAPI = (roomId) => {
  return axiosAPI.get(`/bookings?roomId=${roomId}`);
};

// call API book phòng
export const bookingRoomAPI = (data) => {
  const { token } = JSON.parse(localStorage.getItem("userLogin"));
  return axiosAPI.post("/bookings", data, {
    headers: {
      token,
    },
  });
};
