import React, { useState, useEffect, useRef } from 'react';
import './Map.css'; 

const Map: React.FC = () => {
  const mapRef = useRef<HTMLDivElement>(null);
  const [map, setMap] = useState<google.maps.Map | null>(null);

  useEffect(() => {
    if (mapRef.current && !map) {

      const newMap = new google.maps.Map(mapRef.current, {
        center: { lat: 23.1598, lng: 87.2845 }, // Center on Kingsukh Guest House
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
      });
      setMap(newMap);

      const marker = new google.maps.Marker({
        position: { lat: 23.1598, lng: 87.2845 },
        map: newMap,
        title: 'Kingsukh Guest House',
      });
    }
  }, [map]);

  return (
    <div className="map-container">
      <div ref={mapRef} className="map" />
    </div>
  );
};

export default Map;
