<template>
  <div>
    <el-menu theme="dark" :default-active="currentTopRoute.path" :router="true" class="el-menu-demo" mode="horizontal" @select="topBarChange">
      <template v-for="item in topBar">
        <el-menu-item :index="item.path">
          <router-link :to="item.path">{{item.name}}</router-link>
        </el-menu-item>
      </template>
    </el-menu>
  </div>
</template>
<script>
import { mapMutations, mapState, mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters({
      topBar: 'router/topBar'
    }),
    ...mapState({
      currentTopRoute:state=>state.router.currentTopRoute
    })
  },
  mounted() {
    this.changeTopBar(this.$route.path);
  },
  methods: {
    ...mapMutations({
      changeTopBar: 'router/CHNAGE_TOP_BAR'
    }),
    topBarChange(key) {
      this.changeTopBar(key)
    }
  },
  watch: {
    $route() {
      console.log(this.$route)
      this.changeTopBar(this.$route.path);
    }
  }
}
</script>
<style>

</style>
