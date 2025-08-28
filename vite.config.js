import { defineConfig } from 'vite';
import vituum from 'vituum';
import nunjucks from '@vituum/vite-plugin-nunjucks';
import twig from '@vituum/vite-plugin-twig';
import postcss from '@vituum/vite-plugin-postcss';

import imageOptimizer from '@bro-academy/vite-plugin-image-optimizer';
import svgSprite from '@bro-academy/vite-plugin-svg-sprite';

export default defineConfig({
  build: {
    assetsInlineLimit: 0,
  },
  plugins: [
    svgSprite(),
    vituum(),
    twig(),
    nunjucks(),
    postcss(),
    imageOptimizer(),
  ],
});
