<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-secondary">
    <div class="container">
      <img src="@/assets/images/logo.png" class="logo test-0-logo" alt="logo" />

      <div class="navbar-collapse">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item active">
            <a class="nav-link test-0-nav-1 link-light" href="#">Promotions</a>
          </li>
          <li class="nav-item">
            <a class="nav-link test-0-nav-2 link-light" href="#">Search</a>
          </li>
          <li class="nav-item">
            <a class="nav-link test-0-nav-3 link-light" href="#">Check-in</a>
          </li>
          <li class="nav-item">
            <a class="nav-link test-0-nav-4 link-light" href="login.html"
              >Personal area</a
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'v-header'
};
</script>

<style>
</style>