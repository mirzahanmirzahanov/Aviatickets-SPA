<template>
  <div class="container">
    <section class="mt-5">
      <div class="d-flex justify-content-between align-items-start">
        <h2 class="mb-4 text-white">Booking</h2>
        <router-link
          to="/search"
          class="btn btn-sm btn-secondary test-5-bgoback"
          >Back</router-link
        >
      </div>

      <div class="d-flex justify-content-between align-items-baseline mb-4">
        <h4 class="text-white">Flight information</h4>
      </div>

      <table class="table table-bordered text-white bg-secondary">
        <tr>
          <th>Flight</th>
          <th>From where</th>
          <th>Date and time of departure</th>
          <th>To where</th>
          <th>Flight time</th>
          <th>Cost</th>
        </tr>
        <tr>
          <td class="test-5-fc">
            {{ FLIGHTS.data.flights_to[this.$route.query.indexTo].flight_code }}
          </td>
          <td>
            <span class="test-5-from-cn">{{ FLIGHTS.data.flights_to[this.$route.query.indexTo].from.city }}</span>,
            <span class="test-5-from-an">{{ FLIGHTS.data.flights_to[this.$route.query.indexTo].from.airport }}</span>
          </td>
          <td>
            <span class="test-5-dd">{{ FLIGHTS.data.flights_to[this.$route.query.indexTo].from.date }}</span>
            at
            <span class="test-5-dt">{{ FLIGHTS.data.flights_to[this.$route.query.indexTo].from.time }}</span>
          </td>
          <td class="test-5-to">
            <span class="test-5-to-cn">{{ FLIGHTS.data.flights_to[this.$route.query.indexTo].to.city }}</span>,
            <span class="test-5-to-an">{{ FLIGHTS.data.flights_to[this.$route.query.indexTo].to.airport }}</span>
          </td>
          <td class="test-5-at">09:30</td>
          <td class="test-5-fp">{{ FLIGHTS.data.flights_to[this.$route.query.indexTo].cost }}</td>
        </tr>
        <tr>
          <td class="test-5-fc">{{ FLIGHTS.data.flights_back[this.$route.query.indexBack].flight_code }}</td>
          <td class="test-5-from">
            <span class="test-5-from-cn">{{ FLIGHTS.data.flights_back[this.$route.query.indexBack].from.city }}</span>,
            <span class="test-5-from-an">{{ FLIGHTS.data.flights_back[this.$route.query.indexBack].from.airport }}</span>
          </td>
          <td>
            <span class="test-5-dd">{{ FLIGHTS.data.flights_back[this.$route.query.indexBack].from.date }}</span>
            at
            <span class="test-5-dt">{{ FLIGHTS.data.flights_back[this.$route.query.indexBack].from.time }}</span>
          </td>
          <td class="test-5-to">
            <span class="test-5-to-cn">{{ FLIGHTS.data.flights_back[this.$route.query.indexBack].to.city }}</span>,
            <span class="test-5-to-an">{{ FLIGHTS.data.flights_back[this.$route.query.indexBack].to.airport }}</span>
          </td>
          <td class="test-5-at">11:30</td>
          <td class="test-5-fp">{{ FLIGHTS.data.flights_back[this.$route.query.indexBack].cost }}</td>
        </tr>
        <tr>
          <td colspan="5" class="text-right">
            <b>Total cost</b>
          </td>
          <td colspan="1" class="text-right test-5-price">16000</td>
        </tr>
      </table>
    </section>

    <section class="mt-5">
      <div class="d-flex justify-content-between align-items-baseline mb-4">
        <h4 class="text-white">Passengers</h4>
        <button 
          @click="addPassenger()"
          class="btn btn-info btn-sm test-5-add"
        >
          Add passenger
        </button>
      </div>
      <div
        v-for="(passenger, index) in PASSENGERS"
        :key="index"
        class="passengers-item"
      >
        <p class="passengers-item__first-name">{{ passenger.firstName }}</p>
        <p class="passengers-item__last-name">{{ passenger.lastName }}</p>
        <p class="passengers-item__document-number">{{ passenger.documentNumber }}</p>
        <button 
          class="btn btn-danger btn-sm test-5-remove"
          @click="removePassenger(index)"
        >remove</button>
      </div>
      <form>
        <div class="row">
          <div class="col-12 col-sm-6 col-lg-4 col-xl-3 pr-lg-0">
            <input
              type="text"
              class="form-control test-5-name w-100"
              placeholder="First name"
              v-model="formPassenger.firstName"
            />
          </div>
          <div class="col-12 col-sm-6 col-lg-4 mt-3 col-xl-3 mt-sm-0 pr-lg-0">
            <input
              type="text"
              class="form-control test-5-last w-100"
              placeholder="Last name"
              v-model="formPassenger.lastName"
            />
          </div>
          <div class="col-12 col-sm-6 col-lg-2 mt-3 col-xl-2 mt-lg-0 pr-lg-0">
            <input
              type="text"
              class="form-control test-5-dob"
              placeholder="Date of Birth"
              v-model="formPassenger.birthDate"
            />
          </div>
          <div class="col-12 col-sm-6 col-lg-2 mt-3 col-xl-2 mt-lg-0 pr-xl-0">
            <input
              type="text"
              class="form-control test-5-doc"
              placeholder="Document number"
              v-model="formPassenger.documentNumber"
            />
          </div>
          <div class="col-12 col-xl-2 mt-3 mt-xl-0">
            <!-- <button class="btn btn-danger btn-sm form-control test-5-bremove">
              Remove
            </button> -->
          </div>
        </div>

        <button class="btn btn-info mt-4 form-control test-5-book">
          Confirm
        </button>
      </form>
    </section>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  data: () => ({
    formPassenger: {
      firstName: '',
      lastName: '',
      birthDate: '',
      documentNumber: '',
    },

  }),
  computed: {
    ...mapGetters(["FLIGHTS", "PASSENGERS"]),
  },
  methods:{
    ...mapActions(['ADD_PASS', "REMOVE_PASS"]),
    addPassenger() {
      this.ADD_PASS(this.formPassenger)
      this.formPassenger.firstName = ''
      this.formPassenger.lastName = ''
      this.formPassenger.birthDate = ''
      this.formPassenger.documentNumber = ''
    },
    removePassenger(index) {
      this.REMOVE_PASS(index)
    }
  }
};
</script>

<style>
.passengers-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* display: grid;
  grid-template-columns: repeat(4,1fr); */
  margin: 40px 0;
  color: #fff;
}
.passengers-item p {
  margin: 0;
}

.passengers-item__first-name {
}

.passengers-item__last-name {
}

.passengers-item__document-number {
}




</style>