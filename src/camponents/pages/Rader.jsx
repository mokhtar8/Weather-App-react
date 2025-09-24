import { useEffect, useState } from "react";
import axios from "axios";
import { MapContainer, TileLayer, ImageOverlay } from "react-leaflet";
import "leaflet/dist/leaflet.css";

function RadarMap() {
  const [rainData, setRainData] = useState(null);
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    // دریافت داده RainViewer
    axios.get("http://localhost:3000/api/rainviewer")
      .then(res => setRainData(res.data))
      .catch(err => console.error("RainViewer fetch error:", err));

    // دریافت داده OpenWeather
    axios.get("http://localhost:3000/api/weather", {
      params: { lat: 35.6892, lon: 51.389 }
    })
    .then(res => setWeather(res.data))
    .catch(err => console.error("Weather fetch error:", err));
  }, []);

  return (
    <div>
      <h2>Weather Info</h2>
      {weather && (
        <div>
          <p>City: {weather.name}</p>
          <p>Temp: {weather.main.temp} °C</p>
          <p>Weather: {weather.weather[0].description}</p>
        </div>
      )}

      <h2>Rain Radar</h2>
      {rainData && rainData.radar && (
        <MapContainer center={[35.6892, 51.389]} zoom={5} style={{ height: "500px", width: "100%" }}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {/* تصویر آخرین نقشه رادار */}
          <ImageOverlay
            url={rainData.radar[0].past[0].path} 
            bounds={[[rainData.radar[0].bounds[0], rainData.radar[0].bounds[1]], [rainData.radar[0].bounds[2], rainData.radar[0].bounds[3]]]}
            opacity={0.5}
          />
        </MapContainer>
      )}
    </div>
  );
}

export default RadarMap;
