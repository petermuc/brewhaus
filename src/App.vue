<script setup>
import { RouterView } from 'vue-router';
</script>

<template>
  <header style="text-align: center;">
    <img alt="Vue logo" class="logo" src="@/assets/beer-mug.svg" width="125" height="125" />
    <h1 class="title">The Bubbles Brewing Chain</h1>
  </header>
  <div class="main-container">
    <RouterView />
  </div>
</template>

<style scoped>
  .title {
    color: beige;
    text-shadow: 1px 1px 3px black;
  }

  .main-container {
    width: 100%;
    max-width: 400px;
    margin: auto;
  }
</style>
