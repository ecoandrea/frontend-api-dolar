<script setup>
import IconDarkMode from '@/components/icons/IconDarkMode.vue';
import IconLightMode from '@/components/icons/IconLightMode.vue';
import { ref } from 'vue';

// INFO: Nunca he usado Vue xD, soy mas de React

// Verifica si el tema del SO es DarkMode
const isDarkMode = ref(window.matchMedia('(prefers-color-scheme: dark)').matches)

const toggleDarkMode = () => {
  isDarkMode.value = !isDarkMode.value
  isDarkMode.value ? document.body.classList.add('dark') : document.body.classList.remove('dark')
}
</script>

<template>
  <header class="bg-gray-800 text-white p-4 mb-5">
    <div class="max-w-7xl flex justify-between items-center mx-auto">
      <h1
        class="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500"
      >
        Logo API Dollar
      </h1>
      <button
        @click="toggleDarkMode"
        class="active:ring-rose-400 hover:ring rounded-lg p-0.5 outline-none ring-indigo-500 dark:text-white"
      >
        <IconDarkMode v-if="isDarkMode" />
        <IconLightMode v-else />
      </button>
    </div>
  </header>
</template>
