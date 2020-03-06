<template>
  <v-expand-transition>
    <v-bottom-navigation v-if="buttons" fixed height="95" grow app>
      <v-btn
        v-for="(item, i) in buttons"
        :key="i"
        :to="item.to != '' && localePath(item.to)"
        :href="item.href"
      >
        <span class="hidden-md-and-down">{{ item.name }}</span>
        <v-icon>{{ item.icon }}</v-icon>
      </v-btn>
    </v-bottom-navigation>
  </v-expand-transition>
</template>
<script>
export default {
  name: 'BottomNavigation',
  data: () => ({
    buttons: false
  }),
  mounted() {
    this.$bus.$on(
      'SHOW_BOTTOM_NAVIGATION',
      (data) => (this.buttons = data.buttons)
    )
  }
}
</script>
