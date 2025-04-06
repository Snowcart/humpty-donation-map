"use client";
import { colors } from "@/constants/colors";
import Australia from "@react-map/australia";
import { useEffect, useState } from "react";
import { mapData } from "@/src/constants/mapData";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  ZoomableGroup,
} from "react-simple-maps";
import { feature } from "topojson-client";

const geoUrl = "/maps/australia-states.json";

// Example pins (lat/lon)
const markers: { name: string; coordinates: [number, number] }[] = [
  { name: "Sydney", coordinates: [151.2093, -33.8688] },
  { name: "Melbourne", coordinates: [144.9631, -37.8136] },
  { name: "Perth", coordinates: [115.8575, -31.9505] },
  { name: "Brisbane", coordinates: [153.0251, -27.4698] },
];

export default function Home() {
  const [message, setMessage] = useState("");
  const [selectedState, setSelectedState] = useState<string | null>(null);
  const mapSize = 800;

  const [features, setFeatures] = useState<any[]>([]);

  useEffect(() => {
    fetch("/maps/australia-states.json")
      .then((res) => res.json())
      .then((topology) => {
        const geojson = feature(topology, topology.objects.pasted);
        setFeatures(geojson.features);
      });
  }, []);

  useEffect(() => {
    fetch("/api/hello")
      .then((res) => res.json())
      .then((data) => setMessage(data.message));
  }, []);

  return (
    <div className="w-full max-w-4xl mx-auto bg-white">
      <ComposableMap
        projection="geoMercator"
        projectionConfig={{
          center: [133, -28],
          scale: 800,
        }}
        width={800}
        height={600}
      >
        <ZoomableGroup>
          {features?.length > 0 && (
            <Geographies geography={{ type: "FeatureCollection", features }}>
              {({ geographies }) =>
                geographies.map((geo) => (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    fill="#FDE047"
                    stroke="#4C1D95"
                    strokeWidth={4}
                    className="focus:outline-none focus:ring-0 focus:border-transparent"
                  />
                ))
              }
            </Geographies>
          )}
          {markers?.map(({ name, coordinates }) => (
            <Marker
              className="cursor-pointer"
              key={name}
              coordinates={coordinates}
              onClick={() => alert(name)}
            >
              <text
                textAnchor="middle"
                y={-10}
                style={{
                  fontFamily: "system-ui",
                  fill: "#EF4444",
                  fontSize: 12,
                }}
              >
                📍
              </text>
              <text
                textAnchor="middle"
                y={10}
                style={{
                  fontFamily: "system-ui",
                  fill: "#111827",
                  fontSize: 10,
                }}
              >
                {name}
              </text>
            </Marker>
          ))}
        </ZoomableGroup>
      </ComposableMap>
    </div>
  );
}
