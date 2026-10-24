import { defineConfig } from 'astro/config'

export default defineConfig({
  site: process.env.SITE_URL || 'https://zomers.online',
  // Set by the deploy workflow when GitHub Pages serves the site from a subfolder.
  base: process.env.BASE_PATH || '/',
  trailingSlash: 'ignore',
})
