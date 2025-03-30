<script setup>
  import { onMounted, ref } from 'vue';
  import { useRoute } from 'vue-router';
  import axios from 'axios';

  const route = useRoute();
  const brewery = ref({});

  onMounted(() => {
    axios.get('https://api.openbrewerydb.org/v1/breweries/' + route.params.id)
      .then(response => {
        brewery.value = response.data;
      })
  });
</script>

<template>
  <div class="title">{{ brewery.name }}</div>
  <div>{{ brewery.phone }}</div>
  <div>{{ brewery.street }}</div>
  <div>{{ brewery.city }}, {{ brewery.state_province }}</div>
  <div>{{ brewery.postal_code }}</div>
  <div>{{ brewery.website_url }}</div>
  <br>
  <div>Brewery type: {{ brewery.brewery_type }}</div>
</template>

<style scoped>
    .title {
        font-weight: 500;
        color: darkgray;
        font-size: 1.5rem;
        padding-bottom: 1rem;
    }
</style>