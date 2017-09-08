<template>
  <div>
    <el-menu :default-active="$route.path" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" @select="changeTop">

      <template v-for="item in sideBar">
        <!-- 没有子菜单 -->
        <router-link v-if="!item.children" :to="currentTop.path+'/'+item.path">
          <el-menu-item :index="currentTop.path+'/'+item.path">{{item.name}}</el-menu-item>
        </router-link>

        <template v-else>
          <el-submenu :index="currentTop.path+'/'+item.path">
            <template slot="title">{{item.name}}</template>
            <template v-for="subItem in item.children">
              <router-link :to="currentTop.path+'/'+item.path+'/'+subItem.path">
                <el-menu-item :index="currentTop.path+'/'+item.path+'/'+subItem.path">{{subItem.name}}</el-menu-item>
              </router-link>
            </template>
          </el-submenu>
        </template>

      </template>

    </el-menu>
  </div>
</template>
<script>
import { mapGetters, mapState } from 'vuex'
export default {
  computed: {
    ...mapState({
      currentTop: state => state.router.currentTopRoute
    }),
    ...mapGetters({
      sideBar: 'router/sideBar'
    })
  },
  created() {
    console.log('side', this.$route);
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    changeTop(){
      console.log(this.$route)
    }
  },
  watch: {
    sideBar(newVal, oldVal) {
      console.log(newVal, oldVal)
    }
  }
}
</script>
<style>

</style>
