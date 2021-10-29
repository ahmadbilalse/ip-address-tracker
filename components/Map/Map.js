import L from 'leaflet'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'

const Map = () => {
  const myIcon = L.icon({
    iconUrl: '/icon-location.svg',
    iconSize: [40, 50],
    iconAnchor: [20, 50],
  });

  const position = [51.490, -0.09];
  const center = [position[0] + 0.010, position[1]]

  return (
    <MapContainer center={center} zoomControl={false} zoom={13} scrollWheelZoom={true} style={{ height: "100%", width: "100%" }}>
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