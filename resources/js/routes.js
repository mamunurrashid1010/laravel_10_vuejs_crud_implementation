const Welcome = () => import('./components/Welcome.vue' /* webpackChunkName: "resource/js/components/welcome" */)

export const routes = [
    {
        name: 'home',
        path: '/',
        component: Welcome
    },

]
