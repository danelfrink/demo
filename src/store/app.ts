import { defineStore } from "pinia";
import { api } from "@/http/api";
import { IBrewery } from "@/interfaces/IBrewery"; 
import { AxiosResponse } from "axios";
interface appState {
  city: string | undefined,
  breweries: IBrewery[],
  selectedBrewery: IBrewery | undefined,
}


export const useAppStore = defineStore('app', {
  state: () => ({
    city: undefined,
    breweries: [],
    selectedBrewery: undefined,
  }) as appState,
  actions: {
    async fetchBreweries() {
      const { data }: AxiosResponse = await api.get(`/?by_city=${this.city}`);
      this.breweries = data.map((breweryData: any) => {
        return {
          id: breweryData.id,
          name: breweryData.name,
          type: breweryData.brewery_type,
          address: {
            street: breweryData.street,
            city: breweryData.city,
            state: breweryData.state,
            zip: breweryData.postal_code,
          },
          website: breweryData.website_url,
          location: {
            latitude: breweryData.latitude,
            longitude: breweryData.longitude,
          }
        };
      })
    },
  },
})
