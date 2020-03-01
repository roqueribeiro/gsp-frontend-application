<template>
  <v-layout>
    <v-flex class="text-center">
      <p>Pagina Restrita</p>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  middleware: 'authenticated'
}
</script>
