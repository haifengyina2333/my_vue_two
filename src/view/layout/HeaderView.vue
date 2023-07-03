<template>
    <div class="header">
        <div class="header-top">
            <div class="fl">
                <el-button icon="el-icon-s-fold" v-show="!isShow" @click="ChanIsShow"></el-button>
                <el-button icon="el-icon-s-unfold" v-show="isShow" @click="ChanIsShow"></el-button>
            </div>
            <div class="fl">
                <Crumb></Crumb>
            </div>


            <div class="fr">
                <el-dropdown @command="hdcommand">
                    <div class="avatar-box">
                        <img height="38px"
                            :src="IMG_BASEURL + (userinfo.user.avatar || '/profile/avatar/2022/10/10/blob_20221010200353A001.jpeg')"
                            alt="">
                        <!-- {{ userinfo.user.nickName }} -->
                        <i class="el-icon-caret-bottom"></i>
                    </div>
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item command="user">个人中心</el-dropdown-item>
                        <el-dropdown-item command="logout">退出登录</el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>


            </div>
        </div>
        <!-- <el-button type="primary" icon="el-icon-search">搜索</el-button> -->
    </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex';
import Crumb from "@/components/Crunm.vue"
import { IMG_BASEURL } from "@/uitls/baseURL"
export default {
    components: {
        Crumb
    },
    data() {
        return {
            isShow: false,
            IMG_BASEURL
        }
    },
    methods: {
        ...mapMutations({
            changeIsCollapse: "NavbarCollapse/changeIsCollapse"
        }),
        ChanIsShow() {
            this.isShow = !this.isShow;
            this.changeIsCollapse();
        },
        hdcommand(com){
            console.log(com);
            if(com == "logout"){
                this.$message.success("退出成功!")
                localStorage.removeItem("db-auth-token")
                localStorage.removeItem("db-userInfo")
                this.$router.push("/login")
            }
        }
    },
    computed: {
        ...mapState({
            userinfo: state => state.UserInfo.userinfo
        })
    }
}
</script>

<style lang="less" scoped>
.header {
    // padding: 20px;
    height: 84px;
    box-shadow: 0px 5px 5px #ddd;

    .header-top {
        height: 50px;
        box-shadow: 0px 4px 4px #ddd;

        button {
            width: 50px;
            height: 50px;
            margin: 0px;
            font-size: 20px;
            padding: 10px 12px;
            border: 0px;
        }

        .avatar-box {
            padding: 5px 20px 0 0;

            img {
                border-radius: 5px;
            }

            img,
            i {
                cursor: pointer;
            }
        }

        .fl {
            float: left;
        }

        .fr {
            float: right;
        }
    }
}
</style>