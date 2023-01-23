<template>
  <v-container class="">
    <v-responsive class="d-flex">
      <h1>{{ selectedBrewery.name }}</h1>
      <p>{{ selectedBrewery.address.city }}, {{ selectedBrewery.address.state }}</p>
      <GMapMap
        :center="{lat: selectedBrewery?.location.latitude, lng: selectedBrewery?.location.longitude}"
        :zoom="7"
        map-type-id="terrain"
        style="width: 100vw; height: 900px"
      />
    </v-responsive>
  </v-container>
</template>

<script lang="ts" setup>
  import router from "@/router";
  import { storeToRefs } from "pinia";
  import { onBeforeMount } from "vue";
  
  import { useAppStore } from "@/store/app";
  // import BreweryMap from "@/components/partials/BreweryMap.vue";
  const appStore = useAppStore();
  const { selectedBrewery } = storeToRefs(appStore);
  onBeforeMount(() => {
    debugger;
    if(selectedBrewery === undefined) {
      appStore.$reset();
      router.push({
        path: '/'
      });
    }
  })
  
</script>
