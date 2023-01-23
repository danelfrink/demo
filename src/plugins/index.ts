/**
 * plugins/index.ts
 *
 * Automatically included in `./src/main.ts`
 */

// Plugins
import { loadFonts } from './webfontloader'
import vuetify from './vuetify'
import VueGoogleMaps from '@fawmi/vue-google-maps'
import pinia from '../store'
import router from '../router'

// Types
import type { App } from 'vue'

export function registerPlugins (app: App) {
  loadFonts()
  app
    .use(vuetify)
    .use(VueGoogleMaps, {
      load: {
        key: 'enter your own'
      }
    })
    .use(router)
    .use(pinia)
}
