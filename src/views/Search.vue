<template>
  <div class="container">
    <section class="mt-5">
      <div class="d-flex justify-content-between align-items-start">
        <h2 class="mb-4 text-white">We found the following flights</h2>
        <a href="index.html" class="btn btn-sm btn-secondary test-4-bback"
          >Back</a
        >
      </div>

      <h5 class="mt-4 mb-3 text-white">
        <span class="test-4-fif1">{{ this.$route.query.from }}</span>
        ->
        <span class="test-4-fit1">{{ this.$route.query.to }}</span>
      </h5>
      <table class="table table-bordered text-white bg-secondary">
        <tr>
          <th>Flight</th>
          <th>Aircraft</th>
          <th>Date and time of departure</th>
          <th>Arrival time</th>
          <th>Flight time</th>
          <th>Cost</th>
        </tr>
        <tr
          class="point"
          v-for="(flight, index) in FLIGHTS.data.flights_to"
          :key="index"
          @click="getIndexTo(index)"
          :class="{ 'point-active': indexTo === index }"
        >
          <td class="test-4-fn">{{ flight.flight_code }}</td>
          <td class="test-4-at">Bombardier CRJ200</td>
          <td>
            <span class="test-4-dd">{{ flight.from.date }} </span>
            at
            <span class="test-4-dt">{{ flight.from.time }}</span>
          </td>
          <td class="test-4-aatime">{{ flight.to.time }}</td>
          <td class="test-4-ft">
            <span class="test-4-fhour">1</span>h
            <span class="test-4-fminutes">30</span>min
          </td>
          <td class="test-4-fp">{{ flight.flight_code }}</td>
        </tr>
      </table>
      <h5 class="mt-4 mb-3 text-white">
        <span class="test-4-fif1">{{ this.$route.query.to }}</span>
        ->
        <span class="test-4-fit1">{{ this.$route.query.from }}</span>
      </h5>
      <table class="table table-bordered text-white bg-secondary">
        <tr>
          <th>Flight</th>
          <th>Aircraft</th>
          <th>Date and time of departure</th>
          <th>Arrival time</th>
          <th>Flight time</th>
          <th>Cost</th>
        </tr>
        <tr
          class="point"
          v-for="(flight, index) in FLIGHTS.data.flights_back"
          :key="index"
          @click="getIndexBack(index)"
          :class="{ 'point-active': indexBack === index }"
        >
          <td class="test-4-fn">{{ flight.flight_code }}</td>
          <td class="test-4-at">Bombardier CRJ200</td>
          <td>
            <span class="test-4-dd">{{ flight.from.date }} </span>
            at
            <span class="test-4-dt">{{ flight.from.time }}</span>
          </td>
          <td class="test-4-aatime">{{ flight.to.time }}</td>
          <td class="test-4-ft">
            <span class="test-4-fhour">1</span>h
            <span class="test-4-fminutes">30</span>min
          </td>
          <td class="test-4-fp">{{ flight.flight_code }}</td>
        </tr>
      </table>

      <router-link @click="goBooking"
        to="/booking" 
        class="btn btn-info test-4-bgobook mt-4"
      >Go to booking
      </router-link>
    </section>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  data: () => ({
    indexTo: "",
    indexBack: "",
  }),
  computed: {
    ...mapGetters(["FLIGHTS"]),
  },
  methods: {
    getIndexTo(index) {
      this.indexTo = index;
    },
    getIndexBack(index) {
      this.indexBack = index;
    },
    goBooking(){
      this.$router.push({
        path: "/booking",
        query: {
          indexTo: this.indexTo,
          indexBack: this.indexBack,
        },
      });
    }
  },
};
</script>

<style>
.point {
  transition: 0.3s ease-in-out;
}

.point-active {
  background-color: #555;
}

</style>