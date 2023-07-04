<template>
  <div>
    <el-upload class="upload-demo" ref="upload" 
      :on-preview="handlePreview" :on-remove="handleRemove"
      :on-change="handlechange" :file-list="fileList" :auto-upload="false">

      <el-button slot="trigger" size="small" type="primary">选取文件</el-button>

      <el-button style="margin-left: 10px;" size="small" 
      type="success" @click="submitUpload">上传到服务器</el-button>

      <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
    </el-upload>
  </div>
</template>

<script>
import { BpmnInfoAPI } from '@/request/api';
export default {
  data() {
    return {
      // 手动添加
       fileList: []
    }
  },
  methods: {
    // 点击上传按钮执行
    async submitUpload() {
      // this.$refs.upload.submit();
      const file = this.fileList[0]
      const res = await BpmnInfoAPI({
        file:file.raw,
        bpnmLabel:file.name,
        bpnmType:"casual-leave",
        info:"测试"
    },{
        headers:{
          "Content-Type":"multipart/form-data"
        }
    });
    if(!res) return 
    this.$message.success(res.msg)
    },
    // 删除文件触发
      handleRemove(file, fileList) {
        console.log(file, fileList);
      },
    // 点击文件触发
      handlePreview(file) {
        console.log(file);
      },
      handlechange(file,fileList){
        this.fileList = fileList;
      }
    }
}
</script>

<style lang="less" scoped>


</style>