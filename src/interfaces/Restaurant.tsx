export interface Restaurant {
  id: string;
  name: string;
  address1: string;
  city: string;
  state: string;
  zip: string;
  lat: string;
  long: string;
  telephone: string;
  tags: string;
  website: string;
  genre: string;
  hours: string;
  attire: string;
}

export interface RestaurantRow extends Restaurant {
  coordinates?: string;
}

export interface ColDef<T> {
  field: T;
  header: string;
  width?: number;
  hide?: boolean;
}

export interface RestDashBoardState {
  restaurants: RestaurantRow[];
  colDefs: ColDef<keyof RestaurantRow>[];
}

export interface GridProps<T> {
  data: any[];
  colDefs: ColDef<T>[];
}

export interface RowProps<T extends string> {
  record: any;
  colDefs: ColDef<T>[];
}

export interface CellProps<T> {
  record: any;
  colDef: ColDef<T>;
}

export const RestDashBoardColDefs: ColDef<keyof RestaurantRow>[] = [
  {
    field: "id",
    header: "ID",
    hide: true,
  },
  {
    field: "name",
    header: "Name",
  },
  {
    field: "city",
    header: "City",
  },
  {
    field: "state",
    header: "State",
  },
  {
    field: "coordinates",
    header: "Coordinates",
  },
  {
    field: "telephone",
    header: "Phone",
  },
  {
    field: "genre",
    header: "Genre",
  }
];
