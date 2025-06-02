<template>
  <div class="header-wrapper">
    <header 
      class="fixed top-0 left-0 w-full py-4 z-50 transition-all duration-500" 
      :class="[isScrolled ? 'bg-white shadow-lg' : 'bg-transparent']"
      ref="headerRef"
    >
      <div class="container mx-auto px-4 md:px-8 flex items-center justify-between">
        <!-- Logo -->
        <div  class="relative z-10">
          <a href="/" class="flex items-center">
              <img class="h-[60px]" width="120" height="100" format="webp" :src="mainData?.logo_escura" alt="Logo" />
          </a>
        </div>

        <!-- Desktop Navigation -->
        <nav class="hidden lg:block">
          <ul class="flex gap-10">
            <li v-for="(item, index) in menuItems" :key="index">
              <a 
                :href="item.url" 
                class="relative font-medium text-base pb-1 transition-colors duration-500 group"
                :class="{ 'text-primary-dark hover:text-primary-gold': !isScrolled, 'hover:text-primary-gold': isScrolled }"
              >
                {{ item.label }}
                <span class="absolute bottom-0 left-0 w-full h-px bg-primary-gold transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
              </a>
            </li>
          </ul>
        </nav>

        <!-- CTA Button -->
        <MainButton class="2xl:!text-sm text-xs !hidden lg:!block" :title="ctaText" href="#contact"/>

        <!-- Mobile Menu Toggle -->
        <button 
          class="relative z-50 lg:hidden flex flex-col justify-center items-center w-10 h-10"
          @click="toggleMenu"
          aria-label="Toggle Menu"
        >
          <span 
            class="block w-7 h-0.5 transition-all duration-500 ease-in-out"
            :class="isMenuOpen ? 'bg-primary-dark rotate-45 translate-y-2' : 'bg-primary-dark'"
          ></span>
          <span 
            class="block w-7 h-0.5 transition-all duration-500 ease-in-out my-1.5"
            :class="isMenuOpen ? 'bg-primary-dark opacity-0' : 'bg-primary-dark'"
          ></span>
          <span 
            class="block w-7 h-0.5 transition-all duration-500 ease-in-out"
            :class="isMenuOpen ? 'bg-primary-dark -rotate-45 -translate-y-2' : 'bg-primary-dark'"
          ></span>
        </button>
      </div>
    </header>

    <!-- Mobile Sidebar -->
    <div 
      class="fixed top-0 right-0 w-80 h-screen bg-white shadow-2xl transform transition-transform duration-700 ease-in-out z-[99999]"
      :class="isMenuOpen ? 'translate-x-0' : 'translate-x-full'"
      ref="sidebarRef"
    >
      <!-- Sidebar Header: logo + close -->
      <div class="flex items-center justify-between px-6 py-4">
<img  class="h-[60px]" :src="mainData?.logo_escura" alt="Logo" />
        <button 
          @click="closeMenu" 
          aria-label="Fechar menu" 
          class="text-2xl font-bold cursor-pointer text-primary-dark hover:text-primary-gold transition-colors duration-300"
        >
          &times;
        </button>
      </div>

      <div class="flex flex-col h-full pt-4 pb-8 px-8">
        <!-- Mobile Navigation -->
        <ul class="flex flex-col gap-6">
          <li v-for="(item, index) in menuItems" :key="index" class="mobile-menu-item">
            <a 
              :href="item.url" 
              class="relative font-medium text-lg cursor-pointer pb-1 text-primary-dark hover:text-primary-gold transition-colors duration-300 inline-block group"
              @click="closeMenu"
            >
              {{ item.label }}
              <span class="absolute bottom-0 left-0 w-0 h-px bg-primary-gold transition-all duration-300 group-hover:w-full"></span>
            </a>
          </li>
        </ul>

        <!-- Mobile CTA Button -->
        <MainButton 
          @click="closeMenu" 
          ref="mobileCta" 
          class="2xl:!text-sm text-xs !block lg:!hidden mt-8 mobile-cta" 
          :title="ctaText" 
          href="#contact"
        />
      </div>
    </div>

    <!-- Overlay para fechar ao clicar fora -->
    <div 
      class="fixed inset-0 bg-black/50 z-[9999] transition-opacity duration-500"
      :class="isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'"
      @click="closeMenu"
    ></div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, watch } from 'vue';
import gsap from 'gsap';
import MainButton from '../buttons/mainButton.vue';
import { getMainDataPublic } from '../../data/mainData';
const mainData = ref();

const fetchMainData = async () => {
  mainData.value = await getMainDataPublic();
  
};

interface MenuItem {
  label: string;
  url: string;
}

interface Props {
  logoUrl?: string;
  ctaText?: string;
  menuItems?: MenuItem[];
}

const props = withDefaults(defineProps<Props>(), {
  logoUrl: '',
  ctaText: 'Agendar Consulta',
  menuItems: () => [
  { label: 'Início', url: '/' },
  { label: 'Sobre Nós', url: '/sobre-nos' },
  { label: 'Serviços', url: '/servicos' },
  { label: 'Posts', url: '/blog' },
  { label: 'Contato', url: '/contato' },
  ]
});

// Reactive state
const isMenuOpen = ref(false);
const isScrolled = ref(false);
const headerRef = ref<HTMLElement | null>(null);
const sidebarRef = ref<HTMLElement | null>(null);

const toggleMenu = () => { 
  isMenuOpen.value = !isMenuOpen.value;
  // Prevenir scroll quando menu está aberto
  if (isMenuOpen.value) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = 'auto';
  }
};

const closeMenu = () => { 
  isMenuOpen.value = false;
  document.body.style.overflow = 'auto';
};

const handleScroll = () => { 
  isScrolled.value = window.scrollY > 50;
};

// Animação do menu mobile
watch(isMenuOpen, (isOpen) => {
  if (isOpen) {
    // Reset das animações
    gsap.set('.mobile-menu-item', { y: 20, opacity: 0 });
    gsap.set('.mobile-cta', { y: 20, opacity: 0 });
    
    // Animar itens do menu
    gsap.to('.mobile-menu-item', {
      y: 0,
      opacity: 1,
      stagger: 0.1,
      delay: 0.2,
      duration: 0.6,
      ease: 'power3.out'
    });
    
    // Animar CTA
    gsap.to('.mobile-cta', {
      y: 0,
      opacity: 1,
      delay: 0.6,
      duration: 0.6,
      ease: 'power3.out'
    });
  }
});

onMounted(async () => {
  window.addEventListener('scroll', handleScroll);
  handleScroll();
  await fetchMainData();
  // Animação inicial do header
  if (headerRef.value) {
    gsap.fromTo(headerRef.value, 
      { y: -100, opacity: 0 }, 
      { y: 0, opacity: 1, duration: 1, ease: 'power3.out' }
    );
  }
});

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll);
  // Garantir que o scroll seja restaurado
  document.body.style.overflow = 'auto';
});
</script>

<style scoped>
/* Container wrapper */
.header-wrapper {
  position: relative;
}

/* Garante que o header fique acima de tudo */
header { 
  isolation: isolate; 
}

/* Fix para mobile hamburger */
@media (max-width: 1024px) {
  .translate-x-full {
    transform: translateX(100%);
  }
}

/* Estilo para o overlay em tela cheia */
.fixed.inset-0 {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}
</style>