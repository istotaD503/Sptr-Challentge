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

export interface ColDef {
  field: string;
  header: string;
}

export interface RestDashBoardState {
  restaurants: Restaurant[];
  colDefs: ColDef[];
}

export interface GridProps {
    data: any[];
    colDefs: ColDef[];
}

export const RestDashBoardColDefs: ColDef[] = [
  {
    field: "id",
    header: "ID",
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
