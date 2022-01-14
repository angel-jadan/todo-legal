<template>
  <v-container fill-height fluid>
    <v-card class="pa-5" max-width="400" min-width="400" height="600px">
      <v-row align="center" justify="space-between" class="ml-2 mr-2">
        <v-col>
          <v-row align="center" justify="center">
            <px-logo></px-logo>
          </v-row>
          <v-card-text>
            <div class="text-center">
              <h2>Bienvenido</h2>
            </div>
            <div class="text-center mt-5 mb-2">
              Por favor ingresa a tu cuenta ingresando tu número de cédula y
              contraseña. Si no tientes una cuenta en TodoLegal, puedes crear
              una <b>Gratis</b>.
            </div>
          </v-card-text>
          <v-row>
            <v-text-field
              v-model="username"
              maxlength="13"
              outlined
              label="Cédula de Identidad"
              @click:append.native="toolTip"
              append-icon="mdi-information-outline"
            >
              <template v-slot:append>
                <v-tooltip bottom color="#37474F" v-model="tool_tip_cedula">
                  <template v-slot:activator="{ attrs }">
                    <v-btn
                      icon
                      small
                      v-bind="attrs"
                      @click="tool_tip_cedula = !tool_tip_cedula"
                    >
                      <v-icon>mdi-information-outline</v-icon>
                    </v-btn>
                  </template>
                  <span
                    >Tu cédula debe encontrarse vigente para ingresar al
                    sistema</span
                  >
                </v-tooltip>
              </template>
            </v-text-field>
            <v-text-field
              v-model="password"
              outlined
              label="Contraseña"
              :type="show_password ? 'text' : 'password'"
              :append-icon="show_password ? 'mdi-eye' : 'mdi-eye-off'"
              @click:append="show_password = !show_password"
            ></v-text-field>
          </v-row>
          <v-row align="center" justify="center" v-if="invalid_credentials">
            <v-alert dense outlined type="error">
              Credenciales invalidas!
            </v-alert>
          </v-row>
          <v-row align="center" justify="center">
            <div @click="showSignUp">
              <a>No tengo cuenta, crear una GRATIS</a>
            </div>
          </v-row>
          <v-row align="center" justify="end">
            <v-col>
              <v-row class="mt-5">
                <v-spacer></v-spacer>
                <v-btn :disabled="btn_continuar_disable" @click="loginUser"
                  >Continuar</v-btn
                >
              </v-row>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-card>
  </v-container>
</template>
<script>
import PxLogo from "@/components/PxLogo.vue";

export default {
  name: "PxCardLogin",
  components: {
    PxLogo,
  },
  props: {
    invalid_credentials: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      btn_continuar_disable: true,
      tool_tip_cedula: false,
      username: null,
      password: null,
      show_password: false,
    };
  },

  watch: {
    username() {
      this.btn_continuar_disable = !(this.username && this.password);
    },

    password() {
      this.btn_continuar_disable = !(this.username && this.password);
    },
  },

  methods: {
    toolTip() {
      this.tool_tip_cedula = !this.tool_tip_cedula;
    },
    loginUser() {
      let credentials = { username: this.username, password: this.password };
      this.$emit("login-user", credentials);
    },
    showSignUp() {
      this.$emit("show-sign-up");
    },
  },
};
</script>
