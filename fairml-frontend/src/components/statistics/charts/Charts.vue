<template>
  <div class="charts-page">
    <div class="va-row">
      <div class="flex md6 xs12"
        <vuestic-widget
          class="chart-widget"
          :headerText="'Bias'"
          style="margin-right: 10vw;"
        >
          <vuestic-chart :data="bias" type="vertical-bar"/>
        </vuestic-widget>
        <vuestic-widget
          class="chart-widget"
          :headerText="'Accuracy'"
        >
          <vuestic-chart :data="accuracy" type="vertical-bar"/>
        </vuestic-widget>
      </div>
    </div>

  </div>
</template>

<script>
import { getLineChartData } from '../../../data/charts/LineChartData'
import BubbleChartData from '../../../data/charts/BubbleChartData'
import PieChartData from '../../../data/charts/PieChartData'
import DonutChartData from '../../../data/charts/DonutChartData'
import VerticalBarChartData from '../../../data/charts/VerticalBarChartData'
import HorizontalBarChartData from '../../../data/charts/HorizontalBarChartData'
import SidebarLink from '../../admin/app-sidebar/components/SidebarLink'
import store from 'vuex-store'

let palette = store.getters.palette
export default {
  name: 'charts',
  components: {
    SidebarLink,
  },
  data: () => ({
    bubbleChartData: BubbleChartData,
    lineChartData: getLineChartData(),
    pieChartData: PieChartData,
    donutChartData: DonutChartData,
    verticalBarChartData: VerticalBarChartData,
    horizontalBarChartData: HorizontalBarChartData,
  }),
  methods: {
    refreshData () {
      this.lineChartData = getLineChartData()
    },
  },
  computed: {
    bias(){
      var str = location.href.substring(-48);
      console.log(str)
      var obj = str.split("&").reduce(function(prev, curr, i, arr) {
          var p = curr.split("=");
          prev[decodeURIComponent(p[0])] = decodeURIComponent(p[1]);
          return prev;
      }, {});
      return {
        datasets: [
          {
            label: 'With Fairness',
            backgroundColor: palette.primary,
            borderColor: palette.transparent,
            data: [obj.fb],
          },
          {
            label: 'Without Fairness',
            backgroundColor: palette.info,
            borderColor: palette.transparent,
            data: [obj.nfb],
          },
        ],
      }
    },
    accuracy(){
      var str = location.href.substring(-48);
      console.log(str)
      var obj = str.split("&").reduce(function(prev, curr, i, arr) {
          var p = curr.split("=");
          prev[decodeURIComponent(p[0])] = decodeURIComponent(p[1]);
          return prev;
      }, {});
      return {
        datasets: [
          {
            label: 'With Fairness',
            backgroundColor: palette.primary,
            borderColor: palette.transparent,
            data: [obj.fa],
          },
          {
            label: 'Without Fairness',
            backgroundColor: palette.info,
            borderColor: palette.transparent,
            data: [obj.nfa],
          },
        ],
      }
    }
  }
}
</script>

<style lang="scss">
.widget.chart-widget {
  .widget-body {
    height: 550px;
  }
}
</style>
