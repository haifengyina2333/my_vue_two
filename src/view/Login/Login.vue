<template>
    <div class="login-page">
        <div class="login-box">
            <h1>店铺管理系统</h1>
            <el-form :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" label-width="100px"
                class="demo-ruleForm">
                <el-form-item label="用户名" prop="username">
                    <el-input type="text" v-model="ruleForm2.username" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item :label="'密\xa0\xa0\xa0码'" prop="password">
                    <el-input type="password" v-model="ruleForm2.password" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="验证码" prop="cantchacode">
                    <div class="cantcha-box">
                        <el-input v-model.number="ruleForm2.cantchacode"></el-input>
                        <img :src="captchaSrc" height="40" alt="" @click="getCaptchaCode">
                    </div>
                </el-form-item>
                <el-form-item class="login-button-box">
                    <el-button class="login-button" type="primary" @click="submitForm('ruleForm2')">登录</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script>
import { vaildataUsername } from "../../uitls/validata"
import { getCaptchaCodeAPI,LoginAPI } from "../../request/api"

export default {
    name: 'Login',
    data() {
        return {
            ruleForm2: {
                username: "qdtest1",
                password: "123456",
                cantchacode: "888888"
            },
            rules2: {
                username: [
                    {
                        required: true,
                        message: "用户名不能为空",
                        trigger: "blur"
                    }, {
                        validator: vaildataUsername,
                        trigger: "blur"
                    }
                ],
                password: [
                    {
                        required: true,
                        message: "密码不能为空",
                        trigger: "blur"
                    }
                ],
                cantchacode: [
                    {
                        required: true,
                        message: "验证码不能为空",
                        trigger: "blur"
                    }
                ],
            },
            captchaSrc: "data:image/gif;base64,"
        }
    },
    methods: {
         submitForm(formName) {
            this.$refs[formName].validate(async(valid) => {
                if (valid) {
                    // 校验通过
                    // this.$message("登录成功")
                    alert('submit!');
                    let res = await LoginAPI({
                        username:this.ruleForm2.username,
                        password:this.ruleForm2.password,
                        code:this.ruleForm2.code,
                        uuid:localStorage.getItem("db-captcha-uuid")
                    })
                    console.log(res);
                    if(res.code == 200){
                    this.$message.success("登陆成功")
                    }else{
                    this.$message.error("登陆失败")

                    }
                } else {
                    // 不通过的情况
                    this.$message.error("请输入正确的信息")

                    return false;
                }
            });
        },
        async getCaptchaCode() {
            let res = await getCaptchaCodeAPI();
            if (res.code == 200) {
                console.log(res);
                this.captchaSrc = this.captchaSrc + res.img
                // 保存uuid
                localStorage.setItem("db-captcha-uuid",res.uuid)
            }else{
                this.$message.error(`${res.msg}`)
            }
        },
    },
    created() {
        // this.getCaptchaCode();
    }
}
</script>

<style lang="less" scoped >
.login-page {
    height: 100%;
    width: 100%;
    background: url(../../assets/img/login.jpg) center top no-repeat;
    //  缩放
    background-size: cover;

    .login-box {
        width: 400px;
        // background-color: ;
        border-radius: 5%;
        position: absolute;
        left: 50%;
        top: 50%;
        background-color: rgba(255, 255, 255, 0.1);
        transform: translate(-50%, -50%);
        padding: 40px 80px 10px 40px;
        backdrop-filter: blur(50px);

        h1 {
            text-align: center;
            margin-bottom: 20px;
            padding-left: 50px;
            font-size: 24px;
            font-weight: 700;
        }

        .cantcha-box {
            display: flex;

            img {
                margin-left: 20px;
                width: 106px;
            }
        }

        .login-button {
            width: 100%;
        }

        ::v-deep .login-button-box .el-form-item__content {
            margin-left: 35px !important;
        }
    }
}
</style>