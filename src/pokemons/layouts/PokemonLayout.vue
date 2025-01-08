<template>
  <div>Pokemon Layout</div>
  <Suspense>
    <RouterView />
    <template #fallback> Espere, estamos cargando el contenido... </template>
  </Suspense>
</template>
<script setup lang="ts"></script>
