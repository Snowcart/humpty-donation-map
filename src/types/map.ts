export interface StateCenter {
  state: string;
  center: {
    x: number;
    y: number;
  };
}

export interface MapPin {
  id: string;
  state: string;
  label: string;
}

export interface MapData {
  pins: MapPin[];
  labels: MapLabel[];
}

export interface MapLabel {
  state: string;
  coordinates: [number, number];
}
