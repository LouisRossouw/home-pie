const sharedConfig = require("../../packages/tailwind-config/tailwind.config.js");

/** @type {import('tailwindcss').Config} */
module.exports = {
  ...sharedConfig,
  content: [...sharedConfig.content, './index.html', './src/**/*.{js,ts,jsx,tsx}', '../../packages/ui/**/*.{js,ts,jsx,tsx}']
}


