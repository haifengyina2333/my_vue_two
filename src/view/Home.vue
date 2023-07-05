<template>
  <div class="home">
    <div class="content">
      <div class="box1">
        <h2>数据可视化</h2>
      </div>
      <div class="box2">
        <dv-border-box-1>
          <h3>环状表格</h3>
          <!-- dataV 的图表 -->
          <dv-active-ring-chart :config="config" style="width:100%;height:100%" />

        </dv-border-box-1>
      </div>
      <div class="box3">
        <!-- ElemetFE的v-charts -->
        <ve-pie :data="chartData" height="100%" :extend="pieExtend"></ve-pie>
      </div>
      <div class="box4">

      </div>
      <div class="box5">

      </div>
      <div class="box6">

      </div>
      <div class="box7">

      </div>
      <div class="box8">
        <dv-border-box-11 title="表格">


        </dv-border-box-11>
      </div>
      <div class="box9">

      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      config: {
        data: [
          {
            name: '周口',
            value: 55
          },
          {
            name: '南阳',
            value: 120
          },
          {
            name: '西峡',
            value: 78
          },
          {
            name: '驻马店',
            value: 66
          },
          {
            name: '新乡',
            value: 80
          }
        ],
        lineWidth: 10,
        digitalFlopStyle: {
          fontSize: 18,
          fill: '#fff'
        }
      },
      chartData: {
        columns: ['date', 'PV'],
        rows: [
          { 'date': '01-01', 'PV': 1231 },
          { 'date': '01-02', 'PV': 1223 },
          { 'date': '01-03', 'PV': 2123 },
          { 'date': '01-04', 'PV': 4123 },
          { 'date': '01-05', 'PV': 3123 },
          { 'date': '01-06', 'PV': 7123 }
        ]
      },
      pieExtend: {
        series: {
          // 设置饼状图
          type: "pie",
          radius: ["0%", "55%"], // 设置半径 [内圈半径，外圈半径]
          center: ["50%", "60%"], // 设置圆心坐标
          // legend.textStyle. fontStyle
          label: {
            color: '#fff'
          }
        },
        legend: { // legend专门为各个标题的配置
          textStyle: {
            color: '#fff'
          }
        }
      }
    }
  },
}
</script>
<style lang = "less" scoped>
.home {
  height: 100%;

  .content {
    width: 100%;
    height: 100%;

    // 网格布局
    display: grid;
    // 设置多少列，每个列所占的份数
    grid-template-columns: repeat(3, 1fr);
    // 设置多少行
    // grid-template-rows: repeat(3, 1fr);
    grid-template-rows: 50px 1fr 1fr 1fr;
    // 网格间距
    gap: 10px;

    div {
      // background-color: #ccc;
    }

    .box1 {
      grid-column: span 3;
      // text-align: center;
    }

    .box8 {
      // 跨越两列
      grid-column: span 2;
      // 跨两行
      // grid-row: span 2;
    }

  }

  h2 {
    text-align: center;
    margin: 0;
    line-height: 50px;
    color: #fff;
    font-size: 24px;
    font-weight: bold;
  }

  h3 {
    color: #fff;
    font-size: 20px;
    font-weight: bold;
    position: absolute;
    left: 50%;
    top: 0;
    transform: translateX(-50%);

  }
}
</style>