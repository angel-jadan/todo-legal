<template>
  <v-container fluid class="grey lighten-5 fill-height">
    <v-main>
      <div class="d-flex justify-center">
        <div class="d-flex align-center">
          <PxCardLogin
            :invalid_credentials="invalid_credentials"
            @login-user="loginUser"
            @show-sign-up="showSignUp"
            v-if="!loadInfoUsr && !show_sing_up"
          />
          <PxCardInfoLogin
            :nombres_apellidos="usrData.name + ' ' + usrData.lastname"
            :numero_identificacion="usrData.username"
            @redirect-home="redirectHome"
            v-if="loadInfoUsr && !show_sing_up"
          />
          <PxCardSingUp 
          @cancelar-sign-up="CancelarSingUp"
          @sign-up="signUp" 
          v-if="show_sing_up && !loadInfoUsr" />
        </div>
      </div>
    </v-main>
  </v-container>
</template>
<script>
import api from "@/api.js";
import PxCardLogin from "@/components/PxCardLogin.vue";
import PxCardInfoLogin from "@/components/PxCardInfoLogin.vue";
import PxCardSingUp from "@/components/PxCardSingUp.vue";

export default {
  data() {
    return {
      loadInfoUsr: false,
      statusLogin: null,
      invalid_credentials: false,
      usrData: {},
      show_sing_up: false,
      access_token: null,
    };
  },

  components: {
    PxCardLogin,
    PxCardInfoLogin,
    PxCardSingUp,
  },

  methods: {
    loginUser(data) {
      this.loadInfoUsr = false;
      this.invalid_credentials = false;
      localStorage.removeItem('access_token');

      api.loginUser(data).then(async (res) => {
        let _data = await res.json();
        if (res.ok) {
          this.usrData = _data;
          this.loadInfoUsr = true;
          localStorage.setItem('access_token', _data.access_token);
        } else {
          if (res.status === 404) {
            this.invalid_credentials = true;
          } else {
            this.msj =
              "No se ha podido establecer la comunicacion con el servidor.....";
          }
          this.loadInfoUsr = false;
        }
      });
    },
    redirectHome() {
      this.$router.push({
        name: "home",
        params: {},
      });
    },
    showSignUp() {
      this.loadInfoUsr = false;
      this.show_sing_up = true;
    },
    signUp(credentials) {
      let access_token= localStorage.getItem('access_token')
      api.signUp(credentials, access_token).then(async (res) => {
        debugger
        let data = await res.json();
        if (res.ok) {
          this.user_created = data;
          this.loadInfoUsr = true;
        } else {
          this.loadInfoUsr = false;
        }
      });
    },
    CancelarSingUp(){
      this.loadInfoUsr = false;
      this.show_sing_up = false;
    }
  },
};
</script>
