import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
	integrations: [tailwind()],
	site : 'https://teddy-sio-slam.github.io/Portfolio/',
	base : 'Portfolio/',
});
