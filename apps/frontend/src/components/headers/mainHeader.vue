<template>
  <header 
    class="fixed top-0 left-0 w-full py-4 z-50 transition-all duration-500" 
    :class="[isScrolled ? 'bg-white shadow-lg' : 'bg-transparent', isMenuOpen ? 'lg:bg-transparent' : '']"
    ref="headerRef"
  >
    <div class="container mx-auto px-4 md:px-8 flex items-center justify-between">
      <!-- Logo -->
      <div class="relative z-10">
        <a href="#" class="flex items-center">
          <div class="w-3 h-3 rounded-full bg-primary-gold mr-2"></div>
          <span 
            class="text-2xl md:text-3xl font-serif font-semibold" 
            :class="{ 'text-white': !isScrolled && !isMenuOpen, 'text-primary-dark': isScrolled || isMenuOpen }"
          >
            {{ logoText }} 
            <span class="text-primary-gold italic">{{ logoAccent }}</span>
          </span>
        </a>
      </div>

      <!-- Desktop Navigation -->
      <nav class="hidden lg:block">
        <ul class="flex gap-10">
          <li v-for="(item, index) in menuItems" :key="index">
            <a 
              :href="item.url" 
              class="relative font-medium text-base pb-1 transition-colors duration-300"
              :class="{ 'text-white hover:text-primary-gold': !isScrolled, 'text-primary-dark hover:text-primary-gold': isScrolled }"
              @mouseenter="animateLink"
              @mouseleave="resetLink"
            >
              {{ item.label }}
              <span class="absolute bottom-0 left-0 w-full h-px bg-primary-gold transform origin-left scale-x-0 transition-transform duration-500"></span>
            </a>
          </li>
        </ul>
      </nav>

      <!-- CTA Button -->
      <a 
        href="#contact" 
        class="hidden lg:inline-block py-3 px-6 bg-gradient-to-r from-primary-gold to-gold-light text-white rounded-full text-sm font-medium uppercase tracking-wider shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-500"
      >
        {{ ctaText }}
      </a>

      <!-- Mobile Menu Toggle -->
      <button 
        class="relative z-50 lg:hidden flex flex-col justify-center items-center w-10 h-10"
        @click="toggleMenu"
        aria-label="Toggle Menu"
      >
        <span 
          class="block w-7 h-0.5 transition-all duration-500 ease-in-out mb-1.5"
          :class="isMenuOpen ? 'bg-primary-dark rotate-45 translate-y-2' : 'bg-primary-dark'"
        ></span>
        <span 
          class="block w-7 h-0.5 transition-all duration-500 ease-in-out mb-1.5"
          :class="isMenuOpen ? 'bg-primary-dark opacity-0' : 'bg-primary-dark'"
        ></span>
        <span 
          class="block w-7 h-0.5 transition-all duration-500 ease-in-out"
          :class="isMenuOpen ? 'bg-primary-dark -rotate-45 -translate-y-2' : 'bg-primary-dark'"
        ></span>
      </button>
    </div>

    <!-- Mobile Sidebar -->
    <div 
      class="fixed top-0 right-0 w-80 h-screen bg-white shadow-2xl transform transition-transform duration-700 ease-in-out z-40"
      :class="isMenuOpen ? 'translate-x-0' : 'translate-x-full'"
      ref="sidebarRef"
    >
      <!-- Sidebar Header: logo + close -->
      <div class="flex items-center justify-between px-6 py-4 border-b">
        <a href="#" class="flex items-center">
          <div class="w-3 h-3 rounded-full bg-primary-gold mr-2"></div>
          <span class="text-xl font-serif font-semibold text-primary-dark">
            {{ logoText }} <span class="text-primary-gold italic">{{ logoAccent }}</span>
          </span>
        </a>
        <button 
          @click="closeMenu" 
          aria-label="Fechar menu" 
          class="text-2xl font-bold text-primary-dark"
        >
          &times;
        </button>
      </div>

      <div class="flex flex-col h-full pt-4 pb-8 px-8">
        <!-- Mobile Navigation -->
        <ul class="flex flex-col gap-6">
          <li v-for="(item, index) in menuItems" :key="index" class="opacity-0">
            <a 
              :href="item.url" 
              class="relative font-medium text-lg pb-1 text-primary-dark hover:text-primary-gold transition-colors duration-300 inline-block"
              @click="closeMenu"
            >
              {{ item.label }}
              <span class="absolute bottom-0 left-0 w-0 h-px bg-primary-gold transition-all duration-500 group-hover:w-full"></span>
            </a>
          </li>
        </ul>

        <!-- Mobile CTA Button -->
        <a 
          href="#contact" 
          class="mt-10 py-4 px-6 bg-gradient-to-r from-primary-gold to-gold-light text-white rounded-full text-sm font-medium uppercase tracking-wider text-center shadow-lg transform opacity-0"
          @click="closeMenu"
          ref="mobileCta"
        >
          {{ ctaText }}
        </a>
      </div>
    </div>

    <!-- Overlay para fechar ao clicar fora -->
    <div 
      class="fixed inset-0 bg-black bg-opacity-50 z-30 transition-opacity duration-500"
      :class="isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'"
      @click="closeMenu"
    ></div>
  </header>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, watch } from 'vue';
