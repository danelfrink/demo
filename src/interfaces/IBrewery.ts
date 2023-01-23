interface IBrewery {
  id: string,
  name: string,
  type: string, 
  address: {
    street: string,
    city: string,
    state: string,
    zip: string,
  }
  website: string,
  location: {
    latitude: number | null,
    longitude: number | null,
  }
};

export type { IBrewery };