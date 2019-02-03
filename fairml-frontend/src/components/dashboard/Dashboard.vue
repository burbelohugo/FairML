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
            <td>GPA</td>
            <td>Gender</td>
            <td>Experience</td>
            <td>University</td>
          </tr>
          </thead>
          <tbody>
          <tr v-for="i in d">
            <td>{{ i[0] }}</td>
            <td>{{ i[1] }}</td>
            <td><span v-if="i[2] == 1">Male</span><span v-else>Female</span></td>
            <td>{{ i[3]}}</td>
            <td>{{i[4]}}</td>
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
import Axios from 'axios';
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
      items: [
      { message: 'Foo' },
      { message: 'Bar' }
      ]
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
  asyncComputed: {
    async d(){
      let r = await Axios.get('http://18.219.78.218:8000/fetch_csv/')
      console.log(r.data)
      return r.data;
    }
  }
}

</script>
<style lang="scss" scoped>
</style>