import gsap from 'gsap';

interface Props {
  logoText?: string;
  logoAccent?: string;
  ctaText?: string;
  menuItems?: Array<{ label: string; url: string }>;
}

const props = withDefaults(defineProps<Props>(), {
  logoText: 'Lumino',
  logoAccent: 'Clínica',
  ctaText: 'Agendar Consulta',
  menuItems: () => [
    { label: 'Início', url: '#home' },
    { label: 'Sobre Nós', url: '#about' },
    { label: 'Serviços', url: '#services' },
    { label: 'Galeria', url: '#gallery' },
    { label: 'Localização', url: '#location' },
    { label: 'Depoimentos', url: '#testimonials' }
  ]
});

// Desestruturação para usar direto no template
const { menuItems, logoText, logoAccent, ctaText } = props;

const isMenuOpen = ref(false);
const isScrolled = ref(false);
const headerRef = ref<HTMLElement | null>(null);
const sidebarRef = ref<HTMLElement | null>(null);

const toggleMenu = () => { isMenuOpen.value = !isMenuOpen.value };
const closeMenu  = () => { isMenuOpen.value = false };

const animateLink = (e: MouseEvent) => {
  const line = (e.currentTarget as HTMLElement).querySelector('span') as HTMLElement;
  gsap.to(line, { scaleX: 1, duration: 0.4, ease: 'power2.out' });
};
const resetLink = (e: MouseEvent) => {
  const line = (e.currentTarget as HTMLElement).querySelector('span') as HTMLElement;
  gsap.to(line, { scaleX: 0, duration: 0.4, ease: 'power2.in' });
};

const handleScroll = () => { isScrolled.value = window.scrollY > 50 };

watch(isMenuOpen, open => {
  if (open) {
    const items = document.querySelectorAll('.opacity-0');
    const cta   = document.querySelector('.mt-10.opacity-0');
    gsap.fromTo(items, { y:20, opacity:0 }, { y:0, opacity:1, stagger:0.1, delay:0.2, duration:0.6, ease:'power3.out' });
    if (cta) gsap.fromTo(cta, { y:20, opacity:0 }, { y:0, opacity:1, delay:0.6, duration:0.6, ease:'power3.out' });
  }
});

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
  handleScroll();
  if (headerRef.value) {
    gsap.from(headerRef.value, { y:-100, opacity:0, duration:1, ease:'power3.out' });
  }
});
onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<style>
/* Garante que o header fique acima de tudo */
header { isolation: isolate; }

/* Transições suaves */
.header-container * { transition: all 0.3s ease; }

@media (min-width: 1024px) {
  .translate-x-full { display: none; }
}
</style>
