import { MapContainer, TileLayer, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";

function Map() {
  return (
    <>
      <div
        className="shadow-md p-4 w-full h-full flex flex-col gap-4
       bg-white overflow-hidden border border-gray-200 rounded-xl"
      >
        <header>
          <h1 className="text-xl font-semibold">Campus Overview</h1>
          <h5 className="text-sm font-semibol text-slate-400">Interactive hazard monitoring map</h5>
        </header>
        <section className="w-full h-full bg-blue-300 rounded-lg relative">
          <div
            className="bg-white rounded-lg w-auto h-auto absolute bottom-4 left-4 p-4 gap-2 flex flex-col z-100
          "
          >
            <h2 className="font-bold">Risk Levels</h2>
            <ul className="flex flex-col gap-2">
              <li>
                <a href="#" className="text-[0.85rem] flex gap-3 items-center">
                  <span className="h-4 w-4 rounded-full bg-green-400"></span>
                  Low Risk
                </a>
              </li>
              <li>
                <a href="#" className="text-[0.85rem] flex gap-3 items-center">
                  <span className="h-4 w-4 rounded-full bg-yellow-300"></span>
                  Medium Risk
                </a>
              </li>
              <li>
                <a href="#" className="text-[0.85rem] flex gap-3 items-center">
                  <span className="h-4 w-4 rounded-full bg-red-500"></span>
                  High Risk
                </a>
              </li>
            </ul>
          </div>
          <div className="w-full h-full relative overflow-hidden z-10 rounded-lg">
            <MapContainer
              className="w-full h-full"
              center={[14.997816, 120.655568]} // Example: Pampanga
              zoom={19}
            >
              <TileLayer
                attribution="© MapTiler © OpenStreetMap contributors"
                url={`https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png`}
              />
            </MapContainer>
          </div>
        </section>
      </div>
    </>
  );
}

export default Map;
