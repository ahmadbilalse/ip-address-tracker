import L from 'leaflet'
import { useState } from 'react'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import { useSelector } from 'react-redux'
import { useGetIpInfoQuery } from '../../app/services/ipApi'

const Map = () => {
  const input = useSelector((state) => state.ipGeolocator.input);
  const { data } = useGetIpInfoQuery(input);
  const myIcon = L.icon({
    iconUrl: '/icon-location.svg',
    iconSize: [40, 50],
    iconAnchor: [20, 50],
  });
  const [map, setMap] = useState();

  let position = [0, 0];
  if (data) {
    if (data.success) {
      position = [data.latitude, data.longitude];
    }
  }
  const center = [position[0] + 0.010, position[1]];
  if (map) map.setView(position);

  return (
    <MapContainer whenCreated={setMap} center={center} zoomControl={false} zoom={13} scrollWheelZoom={true} style={{ height: "100%", width: "100%" }}>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker icon={myIcon} position={position}>
      </Marker>
    </MapContainer>
  )
}

export default Map
