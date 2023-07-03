<template>
    <div>
        <p> 找不到页面!正在跳转到首页{{ pnts }}</p>
    </div>
</template>

<script>
export default {
    data() {
        return {
            pnts: ''
        }
    },
    created() {
        let t = setInterval(()=>{
            this.pnts = this.pnts + "."
            if(this.pnts == "......")
                clearInterval(t)
        },300)
        setTimeout(() => {
            this.$router.push("/")
        }, 2000)
    }
}
</script>

<style></style>