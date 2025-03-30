<script setup>
import axios from 'axios';
import { onMounted, ref } from 'vue';
import Brewery from '../components/Brewery.vue';

const PER_PAGE = 8;

const breweryListRef = ref(null);
const breweryList = ref([]);
const searchTerm = ref('');

let currentPage = 1;
let serviceUrl = '';
let loading = false;

onMounted(() => {
  search();
});

const serviceUrlRoot = () => {
  if (searchTerm.value.trim().length > 0) {
    return `https://api.openbrewerydb.org/v1/breweries?by_name=${searchTerm.value}&per_page=${PER_PAGE}`;
  } else {
    return `https://api.openbrewerydb.org/v1/breweries?per_page=${PER_PAGE}`;
  }
}

const search = () => {
  breweryList.value = [];
  currentPage = 1;
  serviceUrl = serviceUrlRoot();
  axios.get(serviceUrl + '&currentPage=' + currentPage)
    .then(response => {
      if (response.data != null && response.data.length > 0) {
        breweryList.value = response.data;
      }
    });
};

const clear = () => {
  searchTerm.value = '';
  search();
}

window.addEventListener('scroll', ()=> {
  if (loading == false && reachedBottom(breweryListRef.value)) {
    loading = true;
    currentPage++;
    axios.get(serviceUrl + '&currentPage=' + currentPage)
      .then(response => {
        breweryList.value = breweryList.value.concat(response.data);
        loading = false;
      });
  }
});

const reachedBottom = function (elem) {
  if (elem != null) {
    return elem.getBoundingClientRect().bottom < window.innerHeight
  }
};

</script>

<template>
  <div class="search-controls">
    <input type="text" v-model="searchTerm" class="searchbox">
    <input @click="search" type="button" value="Search">
    <input @click="clear" type="button" value="Clear">
  </div>
  
  <div ref="breweryListRef">
    <Brewery v-for="brewery of breweryList" :brewery="brewery"></Brewery>
  </div>
</template>

<style scoped>

.title {
  font-weight: 600;
  font-size: 3rem;
  color: darksalmon;
}

.search-controls {
    text-align: center;
}

.searchbox {
    width: 200px;
}

</style>
