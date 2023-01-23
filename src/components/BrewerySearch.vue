<template>
  <v-container class="fill-height">
    <v-responsive class="d-flex">
      <v-combobox
        clearable
        label="City"
        name="city"
        variant="underlined"
        @click:clear="resetSearch"
        @change="updateCity"
      ></v-combobox>
      <v-row class="d-flex align-center justify-center">
        <v-col cols="auto">
          <p v-if="city === undefined">Enter in a city above</p>
        </v-col>
      </v-row>
        <div
          class="d-flex flex-column mb-10" 
          v-for="(brewery, i) of breweries" :key="i"
        >
          <BreweryCard :brewery="brewery"/>
        </div>    
    </v-responsive>
  </v-container>
</template>

<script lang="ts" setup>
  import { useAppStore } from "@/store/app";
  import { storeToRefs } from "pinia";
  import { onBeforeMount, watch } from "vue";
  import BreweryCard from "@/components/partials/BreweryCard.vue";
  
  const appStore = useAppStore();
  const { city, breweries } = storeToRefs(appStore);
  onBeforeMount(() => resetSearch());
  
  function resetSearch() {
    appStore.$reset()
  }
  function updateCity(event: Event) {
    appStore.$patch({
      city: event.target.value || undefined,
    })
  }
  watch(city, (currentValue, oldValue) => {
    if(currentValue !== undefined){
      appStore.fetchBreweries();
    }
  });
  
</script>
