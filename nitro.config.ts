import { defineNitroConfig } from "nitropack/config"

// https://nitro.build/config
export default defineNitroConfig({
  compatibilityDate: "latest",
  srcDir: "server",
  storage: {
    data: {
      driver: 'redis',
      url: process.env.KV_REST_API_URL,
      token: process.env.KV_REST_API_TOKEN
    }
  }
  
});
