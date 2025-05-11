<!-- src/components/buttons/MainButton.vue -->
<template>
  <a
    :href="href"
    :class="[base, variant === 'outline' ? outlineStyles : defaultStyles]"
  >
    {{ title }}
  </a>
</template>

<script setup lang="ts">
defineProps<{
  title: string;
  href: string;
  variant?: 'default' | 'outline';
}>();

const base = 'relative inline-block overflow-hidden px-[40px] py-[18px] no-underline font-medium uppercase tracking-[1px] transition-all duration-500 ease-out-expo rounded-[50px] cursor-pointer transform text-sm text-center 2xl:text-lg';

const defaultStyles = 'bg-gradient-to-r from-primary-gold to-gold-light text-white shadow-[0_10px_20px_rgba(201,168,116,0.2)] z-[1] before:content-[\'\'] before:absolute before:top-0 before:left-0 before:w-0 before:h-full before:bg-primary-dark before:transition-all before:duration-500 before:ease-out-expo before:z-[-1] hover:shadow-[0_15px_30px_rgba(201,168,116,0.4)] hover:-translate-y-[3px] hover:before:w-full';

const outlineStyles = 'bg-transparent text-primary-gold border-2 border-primary-gold shadow-none z-[1] before:content-[\'\'] before:absolute before:top-0 before:left-0 before:w-0 before:h-full before:bg-gradient-to-r before:from-primary-gold before:to-gold-light before:transition-all before:duration-500 before:ease-out-expo before:z-[-1] hover:text-white hover:shadow-[0_15px_30px_rgba(201,168,116,0.4)] hover:-translate-y-[3px] hover:before:w-full';
</script>
