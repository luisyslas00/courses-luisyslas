tailwind.config = {
    theme: {
      extend: {
        keyframes: {
          aparecer: {
            '0%': { transform: 'translateX(-100px)', opacity: '0' },
            '100%': { transform: 'translateX(0)', opacity: '1' },
          },
          aparecerNav: {
            '0%':{ transform:'translateY(-150px)'},
            '100%': { transform: 'translateY(0)'},
          },
          desaparecerNav: {
            '0%': { transform: 'translateY(0)'},
            '100%':{ transform:'translateY(-150px)'},
          }
        },
        animation: {
          aparecer: 'aparecer 3s forwards',
          aparecerNav: 'aparecerNav 0.5s ease-in',
          desaparecerNav: 'desaparecerNav 0.5s ease-in'
        },
      },
    },
  }