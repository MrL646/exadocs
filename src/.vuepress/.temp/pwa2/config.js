import { defineClientConfig } from "@vuepress/client";
import { setupPWA } from "C:/Users/seewo/Desktop/My File/git/exadocs/node_modules/vuepress-plugin-pwa2/lib/client/composables/setup.js";
import SWUpdatePopup from "C:/Users/seewo/Desktop/My File/git/exadocs/node_modules/vuepress-plugin-pwa2/lib/client/components/SWUpdatePopup.js";


export default defineClientConfig({
  setup: () => {
    setupPWA();
  },
  rootComponents: [
    SWUpdatePopup,
    
  ],
});
