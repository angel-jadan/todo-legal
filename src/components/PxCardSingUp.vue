<template>
  <v-container fill-height fluid>
    <v-card class="pa-5" max-width="400" min-width="600" height="650px">
      <v-row align="center" justify="space-between" class="ml-2 mr-2">
        <v-col>
          <v-row align="center" justify="center">
            <px-logo></px-logo>
          </v-row>
          <v-card-text>
            <div class="text-center">
              <h2>Crear Cuenta Gratis</h2>
            </div>
            <div class="text-center mt-5 mb-2">
              Ingresa los siguientes datos para registrarte como un nuevo
              usuario.
            </div>
          </v-card-text>
          <v-row justify="space-around" align="start">
            <div class="d-flex flex-column">
              <v-text-field
                v-model="user.name"
                maxlength="13"
                outlined
                label="Nombres"
              >
              </v-text-field>

              <v-text-field
                v-model="user.email"
                outlined
                label="Email"
              >
              </v-text-field>
              <v-text-field
                v-model="user.phone_number"
                outlined
                label="Numero de Teléfono"
              >
              </v-text-field>

              <v-text-field
                v-model="user.username"
                maxlength="13"
                outlined
                label="Cédula de Identidad"
              >
              </v-text-field>
            </div>
            <div class="d-flex flex-column">
              <v-text-field
                v-model="user.last_name"
                outlined
                label="Apellidos"
              >
              </v-text-field>

              <v-text-field
                v-model="user.password"
                outlined
                label="Contraseña"
                :type="show_password ? 'text' : 'password'"
                :append-icon="show_password ? 'mdi-eye' : 'mdi-eye-off'"
                @click:append="show_password = !show_password"
              ></v-text-field>

              <v-text-field
                v-model="user.re_password"
                outlined
                label="Confirmar Contraseña"
                :type="re_show_password ? 'text' : 'password'"
                :append-icon="re_show_password ? 'mdi-eye' : 'mdi-eye-off'"
                @click:append="re_show_password = !re_show_password"
              ></v-text-field>
            </div>
          </v-row>
          <v-row align="center" justify="center" v-if="invalid_password">
            <v-alert dense outlined type="error">
              Las contraseñas deben ser iguales!
            </v-alert>
          </v-row>
          <v-row align="center" justify="end">
            <v-col>
              <v-row>
                <v-btn @click="cancelarSignUp"
                  >Cancelar</v-btn
                >
                <v-spacer></v-spacer>
                <v-btn :disabled="btn_continuar_disable" @click="signUp"
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
  data() {
    return {
      btn_continuar_disable: true,

      show_password: false,
      re_show_password: false,
      invalid_password: false,
      user: {},
    };
  },
  watch: {
    user() {
      this.checkFields();
    },
  },

  methods: {
    checkFields() {
      this.btn_continuar_disable = !(
        this.user.name &&
        this.user.email &&
        this.user.phone_number &&
        this.user.username &&
        this.user.last_name &&
        this.user.password &&
        this.user.re_password
      );
    },

    signUp() {
      if (this.user.password != this.user.re_password) {
        this.invalid_password = true;
      } else {
        this.invalid_password = false;
        this.$emit("sign-up", this.user);
      }
    },

    cancelarSignUp(){
        this.$emit("cancelar-sign-up", this.user);
    }
  },
};
</script>
