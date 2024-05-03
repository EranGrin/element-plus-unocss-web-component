import { defineConfig, presetUno, presetAttributify, presetIcons } from 'unocss';

export default defineConfig({
  presets: [
    presetUno(), // This preset provides Tailwind CSS-like utilities
    presetAttributify(), // Optional: enables attribute-based utilities
    presetIcons() // Optional: provides icon utilities
  ],
});