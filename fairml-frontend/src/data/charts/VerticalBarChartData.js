import store from 'vuex-store'

let palette = store.getters.palette

export default {
  labels: ['January'],
  datasets: [
    {
      label: 'USA',
      backgroundColor: palette.primary,
      borderColor: palette.transparent,
      data: [-50],
    },
    {
      label: 'USSR',
      backgroundColor: palette.info,
      borderColor: palette.transparent,
      data: [50, 10, 22, 39, 15, 20, 85, 32, 60, 50, 20, 30],
    },
  ],
}
