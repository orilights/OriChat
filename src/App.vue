
<template>
  <div class="main relative min-h-screen w-full flex justify-center items-center bg-black bg-opacity-30 backdrop-blur-sm" >
    <div class="px-6 py-4 z-20 bg-white rounded-xl bg-opacity-80 shadow-md overflow-hidden">
      <RouterView />
    </div>
  </div>
</template>

<script setup lang="ts">
</script>

<style>
body {
    background-image: url(https://static.amarea.cn/wallpaper/86368548_p0_optimized.jpg);
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-position: center;
  }
</style>

