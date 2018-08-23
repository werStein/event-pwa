import { MapMarker } from "./map-marker.model";

export interface AgendaEntry {
  id?: string;
  title: string;
  description?: string;
  date: Date;
  place?: MapMarker;
}
