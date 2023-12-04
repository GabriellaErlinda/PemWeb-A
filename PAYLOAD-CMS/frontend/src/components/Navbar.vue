<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>
<template>
  <div class="navbar">
    <div class="logo">
      <a href="/"> Michelin Cafe</a>
    </div>
    <div class="mx-6">
      <ul>
        <li><RouterLink to="/">HOME</RouterLink></li>
        <li><RouterLink to="/about">ABOUT</RouterLink></li>
        <li><RouterLink to="404">NEWS</RouterLink></li>
      </ul>
    </div>
  </div>
</template>
