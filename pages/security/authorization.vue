<template>
  <v-container fluid>
    <v-row dense>
      <v-col cols="12" xs="12" sm="12" md="12" lg="12" class="mt-10">
        <Logo class="mx-auto" />
      </v-col>
      <v-col cols="12" xs="12" sm="12" md="12" lg="12">
        <v-card
          class="mx-auto"
          tile
          loading
          elevation="1"
          :disabled="showLoading"
          max-width="600"
        >
          <template v-slot:progress>
            <v-progress-linear
              v-if="!showLoading"
              value="100%"
              absolute
            ></v-progress-linear>
          </template>
          <v-card-title
            primary-title
            class="justify-center headline pt-10 pl-10 pr-10 font-weight-light"
          >
            {{ $t('security.authorization.description') }}
          </v-card-title>
          <v-card-text class="pt-5 pl-8 pr-8 pb-8">
            <v-alert
              v-show="errorMessage !== ''"
              text
              dense
              type="error"
              icon="mdi-alert"
              dismissible
            >
              @{{ errorMessage }}
            </v-alert>
            <FormAuthentication
              @showLoading="showLoadingMethod"
              @errorMessage="errorMessageMethod"
            />
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import Logo from '~/components/layouts/logo.vue'
import FormAuthentication from '~/components/security/formAuthentication.vue'

export default {
  name: 'Authorization',
  components: {
    Logo,
    FormAuthentication
  },
  props: {},
  data: () => ({
    showLoading: false,
    errorMessage: ''
  }),
  methods: {
    showLoadingMethod(e) {
      this.showLoading = e
    },
    errorMessageMethod(e) {
      this.errorMessage = e
    }
  },
  head() {
    return {
      title: 'Authorization',
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
