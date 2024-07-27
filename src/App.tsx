import React, { useState } from 'react';
import './styles.css'; 
import { getRooms } from './api'; 
import { Room } from './room'; 

function App() {
  const [rooms, setRooms] = useState<Room[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  React.useEffect(() => {
    const fetchRooms = async () => {
      setIsLoading(true);
      try {
        const response = await getRooms();
        setRooms(response.rooms);
      } catch (error) {
        console.error('Error fetching rooms:', error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchRooms();
  }, []);

  return (
    <div className="container">
      <h1>Kingsukh Guesthouse</h1>
      {isLoading ? (
        <p>Loading rooms...</p>
      ) : (
        <ul>
          {rooms.map((room) => (
            <li key={room.id}>
              <Room room={room} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;
