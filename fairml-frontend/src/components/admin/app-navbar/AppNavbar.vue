<template>
  <vuestic-navbar>
    <span slot="logo" style="display: table-cell; vertical-align: middle; width: 6vw;">
      <div style="margin-left: -3vw;">
      <img src="./bag2.png" height="30px" width="40px" style="margin-top: 3vh; align: left;"/>
      <h3 style="float: right; margin-top: 3.2vh; margin-left: 1vw;">  jobFAIR</h3>
    </div>
    </span>
  </vuestic-navbar>

</template>

<script>
import VuesticIconVuestic
  from '../../../vuestic-theme/vuestic-components/vuestic-icon/VuesticIconVuestic'
import VuesticNavbar
  from '../../../vuestic-theme/vuestic-components/vuestic-navbar/VuesticNavbar'
import HeaderSelector from './components/HeaderSelector'

import LanguageDropdown from './components/dropdowns/LanguageDropdown'
import ProfileDropdown from './components/dropdowns/ProfileDropdown'
import NotificationDropdown from './components/dropdowns/NotificationDropdown'
import MessageDropdown from './components/dropdowns/MessageDropdown'

export default {
  name: 'app-navbar',

  components: {
    VuesticIconVuestic,
    VuesticNavbar,
    HeaderSelector,
    MessageDropdown,
    NotificationDropdown,
    LanguageDropdown,
    ProfileDropdown,
  },
  props: {
    isOpen: {
      type: Boolean,
      required: true,
    },
  },
  computed: {
    valueProxy: {
      get () {
        return this.isOpen
      },
      set (opened) {
        this.$emit('toggle-menu', opened)
      },
    },
  },
}
</script>
