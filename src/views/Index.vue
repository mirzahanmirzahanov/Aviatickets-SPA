<template>
  <v-header />
  <div class="container">
    <v-flight-search />
    <v-promo />
    <v-sub />
  </div>
  <v-footer />
</template>

<script>
import VHeader from "@/components/VHeader.vue";
import VFlightSearch from "@/components/VFlightSearch.vue";
import VPromo from "@/components/VPromo.vue";
import VSub from "@/components/VSub.vue";
import VFooter from "@/components/VFooter.vue";

export default {
  data: () =>[],
  components: { VHeader, VFlightSearch, VPromo, VSub, VFooter },
};
</script>,
    

<style>
</style>