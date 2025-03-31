<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div class="wrapper">

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/rules">10 Regeln</RouterLink>
      </nav>
    </div>
    <h1>Regex</h1>
  </header>

  <RouterView />
</template>

<style scoped>

</style>
