interface Room {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  capacity: number;
  amenities: string[];
  price: number;
  availability: {
    startDate: string; 
    endDate: string; 
    available: boolean;
  }[]; 
}

interface GetRoomsResponse {
  rooms: Room[];
}

interface GetRoomDetailsResponse {
  room: Room;
}

interface BookRoomRequest {
  roomId: string;
  startDate: string; 
  endDate: string; 
  guests: number;
}

interface BookRoomResponse {
  bookingId: string;
  status: string; 
}

declare module 'kingsukhguesthouse-api' {
  export function getRooms(): Promise<GetRoomsResponse>;
  export function getRoomDetails(roomId: string): Promise<GetRoomDetailsResponse>;
  export function bookRoom(request: BookRoomRequest): Promise<BookRoomResponse>;
}
