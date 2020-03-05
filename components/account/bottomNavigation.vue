<template>
  <v-bottom-navigation
    v-model="activeBtn"
    :input-value="showNav"
    fixed
    height="95"
    grow
  >
    <v-btn>
      <span class="hidden-md-and-down">Ligar</span>
      <v-icon>mdi-cellphone-iphone</v-icon>
    </v-btn>
    <v-btn>
      <span class="hidden-md-and-down">E-Mail</span>
      <v-icon>mdi-email</v-icon>
    </v-btn>
    <v-btn>
      <span class="hidden-md-and-down">Chat</span>
      <v-icon>mdi-forum</v-icon>
    </v-btn>
    <v-btn>
      <span class="hidden-md-and-down">Whatsapp</span>
      <v-icon>mdi-whatsapp</v-icon>
    </v-btn>
  </v-bottom-navigation>
</template>
<script>
export default {
  name: 'BottomNavigation'
}
</script>
