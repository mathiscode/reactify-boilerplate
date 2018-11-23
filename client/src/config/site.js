// Available Themes:
//  cerulean, cosmo, cyborg, darkly, flatly, journal, litera, lumen, lux, materia, minty, pulse,
//  sandstone, simplex, sketchy, slate, solar, spacelab, superhero, united, yeti

export const SiteTitle = 'Reactify Boilerplate'
export const SiteTheme = false // Specify BootSwatch.com Theme or false to use base bootstrap theme
export const NavbarColor = 'dark' // Using bootstrap's bg-* classes
export const NavbarDark = true // Is NavbarColor a dark style?
export const NavbarFixed = 'top' // Where to fix navbar, or false for normal

// Options for Particles.js
// https://github.com/VincentGarreau/particles.js/#usage
export const ParticlesEnabled = true
export const ParticlesConfig = {
  particles: {
    number: { value: 50 },
    color: { value: '#333' },
    shape: { type: 'circle' },
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
      value: 5,
      random: true,
      anim: {
        enable: true,
        speed: 20,
        size_min: 0.1,
        sync: false
      }
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: '#222',
      opacity: 0.4,
      width: 1
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
