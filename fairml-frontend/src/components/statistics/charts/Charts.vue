<template>
  <div class="charts-page">
    <div class="ui-typography">
      <div class="va-row">
        <div class="md12 flex">
          <vuestic-widget style="text-align:center">
            <div class="table-responsive">
              <table class="table table-striped first-td-padding">
                <thead>
                <tr>
                  <td>{{'tables.headings.name' | translate}}</td>
                  <td>{{'tables.headings.email' | translate}}</td>
                  <td>{{'tables.headings.city' | translate}}</td>
                  <td align="right">{{'tables.headings.score' | translate}}</td>
                  <td></td>
                </tr>
                </thead>
                <tbody>
                <tr>
                  <td>Matthew McCormick</td>
                  <td>matthew30@mail.ol</td>
                  <td>Vancouver</td>
                  <td align="right">93</td>
                  <td></td>
                </tr>
                </tbody>
              </table>
            </div>
            <h3>Regular Classifier Recommendation: {{ regRec }}</h3>
            <h3>Fair Classifier Recommendation: {{ fairRec }}</h3>
          </vuestic-widget>
        </div>
      </div>
    </div>
    <div class="va-row">

      <div class="flex md6 xs12" style="display: flex;justify-content: center;">
        <vuestic-widget
          class="chart-widget"
          :headerText="'Bias'"
          style="margin-left: 40vw; margin-right: 10vw;width: 100%;"
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
            label: 'Without Fairness',
            backgroundColor: palette.info,
            borderColor: palette.transparent,
            data: [obj.nfb],
          },
          {
            label: 'With Fairness',
            backgroundColor: palette.primary,
            borderColor: palette.transparent,
            data: [obj.fb],
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
              console.log(obj)

      return {
        datasets: [
          {
            label: 'Without Fairness',
            backgroundColor: palette.info,
            borderColor: palette.transparent,
            data: [obj.nfa],
          },
          {
            label: 'With Fairness',
            backgroundColor: palette.primary,
            borderColor: palette.transparent,
            data: [obj.fa],
          },
        ],
      }
    },
    regRec(){
      var str = location.href.substring(-48);
      console.log(str)
      var obj = str.split("&").reduce(function(prev, curr, i, arr) {
          var p = curr.split("=");
          prev[decodeURIComponent(p[0])] = decodeURIComponent(p[1]);
          return prev;
      }, {});
      return obj.nfr;
    },
    fairRec(){
      var str = location.href.substring(-48);
      console.log(str)
      var obj = str.split("&").reduce(function(prev, curr, i, arr) {
          var p = curr.split("=");
          prev[decodeURIComponent(p[0])] = decodeURIComponent(p[1]);
          return prev;
      }, {});
      return obj.fr;
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
