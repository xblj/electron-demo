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
        <el-button>一个按钮</el-button>
        <el-button>二个按钮</el-button>
        <el-button>三个按钮</el-button>
    </div>
</template>
<script>
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
            op: null
        }
    },
    mounted(){
        this.$electron.ipcRenderer.on('num-clilk',(ev,arg)=>{
            // alert(2)
            // console.log(ev,arg)
            this.result=arg;
            console.log(arg);
        })
        console.log(this.$electron);
    },
    methods: {
        numClick(num) {
            this.result =num
            // let isNum = isNaN(Number(num));
            // if (isNum || num === '.') {
            //     if (this.op) {
            //         this.num1 += num;
            //     } else {
            //         this.num2 += num;
            //     }
            // } else {
            //     switch (this.op) {
            //         case '删除':
            //             if (this.op) {
            //                 this.num1 = this.num1.subStr(0, this.num1.length - 1);
            //             } else {
            //                 this.num2 = this.num2.subStr(0, this.num2.length - 1);
            //             }
            //         break;
            //         case 'C':
            //             this.num1=this.num2=this.result=0;
            //         break;
            //         case '/':this.op = '/';
            //         break;
            //          case '+':this.op = '+';
            //         break;
            //          case '-':this.op = '-';
            //         break;
            //         case '*':this.op = '*';
            //         break;
            //         case '*':this.op = '*';
            //         break;
            //     }
            // }
        }
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
