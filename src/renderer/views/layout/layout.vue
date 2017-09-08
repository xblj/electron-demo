<template>
    <div class="wrap">
        <top-nav></top-nav>
        <el-row>
            <el-col :span="5">
                <side-nav></side-nav>
            </el-col>
            <el-col :span="19">
                <router-view></router-view>
            </el-col>
        </el-row>
    </div>
</template>
<script>
import { mapGetters, mapMutations, mapState } from 'vuex';
import topNav from './topbar';
import sideNav from './sidebar';
export default {
    computed: {
        ...mapGetters({
            sideBar: 'router/sideBar',
            topBar: 'router/topBar'
        })
    },
    methods: {
        // topBarSelect(key, keyPath) {
        //     this.changeBar(key)
        //     console.log(this.sideBar)
        // },
        // ...mapMutations({
        //     changeBar: 'router/CHNAGE_BAR'
        // })
    },
    components: {
        topNav, sideNav
    }
}
</script>