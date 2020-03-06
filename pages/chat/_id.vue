<template>
  <v-container class="ma-0 pa-0" fluid>
    <v-row align="center" justify="center" no-gutters>
      <v-col cols="12" xs="12" sm="12" md="12">
        <iframe src="https://chatao.com.br"></iframe>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  head() {
    return {
      title: 'Chat',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: ''
        }
      ]
    }
  }
}
</script>
<style scoped>
iframe {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border: none;
}

iframe:focus {
  outline: none;
}

iframe[seamless] {
  display: block;
}
</style>
