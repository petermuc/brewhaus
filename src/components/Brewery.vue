<script setup>
import { defineProps } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

defineProps({
    brewery: { name: String, phone: String, street: String, website_url: String }
})

const details = (id) => {
    router.push({name: 'details', params: {id: id}});
}
</script>

<template>
    <div @click="details(brewery.id)" class="container">
        <div class="title">{{ brewery.name }}</div>
        <div>{{ brewery.phone }}</div>
        <div>{{ brewery.city }}, {{ brewery.state_province }}</div>
        <div>{{ brewery.website_url }}</div>
    </div>
</template>

<style scoped>
    .container {
        border-top: 1px solid darkgray;
        border-radius: 5px;
        margin: 2rem;
        padding: 1rem;
    }

    .title {
        font-weight: 500;
        color: darkgray;
        font-size: 1.5rem;
        padding-bottom: 1rem;
    }
</style>