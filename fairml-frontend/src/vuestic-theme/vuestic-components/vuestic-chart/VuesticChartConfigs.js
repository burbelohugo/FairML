import store from 'vuex-store'

let palette = store.getters.palette

export const defaultConfig = {
  legend: {
    position: 'bottom',
    labels: {
      fontColor: palette.fontColor,
      fontFamily: 'sans-serif',
      fontSize: 14,
      padding: 20,
      usePointStyle: true,
    },
  },
  tooltips: {
    bodyFontSize: 14,
    bodyFontFamily: 'sans-serif',
  },
  responsive: true,
  maintainAspectRatio: false,
  scales: {
        yAxes: [{
            display: true,
            ticks: {
                suggestedMin: 0,    // minimum will be 0, unless there is a lower value.
                // OR //
                beginAtZero: true   // minimum value will be 0.
            }
        }]
    }
}

export const chartTypesMap = {
  pie: 'pie-chart',
  donut: 'donut-chart',
  bubble: 'bubble-chart',
  line: 'line-chart',
  'horizontal-bar': 'horizontal-bar-chart',
  'vertical-bar': 'vertical-bar-chart',
}

export const chartTypes = Object.keys(chartTypesMap)
