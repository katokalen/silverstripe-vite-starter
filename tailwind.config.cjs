/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    "./src/public/*.html",
    "./src/app/templates/**/*.ss",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: '#0D0D0E',
      white: '#FFFFFF',
      slate: '#222328',
      red: {
        light: '#FF2828',
        DEFAULT: '#DB1915',
        dark: '#9C1210'
      },
      gray: {
        100: '#EEEEEE',
        200: '#E6E7EC',
        300: '#C9CBD1',
        500: '#696B73',
        700: '#494B50',
        800: '#35363C'
      }
    },
    fill: {
      transparent: 'transparent',
      current: 'currentColor',
      black: '#0D0D0E',
      white: '#FFFFFF',
      slate: '#222328',
      red: {
        light: '#FF2828',
        DEFAULT: '#DB1915',
        dark: '#9C1210'
      },
      gray: {
        100: '#EEEEEE',
        200: '#E6E7EC',
        300: '#C9CBD1',
        500: '#696B73',
        700: '#494B50',
        800: '#35363C'
      }
    },
    fontSize: {
      xs: ['0.75rem', '1rem'], //12px/16px - caption
      sm: ['0.875rem', '1.25rem'], //14px/20px - p small
      base: ['1rem', '1.5rem'], //16px/24px - p/body
      lg: ['1.125rem', '1.625rem'], //18px/26px - h6 desktop
      xl: ['1.313rem', '1.75rem'], //21px/28px - h5 desktop & p large
      '2xl': ['1.5rem', '2rem'], //24px/32px - h4 desktop
      '3xl': ['1.875rem', '2.25rem'], //30px/36px - h2 mobile
      '4xl': ['2rem', '2.5rem'], //32px/40px - h3 desktop
      '5xl': ['2.25rem', '2.75rem'], //36px/44px - h2 desktop
      '6xl': ['2.75rem', '3.25rem'], //44px/52px - Display 2 mobile
      '7xl': ['3rem', '3.5rem'], //48px/56px - h1 tablet
      '8xl': ['3.5rem', '4rem'], //56px/64px - h1 desktop / Display 1 mobile
      '9xl': ['4rem', '4.5rem'], //64px/72px - Display 2 tablet
      '10xl': ['5rem', '5.5rem'], //80px/88px - Display 2 desktop / Display 01 tablet
      '11xl': ['6.5rem', '7rem'], //104px/112px - Display 1 desktop
      '13xl': ['6.5rem', '5.5rem'], //192px/104px - Oversize Text Animation Mobile
      '14xl': ['12rem', '10rem'], //192px/104px - Oversize Text Animation Tablet
      '15xl': ['13rem', '11rem'] //208px/104px - Oversize Text Animation Desktop
    },
    fontWeight: {
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700
    },
    screens: {
      xs: '460px',
      // => @media (min-width: 460px) { ... }

      sm: '640px',
      // => @media (min-width: 640px) { ... }

      md: '768px',
      // => @media (min-width: 768px) { ... }

      lg: '1024px',
      // => @media (min-width: 1024px) { ... }

      '2lg': '1140px',
      // => @media (min-width: 1140px) { ... }

      xl: '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px'
      // => @media (min-width: 1536px) { ... }
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1.25rem',
        sm: '1.25rem',
        md: '1.25rem',
        lg: '2rem',
        '2lg': '2rem',
        xl: '2rem',
        '2xl': '2rem'
      },
      screens: {
        sm: '640px', // default value
        md: '900px', // default value was 768px
        lg: '1024px', // default value
        '2lg': '1100px',
        xl: '1280px',
        '2xl': '1536px'
      }
    },
    corePlugins: {
      // We are only using one font, Inter, from google fonts
      fontFamily: false
    },
    extend: {
      zIndex: {
        0: '0',
        1: '1',
        2: '2',
        3: '3',
        5: '5'
      },
      maxWidth: {
        '8xl': '80rem' // 1440px
      },
      backgroundPosition: {
        'center-bottom': 'center bottom',
        'center-top': 'center top'
      },
      borderRadius: {
        lg: '14px'
      }
    }
  },
  variants: {},
  plugins: [require('@tailwindcss/aspect-ratio'), require('@tailwindcss/forms')]
}
