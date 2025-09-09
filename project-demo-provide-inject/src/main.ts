import { ref, provide } from 'vue';
import { myTextKey } from './keys';
import { createApp } from 'vue'
import App from './App.vue'

const myText = ref<string>('Toto');

const app = createApp(App)

app.provide(myTextKey, myText)

app.mount('#app')
