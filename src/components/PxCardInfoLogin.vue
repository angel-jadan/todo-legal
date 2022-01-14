<template>
  <v-card class="pa-5" max-width="400" min-width="400" height="550px">
    <v-container fill-height fluid>
      <v-row align="center" justify="space-between">
        <v-col>
          <v-row align="center" justify="center">
            <px-logo></px-logo>
          </v-row>

          <v-row align="center" justify="center">
            <v-btn icon x-large>
              <v-icon color="green"> mdi-check-circle-outline </v-icon>
            </v-btn>
          </v-row>
          <v-card-text>
            <div class="text-center ma-4">
              <h2>¡Validación Exitosa!</h2>
            </div>

            <div class="text-start mb-4">
              <b>Datos verificados</b>
              <v-divider></v-divider>
            </div>
            <v-card-text>
              <v-text-field
                v-model="nombres_apellidos"
                disabled
                label="Nombres y Apellidos"
              ></v-text-field>
              <v-text-field
                v-model="numero_identificacion"
                disabled
                label="Cédula de Identidad"
              ></v-text-field>
            </v-card-text>
          </v-card-text>
          <v-row> </v-row>
          <v-row align="center" justify="end">
            <v-col>
              <v-row class="mt-5">
                <v-spacer></v-spacer>
                <v-btn @click="redirectHome">Finalizar</v-btn>
              </v-row>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>
<script>
import PxLogo from "@/components/PxLogo.vue";

export default {
  name: "PxCardInfoLogin",
  props: {
    nombres_apellidos: {
      type: String,
      default: null,
    },
    numero_identificacion: {
      type: String,
      default: null,
    },
  },
  components: {
    PxLogo,
  },
  data() {
    return {};
  },

  methods: {
    redirectHome() {
      this.$emit("redirect-home");
    },
  },
};
</script>
