<template>
    <div class="container">
        {{title}}
    </div>
</template>

<script>
export default {
    name: "people",
    data: () => {
        return {
            title: "people",
        };
    },
    watch: {
        $route(to) {
            this.title = to.name;
        },
    },
    created() {
        this.title = this.$route.name;
    },
};
</script>

<style>
</style>