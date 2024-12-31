import {nextui} from '@nextui-org/theme'


// const {
// 	default: flattenColorPalette,
//   } = require("tailwindcss/lib/util/flattenColorPalette");
   

// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [
//     './layouts/**/*.{js,ts,jsx,tsx,mdx}',
//     './pages/**/*.{js,ts,jsx,tsx,mdx}',
//     './components/**/*.{js,ts,jsx,tsx,mdx}',
//     './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
//   ],
//   theme: {
//   	extend: {
//   		fontFamily: {
//   			sans: [
//   				'var(--font-sans)'
//   			],
//   			mono: [
//   				'var(--font-mono)'
//   			]
//   		},
//   		borderRadius: {
//   			lg: 'var(--radius)',
//   			md: 'calc(var(--radius) - 2px)',
//   			sm: 'calc(var(--radius) - 4px)'
//   		},
//   		colors: {}
//   	},
// 	plugins: [addVariablesForColors],
//   },
//   darkMode: ["class", 'class'],
//   plugins: [nextui(), require("tailwindcss-animate")],
  
// }


// // This plugin adds each Tailwind color as a global CSS variable, e.g. var(--gray-200).
// function addVariablesForColors({ addBase, theme }: any) {
// 	let allColors = flattenColorPalette(theme("colors"));
// 	let newVars = Object.fromEntries(
// 	  Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
// 	);
   
// 	addBase({
// 	  ":root": newVars,
// 	});
//   }




  const {
	default: flattenColorPalette,
  } = require("tailwindcss/lib/util/flattenColorPalette");
  
  /** @type {import('tailwindcss').Config} */
  module.exports = {
	content: [
	  "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
	  "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
	  "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  
	  // Or if using `src` directory:
	  "./src/**/*.{js,ts,jsx,tsx,mdx}",
	],
	darkMode: "class",
	theme: {
	  extend: {},
	},
	plugins: [nextui(), require("tailwindcss-animate"),addVariablesForColors],
  };
  
  // This plugin adds each Tailwind color as a global CSS variable, e.g. var(--gray-200).
  function addVariablesForColors({
	addBase,
	theme
  }) {
	let allColors = flattenColorPalette(theme("colors"));
	let newVars = Object.fromEntries(Object.entries(allColors).map(([key, val]) => [`--${key}`, val]));
  
	addBase({
	  ":root": newVars,
	});
  }
  


