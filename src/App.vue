<script setup>
import NavBar from "@/components/NavBar.vue";
import CardsCoins from "./components/CardsCoins.vue";
import CardSkeleton from "./components/CardSkeleton.vue";
import DescriptionApi from "./components/DescriptionApi.vue";
</script>

<template>
  <div class="min-h-screen transition-colors duration-500 dark:bg-gray-900">
    <NavBar />
    <div class="container px-4 mx-auto">
      <main
        class="grid grid-cols-1 pt-5 mt-16 gap-x-2 gap-y-8 sm:grid-cols-2 lg:grid-cols-4"
      >
        <!-- <Transition
                        mode="out-in"
                        name="custom-classes"
                        enter-active-class="duration-300 ease-out"
                        enter-from-class="transform opacity-0"
                        enter-to-class="opacity-100"
                        leave-active-class="duration-200 ease-in"
                        leave-from-class="opacity-100"
                        leave-to-class="transform opacity-0"
                    > -->
        <Suspense>
          <CardsCoins />
          <template #fallback>
            <CardSkeleton v-for="_ in 4" />
          </template>
        </Suspense>
        <!-- </Transition> -->
      </main>
      <DescriptionApi />
    </div>
  </div>
</template>
