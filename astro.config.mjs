import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

const SERVER_PORT = 3000;
const LOCALHOST_URL = `http://localhost:${SERVER_PORT}`;
const LIVE_URL = 'https://teddy-sio-slam.github.io';

// Détection du mode
const isBuild = import.meta.env.MODE === "production";
const BASE_URL = isBuild ? LIVE_URL : LOCALHOST_URL;

export default defineConfig({
	integrations: [tailwind()],
	site: LIVE_URL,
	base: isBuild ? '/teddy-sio-slam/' : '/', // 💡 chemin relatif utilisé par GitHub Pages
});
