<script setup>
import IconDolar from "@/components/icons/IconDolar.vue";
import IconUp from "@/components/icons/IconUp.vue";
// import IconDown from "@/components/icons/IconDown.vue";
defineProps(["name", "date", "valor"]);
</script>
<template>
  <article
    class="relative p-4 text-center text-gray-100 bg-gray-800 rounded-md"
  >
    <span
      class="absolute top-0 left-0 right-0 h-1 bg-white rounded-t-md bg-gradient-to-r from-pink-300 to-pink-600"
    ></span>
    <div
      class="absolute flex justify-center w-8 h-8 -translate-x-1/2 bg-gray-500 rounded-full -top-4 left-1/2"
    >
      <IconDolar class="w-3 fill-gray-100" />
    </div>
    <h2 class="mt-5">{{ name }}</h2>
    <h3 class="py-4 text-4xl">{{ valor }}</h3>
    <p class="flex justify-center gap-1">
      <IconUp class="w-2 fill-green-400" />
      <!-- <IconDown class="w-2 fill-red-500" /> -->
      <span>{{ date }}</span>
    </p>
  </article>
</template>
