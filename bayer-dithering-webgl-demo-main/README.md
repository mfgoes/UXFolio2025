# Three.js Bayer Dither Playground

> 📣 Featured on [Codrops](https://tympanus.net/codrops/2025/07/30/interactive-webgl-backgrounds-a-quick-guide-to-bayer-dithering/)!  
> 🚀 [Live Demo](https://tympanus.net/Tutorials/BayerDithering/)

A tiny demo that combines [**Astro**](https://astro.build/) and [**Three.js**](https://threejs.org/) to render an animated Bayer-dither shader in the background.  
Four pages are prerendered from one template, each with its own mask geometry, pixel tint, and background colour.

Click anywhere to spawn ripples 🌊.

---

## 1  Demo

```bash
git clone https://github.com/zavalit/bayer-dithering-webgl-demo.git
cd bayer-dithering-webgl-demo
pnpm install
pnpm dev           # http://localhost:4321
