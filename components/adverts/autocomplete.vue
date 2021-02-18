<template>
  <v-autocomplete
    v-model="select"
    :loading="loading"
    :items="items"
    :search-input.sync="search"
    cache-items
    flat
    hide-no-data
    hide-details
    prepend-inner-icon="mdi-magnify"
    label="Pesquisar..."
    solo-inverted
    clearable
  >
  </v-autocomplete>
</template>
<script>
export default {
  data() {
    return {
      loading: false,
      items: [],
      search: null,
      select: null,
      states: [
        'Pedreiro',
        'Pinto',
        'Eletrecista',
        'Fretado',
        'Diarista',
        'Fisioterapeuta',
        'Desenvolvedor de Software',
        'Fretado',
        'Montador de Móveis',
        'Motorista',
        'Fotografo',
      ],
    }
  },
  watch: {
    search(val) {
      val && val !== this.select && this.querySelections(val)
    },
  },
  methods: {
    querySelections(v) {
      this.loading = true
      setTimeout(() => {
        this.items = this.states.filter((e) => {
          return (e || '').toLowerCase().includes((v || '').toLowerCase())
        })
        this.loading = false
      }, 500)
    },
  },
}
</script>
