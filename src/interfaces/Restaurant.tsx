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

export const Sample = [
  {
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
  },
  {
    id: "00b35e1a-82b1-4988-b8b9-6df826db2818",
    name: "Matsuhisa",
    address1: "303 E Main St",
    city: "Aspen",
    state: "CO",
    zip: "81611",
    lat: "39.190723",
    long: "-106.82031",
    telephone: "(970) 544-6628",
    tags:
      "Social,Food and Dining,Restaurants,Japanese,Social,Food and Dining,Restaurants,Sushi",
    website: "http://www.matsuhisaaspen.com",
    genre: "Japanese,Sushi,Asian,Contemporary,Seafood",
    hours: "Open Daily 5:30 PM-9:00 PM",
    attire: "business casual",
  },
];
