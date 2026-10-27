/** @type {import('tailwindcss').Config} */
const pomegranate = {
  DEFAULT: '#C0392B',
  50: '#FDF2F2',
  100: '#FDE8E8',
  200: '#FBD5D5',
  300: '#F8B4B4',
  400: '#F98080',
  500: '#C0392B',
  600: '#A93226',
  700: '#922B21',
  800: '#7B241C',
  900: '#641E16',
  950: '#4A1510',
  pantone: '#6C2831',
  dark: '#660C21',
};

const mockOrange = {
  DEFAULT: '#FFA368',
  50: '#FFF7ED',
  100: '#FFEDD5',
  200: '#FED7AA',
  300: '#FDBA74',
  400: '#FFA368',
  500: '#FF9863',
  600: '#EA580C',
  700: '#C2410C',
  800: '#9A3412',
  900: '#7C2D12',
  950: '#431407',
  pantone: '#FFA368',
  vivid: '#FF9863',
};

const claretRed = {
  DEFAULT: '#C84B61',
  50: '#FDF2F4',
  100: '#FCE7EB',
  200: '#F9CFD7',
  300: '#F5A7B7',
  400: '#EE738E',
  500: '#C84B61',
  600: '#B0354B',
  700: '#7F1734',
  800: '#680018',
  900: '#520013',
  950: '#38000D',
  pantone: '#C84B61',
  deep: '#7F1734',
};

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Pomegranate / Pomeranate variations
        pomegranate,
        pomeranate: pomegranate,
        'Pomegranate': pomegranate,
        'Pomeranate': pomegranate,

        // Mock Orange variations
        'mock-orange': mockOrange,
        mockOrange: mockOrange,
        'Mock Orange': mockOrange,
        mockorange: mockOrange,

        // Claret Red variations
        'claret-red': claretRed,
        claretRed: claretRed,
        'Claret Red': claretRed,
        claretred: claretRed,
        claret: claretRed,
      },
    },
  },
  plugins: [],
}
