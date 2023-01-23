<template>
  <v-card
    outlined
  >
    <v-card-title>{{ brewery.name }}</v-card-title>
    <v-card-subtitle>{{ brewery.type }} in {{ brewery.address.city }}, {{ brewery.address.state }}</v-card-subtitle>
    <v-divider class="mx-4"></v-divider>
    <v-card-actions>
      <v-btn @click="redirectToPage(brewery)">See More</v-btn>
      <v-btn :href="brewery.website">Website</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script lang="ts" setup>
import router from "@/router";
import { IBrewery } from "@/interfaces/IBrewery";
import { useAppStore } from "@/store/app";
const appStore = useAppStore();
function redirectToPage(brewery: IBrewery){
  appStore.$patch({
    selectedBrewery: brewery
  });
  router.push({
    path: '/details'
  })
}
defineProps<{ brewery: IBrewery }>()
</script>

