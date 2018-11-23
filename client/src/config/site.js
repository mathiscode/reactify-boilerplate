// Available Themes:
//  cerulean, cosmo, cyborg, darkly, flatly, journal, litera, lumen, lux, materia, minty, pulse,
//  sandstone, simplex, sketchy, slate, solar, spacelab, superhero, united, yeti

export const SiteTitle = 'Reactify Boilerplate'
export const SiteTheme = false // Specify BootSwatch.com Theme or false to use base bootstrap theme
export const NavbarColor = 'dark' // Using bootstrap's bg-* classes
export const NavbarDark = true // Is NavbarColor a dark style?
export const NavbarFixed = 'top' // Where to fix navbar, or false for normal

// Options for Particles.js
export const ParticlesEnabled = true
export const ParticlesConfig = {
  particles: {
    number: {
      value: 50,
      density: {
        enable: false,
        value_area: 800
      }
    },
    color: {
      value: '#333333'
    },
    shape: {
      type: 'circle',
      stroke: {
        width: 0,
        color: '#000000'
      },
      polygon: {
        nb_sides: 5
      },
      image: {
        src: 'img/github.svg',
        width: 100,
        height: 100
      }
    },
    opacity: {
      value: 0.5,
      random: true,
      anim: {
        enable: true,
        speed: 1,
        opacity_min: 0.1,
        sync: false
      }
    },
    size: {
      value: 3.9458004845442964,
      random: true,
      anim: {
        enable: true,
        speed: 40,
        size_min: 0.1,
        sync: false
      }
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: '#222222',
      opacity: 0.4,
      width: 1
    },
    move: {
      enable: true,
      speed: 6,
      direction: 'none',
      random: false,
      straight: false,
      out_mode: 'out',
      bounce: false,
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200
      }
    }
  },
  interactivity: {
    detect_on: 'canvas',
    events: {
      onhover: {
        enable: true,
        mode: 'repulse'
      },
      onclick: {
        enable: true,
        mode: 'push'
      },
      resize: true
    },
    modes: {
      grab: {
        distance: 400,
        line_linked: {
          opacity: 1
        }
      },
      bubble: {
        distance: 400,
        size: 40,
        duration: 2,
        opacity: 8,
        speed: 3
      },
      repulse: {
        distance: 50,
        duration: 0.4
      },
      push: {
        particles_nb: 4
      },
      remove: {
        particles_nb: 2
      }
    }
  },
  retina_detect: true
}
