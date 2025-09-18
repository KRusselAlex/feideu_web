/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Couleurs principales (vos préférences)
        primary: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe', // votre thirdly
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb', // proche de votre secondary #1d4dd8
          700: '#1d4ed8', // votre secondary
          800: '#1e40af',
          900: '#1e3a8a', // votre primary
        },

        // Couleurs secondaires (grays modernes)
        secondary: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
        },

        // Couleurs d'accentuation
        accent: {
          50: '#fefce8',
          100: '#fef9c3',
          200: '#fef08a',
          300: '#fde047',
          400: '#facc15',
          500: '#eab308', // jaune/or pour les CTA
          600: '#ca8a04',
          700: '#a16207',
          800: '#854d0e',
          900: '#713f12',
        },

        // Couleurs système
        success: {
          50: '#f0fdf4',
          100: '#dcfce7',
          500: '#22c55e',
          600: '#16a34a',
          700: '#15803d',
        },

        warning: {
          50: '#fffbeb',
          100: '#fef3c7',
          500: '#f59e0b',
          600: '#d97706',
          700: '#b45309',
        },

        error: {
          50: '#fef2f2',
          100: '#fee2e2',
          500: '#ef4444',
          600: '#dc2626',
          700: '#b91c1c',
        },

        // Couleurs personnalisées de votre ancien config
        textColor: '#262626',
        fourthly: '#F2F2F2',

        // Variables CSS pour la compatibilité
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
      },

      fontFamily: {
        // Polices modernes et élégantes
        sans: [
          'Inter',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'Helvetica Neue',
          'Arial',
          'sans-serif'
        ],
        heading: [
          'Poppins',
          'system-ui',
          '-apple-system',
          'sans-serif'
        ],
        display: [
          'Space Grotesk',
          'system-ui',
          'sans-serif'
        ],
        mono: [
          'JetBrains Mono',
          'Fira Code',
          'Consolas',
          'monospace'
        ],
      },

      fontSize: {
        // Tailles personnalisées
        '2xs': ['0.625rem', { lineHeight: '0.75rem' }],
        '6xl': ['3.5rem', { lineHeight: '1.1' }],
        '7xl': ['4.5rem', { lineHeight: '1.1' }],
        '8xl': ['6rem', { lineHeight: '1' }],
        '9xl': ['8rem', { lineHeight: '1' }],
      },

      spacing: {
        // Espacements personnalisés
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },

      borderRadius: {
        // Rayons personnalisés pour un design moderne
        '4xl': '2rem',
        '5xl': '3rem',
      },

      boxShadow: {
        // Ombres modernes et subtiles
        'soft': '0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)',
        'medium': '0 4px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 30px -5px rgba(0, 0, 0, 0.05)',
        'large': '0 10px 40px -10px rgba(0, 0, 0, 0.15), 0 20px 60px -10px rgba(0, 0, 0, 0.1)',
        'colored-blue': '0 8px 32px rgba(59, 130, 246, 0.15)',
        'colored-indigo': '0 8px 32px rgba(99, 102, 241, 0.15)',
        'glow-blue': '0 0 20px rgba(59, 130, 246, 0.3)',
        'glow-indigo': '0 0 20px rgba(99, 102, 241, 0.3)',
      },

      animation: {
        // Animations personnalisées
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'fade-in-up': 'fadeInUp 0.6s ease-out',
        'fade-in-down': 'fadeInDown 0.6s ease-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'slide-down': 'slideDown 0.5s ease-out',
        'slide-left': 'slideLeft 0.5s ease-out',
        'slide-right': 'slideRight 0.5s ease-out',
        'scale-in': 'scaleIn 0.3s ease-out',
        'scale-out': 'scaleOut 0.3s ease-out',
        'bounce-soft': 'bounceSoft 1s ease-in-out infinite',
        'pulse-soft': 'pulseSoft 2s ease-in-out infinite',
        'float': 'float 3s ease-in-out infinite',
        'gradient': 'gradient 8s ease infinite',
        'shimmer': 'shimmer 2s linear infinite',
      },

      keyframes: {
        // Keyframes pour les animations
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': {
            opacity: '0',
            transform: 'translateY(30px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)'
          },
        },
        fadeInDown: {
          '0%': {
            opacity: '0',
            transform: 'translateY(-30px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)'
          },
        },
        slideUp: {
          '0%': {
            transform: 'translateY(20px)',
            opacity: '0'
          },
          '100%': {
            transform: 'translateY(0)',
            opacity: '1'
          },
        },
        slideDown: {
          '0%': {
            transform: 'translateY(-20px)',
            opacity: '0'
          },
          '100%': {
            transform: 'translateY(0)',
            opacity: '1'
          },
        },
        slideLeft: {
          '0%': {
            transform: 'translateX(20px)',
            opacity: '0'
          },
          '100%': {
            transform: 'translateX(0)',
            opacity: '1'
          },
        },
        slideRight: {
          '0%': {
            transform: 'translateX(-20px)',
            opacity: '0'
          },
          '100%': {
            transform: 'translateX(0)',
            opacity: '1'
          },
        },
        scaleIn: {
          '0%': {
            transform: 'scale(0.95)',
            opacity: '0'
          },
          '100%': {
            transform: 'scale(1)',
            opacity: '1'
          },
        },
        scaleOut: {
          '0%': {
            transform: 'scale(1)',
            opacity: '1'
          },
          '100%': {
            transform: 'scale(0.95)',
            opacity: '0'
          },
        },
        bounceSoft: {
          '0%, 100%': {
            transform: 'translateY(0)'
          },
          '50%': {
            transform: 'translateY(-10px)'
          },
        },
        pulseSoft: {
          '0%, 100%': {
            opacity: '1'
          },
          '50%': {
            opacity: '0.7'
          },
        },
        float: {
          '0%, 100%': {
            transform: 'translateY(0px)'
          },
          '50%': {
            transform: 'translateY(-10px)'
          },
        },
        gradient: {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          },
        },
        shimmer: {
          '0%': {
            'background-position': '-200% center'
          },
          '100%': {
            'background-position': '200% center'
          },
        },
      },

      backdropBlur: {
        xs: '2px',
      },

      screens: {
        'xs': '475px',
        '3xl': '1600px',
      },

      zIndex: {
        '100': '100',
      },

      transitionDuration: {
        '0': '0ms',
        '2000': '2000ms',
      },

      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [
    // Plugin pour les animations personnalisées
    function ({ addUtilities }) {
      const newUtilities = {
        '.text-shadow': {
          textShadow: '2px 2px 4px rgba(0,0,0,0.1)',
        },
        '.text-shadow-lg': {
          textShadow: '3px 3px 6px rgba(0,0,0,0.2)',
        },
        '.backdrop-blur-xs': {
          backdropFilter: 'blur(2px)',
        },
        '.writing-vertical': {
          writingMode: 'vertical-rl',
          textOrientation: 'mixed',
        },
      }
      addUtilities(newUtilities)
    }
  ],
}