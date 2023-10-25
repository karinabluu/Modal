import axios from 'axios';

const API_URL = 'http://54.180.31.53:8080';

// 예약 내역 조회
export const fetchReservationHistory = async (roomId) => {
  try {
    const response = await axios.get(`${API_URL}/api/room-time/${roomId}`);
    console.log('Reservation History Response:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error fetching reservation history:', error);
    throw error;
  }
};

// 최종 예약하기
export const bookRoom = async (roomId, check) => {
  try {
    const response = await axios.post(`${API_URL}/api/room/book`, {
      id: roomId,
      check,
    });
    console.log('Booking Response:', response.data);
    return response.data;
  } catch (error) {
    console.error('Booking error:', error);
    throw error;
  }
};
