<template>
    <div class="tags">
        <el-tag size="medium" 
        :closable="index>0" 
            :effect="item.title == $route.meta.titles[$route.meta.titles.length - 1] ? 'dark' : 'plain'"
            v-for="item,index in tags" :key="item.title"
            @click="$router.push(item.path)" 
            @close="close(index)"
            @contextmenu.native.prevent="rightClick($event,index)"
            >
            <i v-show="item.title == $route.meta.titles[$route.meta.titles.length - 1]"> </i>
            {{ item.title }}
        </el-tag>
        <TagMenu
        v-show="isShowTagsMenu"
        :clientX="clientX"
        :clientY="clientY"
        :Clickindex="cickindex"
        :tagLength="tags.length"
        @fn="clickMenu"
        ></TagMenu>
    </div>
</template>

<script>
import TagMenu from "@/components/Tagmenu.vue"
export default {
    components:{
        TagMenu
    },
    data() {
        return {
            tags: [
                { title: "首页", path: "/home"}],
                clientX:0,
                clientY:0,
                isShowTagsMenu:false,
                cickindex:0,
                
        }
    },
    watch: {
        $route: {
            immediate: true,
            handler(val, oldval) {
                // console.log(val);
                // 查找数组
                const bool = this.tags.find(item => {
                    return val.path == item.path
                })

                if (!bool) {
                    this.tags.push({
                        title: val.meta.titles[val.meta.titles.length - 1],
                        path: val.path
                    })
                }
            }
        }
    },
    mounted(){
        document.addEventListener("click",this.closeMenu)
    },
    beforeDestroy(){
        document.removeEventListener("click",this.closeMenu)
        
    },
    methods: {
        
        close(i){
            // 漏洞是如果用户一开始删掉了首页那最后留下那个就不是首页了，可以在最后一个删除时跳转首页，再把原来的删掉，同时再push首页的title和path进tags，防止tags为空时再点击报错(待解决)

            // 先跳转再删除
            // if(this.tags[i].title == this.$route.meta.titles[this.$route.meta.titles.length - 1]){
            if(this.tags[i].path == this.$route.path &&this.tags.length -1 != i){
                this.$router.push(this.tags[this.tags.length-1].path)
            }else if(i==this.tags.length-1){
                this.$router.push(this.tags[this.tags.length-2].path)

            }
            // 删除
            this.tags.splice(i,1)
            this.closeMenu();
        },
        rightClick(e,i){
            this.isShowTagsMenu=!this.isShowTagsMenu
            this.clientX = e.clientX;
            this.clientY = e.clientY;
            this.cickindex = i;
        },
        closeMenu(){
            this.isShowTagsMenu=false;
        },
        clickMenu(i){
            if(i == 5){
                this.tags = [ { title: "首页", path: "/home"}];
                this.$router.push("/home");
                this.closeMenu()
            }else if(i == 2){
                return
            }
        }
    },
}
</script>

<style lang="less" scoped>
.tags {
    padding-left: 20px;
    padding-top: 5px;

    .el-tag {
        margin-left: 10px;
        cursor: pointer;

        i {
            display: inline-block;
            width: 8px;
            height: 8px;
            background-color: #fff;
            border-radius: 50%;
            margin-right: 5px;
        }
    }
}
</style>