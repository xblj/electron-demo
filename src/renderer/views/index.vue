<template lang="html">
    <div class="content-wrap">
        <router-view :key="key"></router-view>
    </div>
</template>
<script>
export default {
    computed: {
        key() {
            return this.$route.name !== undefined ? this.$route.name + +new Date() : this.$route + +new Date()
        }
    }
};
</script>
