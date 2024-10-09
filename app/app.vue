<script setup lang="ts">
const { siteName } = useAppConfig();

useHead({
  htmlAttrs: {
    lang: 'en',
  },
  title: siteName,
  meta: [
    { name: 'description', content: 'Choicest collection for Them and you; at prices you can\'t miss' },
    { property: 'og:image', content: 'https://res.cloudinary.com/dvclkfddb/image/upload/v1713701151/RuchikarStores/More/broach_RVD_xvkszq.png' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0, viewport-fit=cover' },
  ],
});
</script>

<template>
  <AppHeader />
  <div class="pt-[72px] lg:pt-20 min-h-[calc(100vh-72px)]">
    <NuxtPage />
  </div>
  <AppFooter />
  <!-- <Notivue v-slot="item">
    <Notification :item="item" :theme="materialTheme" />
  </Notivue> -->
</template>

<style lang="postcss">
.dark {
  @apply bg-black text-neutral-100;
  color-scheme: dark;
}
.dropdown-enter-active {
  @apply transition duration-200 ease-out;
}
.dropdown-enter-from,
.dropdown-leave-to {
  @apply translate-y-5 opacity-0;
}
.dropdown-enter-to,
.dropdown-leave-from {
  @apply transform opacity-100;
}
.dropdown-leave-active {
  @apply transition duration-150 ease-in;
}
</style>
