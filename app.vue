<template>
  <div>
    <NuxtPage />
  </div>
</template>
<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.2s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}


.slide-enter-active,
.slide-leave-active {
  transition: all 0.1s;
}

.slide-enter-from,
.slide-leave-to {
  transform: translateX(100%) ;
}

</style>