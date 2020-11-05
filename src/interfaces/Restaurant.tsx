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

// keys are types by coldefs

export const RestDashBoardColDefs: ColDef<keyof RestaurantRow>[] = [
  {
    field: "id",
    header: "ID"
  },
  {
    field: "name",
    header: "Name",
  },
  {
    field: "address1",
    header: "Adress",
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
    field: "zip",
    header: "Zip Code",
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
    field: "tags",
    header: "Tags",
  },
  {
    field: "website",
    header: "Phone",
  },
  {
    field: "genre",
    header: "Genre",
  },
  {
    field: "hours",
    header: "Schedule",
  },
  {
    field: "attire",
    header: "Attire",
  }
];

export const Sample = {
  id: "f223fdd0-4adc-423e-9747-980a66c256ca",
  name: "Old Hickory Steakhouse",
  address1: "201 Waterfront St",
  city: "Oxon Hill",
  state: "MD",
  zip: "20745",
  lat: "38.782098",
  long: "-77.017492",
  telephone: "(301) 965-4000",
  tags: "Social,Food and Dining,Restaurants,Steakhouses",
  website: "http://www.gaylordnational.com",
  genre: "Steak,American,Contemporary,Seafood,Cafe",
  hours: "Open Daily 5:30 PM-10:00 PM",
  attire: "business casual",
};
