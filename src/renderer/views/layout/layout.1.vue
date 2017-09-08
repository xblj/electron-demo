<template>
    <div class="wrap">
        <el-menu theme="dark" :default-active="currentRoute.path" :router="true" class="el-menu-demo" mode="horizontal" @select="topBarSelect">
            <template v-for="item in routes">
                <el-menu-item :index="item.path" :key="item.path">
                    <router-link :to="item.path">{{item.name}}</router-link>
                </el-menu-item>
            </template>
        </el-menu>
        <el-row>
            <el-col :span="4">
                <el-menu :default-active="$route.path" class="el-menu-vertical-demo" :collapse="false">
                    <template v-for="sideBarItem in sideBar">
                        <el-submenu index="sideBarItem.name">
                            <template slot="title">
                                <i class="el-icon-message"></i>
                                <span slot="title">{{sideBarItem.name}}</span>
                            </template>
                            <template v-for="side in sideBarItem.children">
                                <router-link :to="currentRoute.path+'/'+sideBarItem.path+'/'+side.path">
                                    <el-menu-item :index="currentRoute.path+'/'+sideBarItem.path+'/'+side.path">
                                        <span>{{side.name}}</span>
                                    </el-menu-item>
                                </router-link>
                            </template>
                        </el-submenu>
                    </template>
                </el-menu>
            </el-col>
        </el-row>
    </div>
</template>
<script>
import { mapGetters, mapMutations, mapState } from 'vuex'
export default {
    computed: {
        ...mapGetters({
            sideBar: 'router/sideBar',
            topBar:'router/topBar'
        }),
        ...mapState({
            routes: state => state.router.routes,
            currentRoute: state => state.router.currentRoute
        })
    },
    mounted() {
        this.changeBar('/user-center');
        setTimeout(() => {
            console.log('sideBar', this.sideBar)
        }, 100)
    },
    methods: {
        topBarSelect(key, keyPath) {
            this.changeBar(key)
            console.log(this.sideBar)
        },
        ...mapMutations({
            changeBar: 'router/CHNAGE_BAR'
        })
    }
}
</script>