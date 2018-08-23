export interface MapMarker {
  id?: string;
  coordinates: {
    lat: number,
    lng: number
  };
  title: string;
  description?: string;
}
