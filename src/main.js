
import { createApp } from 'vue'
import { store } from './store'
import * as iframeResizer from '@iframe-resizer/child'

import App from './App.vue'

createApp(App).use(store).use(iframeResizer).mount('#app')