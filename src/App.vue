<script setup>
import CardMoney from "@/components/CardMoney.vue";
import NavBar from "@/components/NavBar.vue";
</script>

<template>
    <NavBar />
    <div class="container px-4 mx-auto">
        <h1 class="font-light text-center text-blue-600">API DOLAR</h1>
        <main class="grid grid-cols-1 gap-2 pt-5 sm:grid-cols-4">
            <CardMoney />
            <CardMoney />
            <CardMoney />
            <CardMoney />
        </main>
    </div>
</template>
