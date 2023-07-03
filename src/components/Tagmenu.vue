<template>
    <div class="tags-menu" :style="{
        left: clientX + 'px', top:
            clientY + 'px'
    }">
        <ul>
            <li v-for="item,index in tmenu" :key="index"
            v-show="isShowLi(index)"
            @click="liclick(index)"
            >
            <i :class="item.icon">{{ item.text }}</i>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    props:['clientX','clientY','Clickindex','tagLength'],
    data() {
        return {
            tmenu:[
                {
                    icon:"el-icon-refresh-right",
                    text:"刷新页面"
                },
                {
                    icon:"el-icon-close",
                    text:"关闭当前"
                },
                {
                    icon:"el-icon-circle-close",
                    text:"关闭其他"
                },
                {
                    icon:"el-icon-back",
                    text:"关闭左侧"
                },
                {
                    icon:"el-icon-right",
                    text:"关闭右侧"
                },
                {
                    icon:"el-icon-circle-close",
                    text:"全部关闭"
                }
            ]
        }
    },
    methods:{
        isShowLi(i){

            if(this.tagLength === 1){
                return i == 0
            }


            if(this.Clickindex == 0 ){
                // if(i==1||i==3){
                //     return false
                // }
                //     return true
                return ![1,3].includes(i)
            }


            if(this.Clickindex == 1 && this.Clickindex == this.tagLength - 1 ){
                return ![3,4].includes(i)

            }else if(this.Clickindex == 1 &&this.Clickindex != this.tagLength - 1 ){
                return i!=3
            }

            if(this.Clickindex == this.tagLength -1 ){
                return i != 4
            }

            return true
        },
        liclick(i){
            this.$emit("fn",i)
        }
    }
}
</script>

<style lang="less" scoped>
.tags-menu{
    background: #fff;
    box-shadow: 2px 2px 4px #ddd;
    position: absolute;
    border-radius: 8px;
    ul{
        padding: 10px 0px;
    }
    li{
        padding: 5px 15px 5px;
       cursor: pointer;
        &:hover{
            background-color: #ccc;
        }
    }
}
</style>