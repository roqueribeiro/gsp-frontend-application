<template>
  <v-img
    src="/logo/logo-name-transparent800.png"
    lazy-src="/logo/logo-name-transparent800.png"
    contain
    min-height="60"
    :class="cssClass"
    :max-width="maxWidth"
    :max-height="maxHeight"
  >
    <template #placeholder>
      <v-row class="fill-height ma-0" align="center" justify="center">
        <v-progress-circular
          indeterminate
          color="grey lighten-5"
        ></v-progress-circular>
      </v-row>
    </template>
  </v-img>
</template>
<script>
export default {
  name: 'Logo',
  props: {
    cssClass: {
      type: String,
      default: 'mt-0 pt-0 mb-5',
    },
    maxWidth: {
      type: Number,
      default: 280,
    },
    maxHeight: {
      type: Number,
      default: 100,
    },
  },
}
</script>
