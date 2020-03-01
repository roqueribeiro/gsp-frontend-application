<template>
  <v-content>
    <background />
    <v-container>
      <v-row align="center" justify="center">
        <logo />
      </v-row>
      <v-row align="center" justify="center" max-width="500">
        <v-col cols="12" xs="12" sm="8" md="6" lg="6">
          <v-card tile loading elevation="1" :disabled="showLoading">
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
              <formAuthentication
                @showLoading="showLoadingMethod"
                @errorMessage="errorMessageMethod"
              />
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-content>
</template>
<script>
import Logo from '~/components/layouts/logo.vue'
import Background from '~/components/layouts/background.vue'
import FormAuthentication from '~/components/security/formAuthentication.vue'

export default {
  components: {
    Logo,
    Background,
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
  }
}
</script>
