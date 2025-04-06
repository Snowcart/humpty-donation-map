import { MapData } from "@/src/types/map";

export const mapData: MapData = {
  pins: [
    {
      id: "sydney",
      state: "NSW",
      label: "Sydney",
    },
    {
      id: "melbourne",
      state: "VIC",
      label: "Melbourne",
    },
    {
      id: "brisbane",
      state: "QLD",
      label: "Brisbane",
    },
    {
      id: "perth",
      state: "WA",
      label: "Perth",
    },
    {
      id: "adelaide",
      state: "SA",
      label: "Adelaide",
    },
    {
      id: "darwin",
      state: "NT",
      label: "Darwin",
    },
    {
      id: "hobart",
      state: "TAS",
      label: "Hobart",
    },
    {
      id: "canberra",
      state: "ACT",
      label: "Canberra",
    },
  ],
  labels: [
    {
      state: "NSW",
      coordinates: [145.9211, -33.2532],
    },
    {
      state: "VIC",
      coordinates: [144.9631, -36.8136],
    },
    {
      state: "QLD",
      coordinates: [144.254, -22.4241],
    },
    {
      state: "WA",
      coordinates: [122.6283, -25.2744],
    },
    {
      state: "SA",
      coordinates: [135.209, -30.0001],
    },
    {
      state: "TAS",
      coordinates: [146.8272, -42.8821],
    },
    {
      state: "NT",
      coordinates: [133.7751, -20.7002],
    },
    {
      state: "ACT",
      coordinates: [149.1244, -35.2809],
    },
  ],
};
