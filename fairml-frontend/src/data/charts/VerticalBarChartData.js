import store from 'vuex-store'

let palette = store.getters.palette

export default {
  datasets: [
    {
      label: 'With Fairness',
      backgroundColor: palette.primary,
      borderColor: palette.transparent,
      data: [-50],
    },
    {
      label: 'Without Fairness',
      backgroundColor: palette.info,
      borderColor: palette.transparent,
      data: [50],
    },
  ],
}
