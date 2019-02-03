<template>
  <div class="dashboard">

    <dashboard-info-widgets></dashboard-info-widgets>
    <vuestic-widget :headerText="'Recent Profiles'">
        <vuestic-file-upload
          v-model="list"
        />

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
          <tr>
            <td>Nancy Bo</td>
            <td>nancy@boonweb.com</td>
            <td>Washington</td>
            <td align="right">280</td>
            <td></td>
          </tr>
          <tr>
            <td>Frederiko Lopez</td>
            <td>fr.lopez@webmail.sp</td>
            <td>Barcelona</td>
            <td align="right">16</td>
            <td></td>
          </tr>
          <tr>
            <td>Stanley Hummer</td>
            <td>mr_winner_2999@gmail.cb</td>
            <td>Manchester</td>
            <td align="right">57</td>
            <td></td>
          </tr>
          <tr>
            <td>Lendley Wintz</td>
            <td>9938198146@mailster.io</td>
            <td>Wien</td>
            <td align="right">113</td>
            <td></td>
          </tr>
          <tr>
            <td>Barbara Noz</td>
            <td>barbaranoz@mailster.io</td>
            <td>Brussels</td>
            <td align="right">68</td>
            <td></td>
          </tr>
          <tr>
            <td>Matthew McCormick</td>
            <td>matthew30@mail.ol</td>
            <td>Vancouver</td>
            <td align="right">93</td>
            <td></td>
          </tr>
          <tr>
            <td>Nancy Bo</td>
            <td>nancy@boonweb.com</td>
            <td>Washington</td>
            <td align="right">280</td>
            <td></td>
          </tr>
          </tbody>
        </table>
      </div>
    </vuestic-widget>


  </div>
</template>

<script>
import DashboardInfoWidgets from './DashboardInfoWidgets'
import UsersMembersTab from './users-and-members-tab/UsersMembersTab.vue'
import SetupProfileTab from './setup-profile-tab/SetupProfileTab.vue'
import FeaturesTab from './features-tab/FeaturesTab.vue'
import DataVisualisationTab
  from './data-visualisation-tab/DataVisualisation.vue'
import DashboardBottomWidgets from './DashboardBottomWidgets.vue'

export default {
  name: 'dashboard',
  components: {
    DataVisualisationTab,
    DashboardInfoWidgets,
    UsersMembersTab,
    SetupProfileTab,
    FeaturesTab,
    DashboardBottomWidgets,
  },
  data () {
    return {
      list: [],
    }
  },
  methods: {
    launchEpicmaxToast () {
      this.showToast(`Let's work together!`, {
        icon: 'fa-star-o',
        position: 'top-right',
        duration: Infinity,
        action: {
          text: 'Hire us',
          href: 'http://epicmax.co/#/contact',
          class: 'vuestic-toasted-link',
        },
      })
    },
  },
}

</script>
<style lang="scss" scoped>
</style>
