import axios from 'axios'; 

const apiBaseUrl = 'https://api.kingsukhguesthouse.com/v1';

export async function getRooms(): Promise<GetRoomsResponse> {
  const response = await axios.get(`${apiBaseUrl}/rooms`);
  return response.data;
}

export async function getRoomDetails(roomId: string): Promise<GetRoomDetailsResponse> {
  const response = await axios.get(`${apiBaseUrl}/rooms/${roomId}`);
  return response.data;
}

export async function bookRoom(request: BookRoomRequest): Promise<BookRoomResponse> {
  const response = await axios.post(`${apiBaseUrl}/bookings`, request);
  return response.data;
}

