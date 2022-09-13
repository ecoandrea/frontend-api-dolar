<script setup>
import axios from "axios";
import CardMoney from "@/components/CardMoney.vue";
import { ref } from "vue";
const coins = ref([]);
// const loading = ref(false);
try {
  const { data } = await axios.get(
    "https://api-dolar-kib9.onrender.com/api/v1/all"
  );
  console.log({ data });
  coins.value = data;
} catch (error) {
  console.log(error);
} finally {
  // loading.value = false;
}
</script>

<template>
  <CardMoney
    v-for="{ name, valor, date } in coins"
    :key="name"
    :name="name"
    :valor="valor"
    :date="date"
  />
</template>
