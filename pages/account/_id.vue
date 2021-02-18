<template>
  <v-container class="pa-0 ma-0" fluid>
    <v-tabs
      v-if="editProfileOptions"
      v-model="tab"
      center-active
      fixed-tabs
      background-color="primary"
      dark
    >
      <v-tab key="1"> Prestador </v-tab>
      <v-tab key="2"> Cliente </v-tab>
    </v-tabs>
    <v-tabs-items v-model="tab" class="transparent">
      <v-tab-item key="1">
        <Profiles />
      </v-tab-item>
      <v-tab-item v-if="editProfileOptions" key="2">
        <Profiles />
      </v-tab-item>
    </v-tabs-items>
    <v-card v-if="editProfileOptions" class="mx-auto mb-8" width="1200">
      <v-card-title>
        <v-icon left> mdi-account-box </v-icon>
        <span class="title font-weight-light">Informações Pessoais</span>
      </v-card-title>
      <v-row no-gutters>
        <v-col cols="12" sm="12" md="8">
          <v-card flat class="pt-2 pl-10 pr-10 pb-10">
            <v-card-title class="headline">Dados Cadastrais</v-card-title>
            <v-card-subtitle>
              Verifique se seus dados estão corretos e atualizados.
            </v-card-subtitle>
            <AccountInformations />
          </v-card>
        </v-col>
        <v-col cols="12" sm="12" md="4">
          <v-card flat class="pt-2 pl-10 pr-10 pb-10">
            <v-card-title class="headline">Alterar Senha</v-card-title>
            <v-card-subtitle> Use sempre uma senha segura. </v-card-subtitle>
            <ChangePassword />
          </v-card>
        </v-col>
      </v-row>
    </v-card>
  </v-container>
</template>

<script>
import Profiles from '~/components/account/Profiles'
import AccountInformations from '~/components/account/formAccountInformations.vue'
import ChangePassword from '~/components/account/formChangePassword.vue'

export default {
  name: 'Account',
  components: {
    Profiles,
    AccountInformations,
    ChangePassword,
  },
  data: () => ({
    tab: 0,
  }),
  head() {
    return {
      title: 'Account Details',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: '',
        },
      ],
    }
  },
  computed: {
    editProfileOptions: (ctx) => {
      return Number(ctx.$route.params.id) === Number(1)
    },
  },
  mounted() {
    this.$nextTick(() => {
      if (!this.editProfileOptions) {
        this.$bus.$emit('SHOW_BOTTOM_NAVIGATION', {
          buttons: [
            {
              name: 'Ligar',
              icon: 'mdi-cellphone-iphone',
              href: 'tel:+5502122222222',
            },
            {
              name: 'E-Mail',
              icon: 'mdi-email',
              href: 'mailto:name@email.com',
            },
            {
              name: 'Chat',
              icon: 'mdi-forum',
              to: '/chat/1',
            },
            {
              name: 'Whatsapp',
              icon: 'mdi-whatsapp',
              href: 'whatsapp://send?text=Hello World!&phone=+5515998177100',
            },
          ],
        })
      } else {
        this.$bus.$emit('SHOW_BOTTOM_NAVIGATION', false)
      }
    })
  },
}
</script>
