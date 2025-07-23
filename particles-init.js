particlesJS('particles-js', {
    particles: {
      number: { value: 90 },
      color: { value: "#1b2a41" },
      shape: { type: "circle" },
      opacity: { value: 0.9 },
      size: { value: 3 },
      line_linked: {
        enable: true,
        distance: 150,
        color: "#1b2a41",
        opacity: 0.4,
        width: 1
      },
      move: {
        enable: true,
        speed: 3,
        direction: "none",
        random: false,
        straight: false,
        out_mode: "out"
      }
    },
    interactivity: {
      detect_on: "window",
      events: {
        onhover: {
          enable: true,
          mode: "repulse"
        },
        onclick: {
          enable: true,
          mode: "push"
        }
      },
      modes: {
        repulse: {
          distance: 100,
          duration: 0.4
        },
        push: {
          particles_nb: 4
        }
      }
    },
    retina_detect: true
  });