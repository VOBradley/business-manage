import './bootstrap';

import { createApp } from "vue/dist/vue.esm-bundler";

import TestComponent from "../views/components/TestComponent.vue";

const app = createApp({
    components: {
        TestComponent
    }
});

app.mount('#app')
