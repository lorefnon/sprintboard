import { createApp } from 'vue'


import './styles/base.sass'
import './styles/utils.sass'
import './styles/uchu-color-palette-expanded.css'
import './styles/app-theme.sass'

import App from './App.vue'

const app = createApp(App)

app.mount('#app')
