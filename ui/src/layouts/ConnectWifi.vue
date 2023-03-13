<template>
  <q-layout view="hHh LpR fFf">
    <q-header bordered reveal>
      <q-toolbar class="justify-between">
        <q-btn
          class="q-mr-sm"
          size="18px"
          flat
          dense
          round
          icon="arrow_back"
          aria-label="arrow_back"
          @click="backHome"
        />
      </q-toolbar>
    </q-header>
    <wifi-connect class="q-pa-lg" />
  </q-layout>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import WifiConnect from 'components/WifiConnect.vue'

export default defineComponent({
  name: 'ConnectWifi',
  components: {
    WifiConnect
  },
  methods: {
    backHome () {
      const { hostname, protocol } = window.location;
      window.location.replace(`${protocol}//${hostname}`)
    }
  }
})
</script>
