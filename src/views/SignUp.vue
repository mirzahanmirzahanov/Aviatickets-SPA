<template>
  <div
    class="container vh-100 d-flex align-items-center justify-content-center"
  >
    <section class="mt-5 w-75">
      <h2 class="mb-5 text-center text-white">Log in</h2>

      <form action="profile.html">
        <div class="row">
          <div class="col-12">
            <!-- is-invalid class show error message -->
            <input
              type="text"
              class="form-control is-invalid test-1-fpn"
              placeholder="Phone"
            />
            <div class="invalid-feedback test-1-emph">Error message</div>
          </div>
          <div class="col-12 mt-2">
            <input
              type="password"
              class="form-control test-1-fps"
              placeholder="Password"
            />
            <div class="invalid-feedback test-1-emps">Error message</div>
          </div>
          <div class="col-12 mt-4">
            <button class="btn btn-info w-100 test-1-fbs">Log in</button>
            <div class="text-center mt-2 text-white">
              Don't have an account yet?
              <a href="register.html" class="test-1-bsu link-info">Sign up</a>
              or
              <a href="index.html" class="link-info test-1-bbh">Back home</a>
            </div>
          </div>
        </div>
      </form>
    </section>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>