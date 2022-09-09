<script setup>
import CardMoney from "@/components/CardMoney.vue";
import NavBar from "@/components/NavBar.vue";
</script>

<template>
    <div class="min-h-screen dark:bg-gray-900 transition-colors duration-500">
        <NavBar />
        <div class="container px-4 mx-auto min-h-full">
            <h1 class="font-light text-center text-blue-600">API DOLLAR</h1>
            <main class="grid grid-cols-1 gap-2 pt-5 sm:grid-cols-4">
                <CardMoney />
                <CardMoney />
                <CardMoney />
                <CardMoney />
            </main>
        </div>
    </div>
</template>
