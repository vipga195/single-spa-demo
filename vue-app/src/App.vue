<template>
    <div
        id="app"
        class="main"
    >
        <img
            alt="Vue logo"
            :src="logo"
        >
        <HelloWorld msg="Welcome to Your Vue.js App" />
    </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";

export default {
    name: "App",
    data: () => {
        return { logo: require("./assets/logo.png") };
    },
    components: {
        HelloWorld,
    },
    created() {
        let img = new Image();
        img.src = require("./assets/logo.png");
        console.log({ img });
        img.onload = (e) => {
            console.log({ e });
        };
    },
};
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
}
</style>
