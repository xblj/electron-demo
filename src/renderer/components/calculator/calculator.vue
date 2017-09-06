<template>
    <div class="cal">
    
         <div class="res">
            <p>{{result}}</p>
        </div>
        <div v-for="(row,index ) in myinterface" :key="index">
            <el-button class="btn" @click="numClick(col)" v-for="(col,subIndex) in row" :key="subIndex" type="defaut">{{col}}</el-button>
        </div>
        <div id="img" @click="editImg"></div>
        <div>
            <el-button @click="toggleDebug">打开测试</el-button>
            <el-button @click="capturer">截图</el-button>
        </div>
        <canvas id="myCanvas" ref="myCanvas"></canvas>
    </div>
</template>
<script>
// const remote = require('electron').remote;
import { remote } from 'electron';
// remote.require('electron').app.on('ready',()=>{
//     console.log('ready');
// });

import openBtn from '@/components/common/openBtn/openDialog'
export default {
    data() {
        return {
            myinterface: [
                ['C', '删除', '/'],
                [1, 2, 3],
                [4, 5, 6],
                [7, 8, 9],
                [0, '.', '='],
                ['*', '-', '+']
            ],
            num1: 21,
            num2: 1,
            result: 0,
            op: null,
            debugShow: false
        }
    },
    mounted() {
        // this.$http.get(BASE_URL).then(res=>{
        //     console.log(res);
        // })
        console.log(process.env.BASE_URL);
        console.log(__static);
        console.log(__dirname)
        console.log(__filename)
        // this.$electron.ipcRenderer.on('num-clilk',(ev,arg)=>{
        //     // alert(2)
        //     // console.log(ev,arg)
        //     this.result=arg;
        //     console.log(arg);
        // })
        // console.log(this.$electron);
    },
    methods: {
        editImg(){
            // let remote = this.$electron.remote;
            // let imgWin = this.remote.BrowserWindow({

            // })

        },
        numClick(num) {
            this.result = num;
        },
        toggleDebug() {
            let ipc = this.$electron.ipcRenderer;
            if (this.debugShow) {
                ipc.send('close-debug');
            } else {
                ipc.send('open-debug');
            }
            this.debugShow = !this.debugShow;
            console.log(this.debugShow)
        },
        capturer() {
            let desktopCapturer = this.$electron.desktopCapturer
            desktopCapturer.getSources({ types: ['screen'] }, function (error, sources) {
                if (error) throw error
                for (var i = 0; i < sources.length; ++i) {
                    console.log(sources[i]);
                    gotStream(sources[i].thumbnail.toDataURL());
                }
            });

            function gotStream(stream) {
                console.log(stream);
                let img = document.createElement('img');
                img.src = stream;
                let oDiv = document.getElementById('img');
                oDiv.appendChild(img);
            }
        }
    },
    components: {
        openBtn,
    }
}
</script>
<style scoped>
.res {
    width: 370px;
    height: 80px;
    text-align: right;
    border-radius: 4px;
    margin-bottom: 10px;
    border: 1px solid #c4c4c4;
}

.res>p {
    margin: 0 0 5px 0;
}

.btn {
    width: 120px;
    height: 60px;
    margin: 0 5px 5px 0;
}
</style>
