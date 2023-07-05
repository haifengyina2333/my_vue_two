<template>
    <div class="content" :class=" ($route.path == '/home')?'bg':''" >
        <!-- mode="out-in"  in-out-->
        <transition name="fade" mode="out-in">
            <router-view></router-view>
        </transition>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
.content {
    padding: 20px;
    height: calc(100% - 124px);
}

// 进场开始,离场结束
.fade-enter,
.fade-leave-to {
    opacity: 0;
    transform: translateX(10px);
}

// 过渡的属性
.fade-enter-active,
.fade-leave-active {
    transition: all 0.3s;
}

// 进场结束,离场开始
.fade-enter-to,
.fade-leave {
    opacity: 1;
    transform: translateX(0px);

}
.bg{
    background: url(../../assets/img/login.jpg) center top no-repeat;
    background-size:100% 100%;
}
</style>