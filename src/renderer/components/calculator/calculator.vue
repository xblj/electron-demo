<template>
    <div class="cal">
    
        <div class="res">
            <!-- <p>{{num1}}</p>
                                <p>{{op+' '+num2}}</p> -->
            <p>{{result}}</p>
        </div>
        <div v-for="(row,index ) in myinterface" :key="index">
            <el-button class="btn" @click="numClick(col)" v-for="(col,subIndex) in row" :key="subIndex" type="defaut">{{col}}</el-button>
        </div>
        <div id="img">
        </div>
        <div>
            <el-button @click="toggleDebug">打开测试</el-button>
            <el-button @click="capturer">截图</el-button>
            <el-button>三个按钮</el-button>
        </div>
        <div>
            <el-button>一个按钮</el-button>
            <el-button>二个按钮</el-button>
            <el-button>三个按钮</el-button>
            <open-btn></open-btn>
        </div>
        <div>
            <el-button>一个按钮</el-button>
            <el-button>二个按钮</el-button>
            <el-button>三个按钮</el-button>
        </div>
</template>
<script>
// const remote = require('electron').remote;
import { remote } from 'electron';
// remote.require('electron').app.on('ready',()=>{
//     console.log('ready');
// });


import openBtn from '@/components/common/openBtn/openDialog'
console.log(openBtn);
console.log(remote.require('electron').app.qwe);
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
        // this.$electron.ipcRenderer.on('num-clilk',(ev,arg)=>{
        //     // alert(2)
        //     // console.log(ev,arg)
        //     this.result=arg;
        //     console.log(arg);
        // })
        // console.log(this.$electron);
    },
    methods: {
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
            console.log(desktopCapturer);
            desktopCapturer.getSources({ types: ['window', 'screen'] }, function (error, sources) {
                if (error) throw error
                for (var i = 0; i < sources.length; ++i) {
                    console.log(sources[i])
                    if (sources[i].name === 'Electron') {
                        navigator.webkitGetUserMedia({
                            audio: false,
                            video: {
                                mandatory: {
                                    chromeMediaSource: 'desktop',
                                    chromeMediaSourceId: sources[i].id,
                                    minWidth: 1280,
                                    maxWidth: 1280,
                                    minHeight: 720,
                                    maxHeight: 720
                                }
                            }
                        }, gotStream, getUserMediaError);
                        return
                    }
                }
            });

            function gotStream(stream) {
                // console.log(document.querySelector('video'));
                let img = document.createElement('img');
                img.src = URL.createObjectURL(stream);
                let oDiv = document.getElementById('img');
                oDiv.appendChild(img);

            }

            function getUserMediaError(e) {
                console.log('getUserMediaError')
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
