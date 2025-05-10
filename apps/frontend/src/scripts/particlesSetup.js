// Arquivo para importação do particlesJS
// Este arquivo ajuda a resolver problemas de importação do Particles.js no Astro

// Importação direta para o particlesJS
export function setupParticles(containerId, config) {
  if (typeof window !== 'undefined') {
    // Certifique-se de que estamos no navegador
    if (typeof window.particlesJS !== 'undefined') {
      window.particlesJS(containerId, config);
    } else {
      console.warn('ParticlesJS não está definido! Certifique-se de importá-lo corretamente.');
    }
  }
}

// Configuração padrão para o particles
export const defaultParticlesConfig = {
  particles: {
    number: {
      value: 80,
      density: {// Arquivo para importação do particlesJS
// Este arquivo ajuda a resolver problemas de importação do Particles.js no Astro

// Importação direta para o particlesJS
export function setupParticles(containerId, config) {
  if (typeof window !== 'undefined') {
    // Certifique-se de que estamos no navegador
    if (typeof window.particlesJS !== 'undefined') {
      window.particlesJS(containerId, config);
    } else {
      console.warn('ParticlesJS não está definido! Certifique-se de importá-lo corretamente.');
    }
  }
}

// Configuração padrão para o particles
export const defaultParticlesConfig = {
  particles: {
    number: {
      value: 80,
      density: {
        enable: true,
        value_area: 800
      }
    },
    color: {
      value: '#c9a874'
    },
    shape: {
      type: 'circle'
    },
    opacity: {
      value: 0.1,
      random: true
    },
    size: {
      value: 5,
      random: true
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: '#c9a874',
      opacity: 0.05,
      width: 1
    },
    move: {
      enable: true,
      speed: 2,
      direction: 'none',
      random: true,
      straight: false,
      out_mode: 'out',
      bounce: false
    }
  },
  interactivity: {
    detect_on: 'canvas',
    events: {
      onhover: {
        enable: true,
        mode: 'grab'
      },
      onclick: {
        enable: true,
        mode: 'push'
      },
      resize: true
    }
  },
  retina_detect: true
};
        enable: true,
        value_area: 800
      }
    },
    color: {
      value: '#c9a874'
    },
    shape: {
      type: 'circle'
    },
    opacity: {
      value: 0.1,
      random: true
    },
    size: {
      value: 5,
      random: true
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: '#c9a874',
      opacity: 0.05,
      width: 1
    },
    move: {
      enable: true,
      speed: 2,
      direction: 'none',
      random: true,
      straight: false,
      out_mode: 'out',
      bounce: false
    }
  },
  interactivity: {
    detect_on: 'canvas',
    events: {
      onhover: {
        enable: true,
        mode: 'grab'
      },
      onclick: {
        enable: true,
        mode: 'push'
      },
      resize: true
    }
  },
  retina_detect: true
};