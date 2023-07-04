<template>
  <div>
    <el-button @click="exportExl">导出</el-button>
    <el-table ref="multipleTable" :data="tableData" tooltip-effect="dark" style="width: 100%"
      @selection-change="handleSelectionChange">
      <el-table-column type="selection" width="55">
      </el-table-column>


      <el-table-column label="客户姓名" width="120" align="center">
        <template slot-scope="{row}">{{ row.name }}</template>
      </el-table-column>

      <el-table-column label="电话" width="120" align="center">
        <template slot-scope="{row}">{{ row.phone }}</template>
      </el-table-column>

      <el-table-column label="性别" width="48" align="center">
        <template slot-scope="{row}">{{ row.sex == "0" ? "男" : (row.sex == "1" ? '女' : "") }}</template>
      </el-table-column>
      <!-- 
      <el-table-column label="录入人">
        <template slot-scope="{row}">{{ row.inputUserName  }}</template>
      </el-table-column> -->


      <el-table-column prop="inputUserName" label="录入人" width="120" align="center">
      </el-table-column>

      <!-- <el-table-column label="录入时间" align="center">
        <template slot-scope="{row}">{{ row.entryTime && new Date(row.entryTime).toLocaleDateString().replaceAll("/","-") }}</template>
      </el-table-column> -->

      <el-table-column label="录入时间" align="center">
        <template slot-scope="{row}">{{ row.entryTime | FormatDate }}</template>
      </el-table-column>


      <el-table-column label="操作" align="center">
        <template slot-scope="{row}">
          <i class="el-icon-edit"></i>修改
        </template>
      </el-table-column>



      <!-- <el-table-column prop="address" label="地址" show-overflow-tooltip>
      </el-table-column> -->
    </el-table>
    <div style="display: flex;justify-content: flex-end;padding: 20px 300px 0px;">

      <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="pageNum"
        :page-sizes="[10, 20, 30, 50]" :page-size="100" layout="total, sizes, prev, pager, next, jumper" :total="total">
      </el-pagination>
    </div>
  </div>
</template>

<script>
import { getcustomerAPI, exportCustomerAPI } from "@/request/api"
import { saveAs } from "file-saver"
export default {
  data() {
    return {
      tableData: [],
      multipleSelection: [],
      pageNum: 1,   //当前页数
      pageSize: 10,    //每页条数
      total: null,
    }
  },
  methods: {
    handleSelectionChange() {

    },
    async getTableData() {
      const res = await getcustomerAPI({
        pageNum: this.pageNum,
        pageSize: this.pageSize,
      })
      if (!res) return
      console.log("客户信息请求", res);
      this.total = res.total
      this.tableData = res.rows
    },
    // 每页条数改变的时候
    handleSizeChange(val) {
      this.pageSize = val;
      this.getTableData()

    },
    // 每次翻页时
    handleCurrentChange(val) {
      this.pageNum = val
      this.getTableData()
    },
    async exportExl() {
      const res = await exportCustomerAPI({
        pageNum: 1,
        pageSize: 10
      },{
                // 导出文件的请求需要额外传请求配置
                // 请求头
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                // 响应类型
                responseType: 'blob'
            });
      if (!res) return
      // 处理成表格文件
      // npm i file-saver --save
      // 引入 import {saveAs} from "file-saver"
      saveAs(
        //Blob 对象表示一个不可变、原始数据的类文件对象。
        //Blob 表示的不一定是JavaScript原生格式的数据。
        //File 接口基于Blob，继承了 blob 的功能并将其扩展使其支持用户系统上的文件。
        //返回一个新创建的 Blob 对象，其内容由参数中给定的数组串联组成。
        new Blob([res]),
        //设置导出文件名称
        `客户档案_${new Date().getTime()}.xlsx`
      );
    }
  },
  created() {
    this.getTableData()
  }
}
</script>

<style></style>