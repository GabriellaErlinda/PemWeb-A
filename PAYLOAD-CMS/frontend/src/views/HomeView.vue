<template>
  <main class="min-h-full w-full flex flex-col justify-center p-8">
    <div class="w-full h-fit justify justify-center flex flex-col mt-3 px-56">
      <OpenModal />
      <MenuList />
    </div>
  </main>
</template>

<script setup>
import MenuList from "../components/MenuList.vue";
import OpenModal from "../components/OpenModal.vue";
</script>
