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
        <tr v-for="flight in FLIGHTS.flightsTo" :key="flight.index">
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
        <tr v-for="flight in FLIGHTS.flightsBack" :key="flight.index">
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

      <a href="booking.html" class="btn btn-info test-4-bgobook mt-4"
        >Go to booking</a
      >
    </section>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(["FLIGHTS"]),
  },
  data: () => ({}),
};
</script>

<style>
</style>