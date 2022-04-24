<template>
  <section class="mt-5">
    <h2 class="mb-4 text-white">Flight search</h2>

    <form action="search.html">
      <div class="row">
        <div class="col-12 col-sm-6 col-lg-4 col-xl-3 pr-lg-0">
          <input
            type="text"
            class="form-control test-0-fd w-100"
            placeholder="From where"
          />
          <div class="invalid-feedback">Error message</div>
        </div>
        <div class="col-12 col-sm-6 col-lg-4 mt-3 col-xl-3 mt-sm-0 pr-lg-0">
          <input
            type="text"
            class="form-control test-0-fa w-100"
            placeholder="To where"
          />
          <div class="invalid-feedback">Error message</div>
        </div>
        <div class="col-12 col-sm-6 col-lg-2 mt-3 col-xl-2 mt-lg-0 pr-lg-0">
          <input
            type="text"
            class="form-control test-0-fdt"
            placeholder="Departing"
          />
          <div class="invalid-feedback">Error message</div>
        </div>
        <div class="col-12 col-sm-6 col-lg-2 mt-3 col-xl-2 mt-lg-0 pr-xl-0">
          <input
            type="text"
            class="form-control test-0-fat"
            placeholder="Returning"
          />
          <div class="invalid-feedback">Error message</div>
        </div>
        <div class="col-12 col-sm-6 col-lg-2 mt-3 col-xl-1 mt-lg-0 pr-xl-0">
          <select class="form-control test-0-fnp">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
          </select>
          <div class="invalid-feedback">Error message</div>
        </div>
        <div class="col-12 col-xl-1 px-2 mt-3 mt-xl-0">
          <button class="btn btn-info form-control test-0-fbs">Search</button>
        </div>
      </div>
    </form>
  </section>
</template>

<script>
export default {
  name: 'v-flight-search'
};
</script>

<style>
</style>