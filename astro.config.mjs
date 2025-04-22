import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

const SERVER_PORT = 3000;
const LOCALHOST_URL = `http://localhost:${SERVER_PORT}`;
const LIVE_URL = 'https://teddy-sio-slam.github.io';
let BASE_URL = LOCALHOST_URL;

if (isBuild) {
	BASE_URL = LIVE_URL;
}

// https://astro.build/config
export default defineConfig({
	integrations: [tailwind()],
	site : LIVE_URL,
	base : BASE_URL,
});
