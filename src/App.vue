<template>
  <div id="app">
    <div v-show="!sesionAprobada" style="width: 99%">
      <div class="content">
        <div class="row justify-content-center">
          <div class="col-4">
            <div class="card">
              <img
                class="card-img-top"
                src="./assets/logoCard.png"
                alt="Card image cap"
              />
              <div class="center mt-4">
                <p class="card-text text-white text-center letraLogin">
                  Ingresa el número de teléfono <br />de tu asesora
                  independiente.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="row mt-4 justify-content-center">
          <div class="col-5">
            <div class="form-floating mb-3">
              <input
                type="number"
                @keypress.enter="iniciarSesion()"
                v-model="numAsesora"
                class="form-control text-white"
                id="floatingInput"
                placeholder="Telefono"
                oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);"
                maxlength="10"
              />
              <label class="text-white" for="floatingInput">Telefono</label>
            </div>
          </div>
        </div>
        <div class="row justify-content-center">
          <div class="col-5">
            <p class="text-white">{{ MensajeError }}</p>
          </div>
        </div>
      </div>
    </div>
    <div style="width: 99%">
      <Index v-show="sesionAprobada"></Index>
    </div>
  </div>
</template>
<script>
import logoCard from "./assets/logoCard.png";
import Index from "./views/index.vue";
export default {
  components: {
    Index,
  },
  beforeCreate() {
    if (!this.sesionAprobada) {
      document.body.classList.add("bg");
    }
  },
  computed: {
    sesionAprobada() {
      return this.$store.getters.getternumValido;
    },
  },
  data() {
    return {
      logocard: logoCard,
      MensajeError: "",
      numAsesora: "7865470213",
    };
  },
  methods: {
    iniciarSesion() {
      if (this.numAsesora != "") {
        this.$store.dispatch("getValidnum", this.numAsesora);
        if (this.sesionAprobada) {
          this.pAceptada = true;
          document.body.classList.remove("bg");
        } else {
          this.MensajeError = "Este número no es valido o no está registrado.";
        }
      } else {
        this.MensajeError = "Este número no es valido o no está registrado.";
      }
    },
  },
};
</script>
<style lang="scss">
.bg {
  background: url("./assets/login.jpg") no-repeat top center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}
.card-img-top {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: auto;
  min-width: 100px;
  min-height: 100px;
  max-width: 200px;
  height: auto;
}
.card {
  background-color: transparent !important;
  border: none !important;
  margin-top: 50%;
}
.letraLogin {
  font-size: 1.07em;
  font-weight: bold;
  line-height: 25px;
  font-family: Montserrat, sans-serif;
}
.inputBackground {
  background: transparent;
}
.form-control {
  background: transparent !important;
  border-color: white !important;
  border-width: 2px !important;
}
.form-control:focus {
  border-color: black !important;
  box-shadow: none !important;
}
.form-control:hover {
  border-color: black !important;
}
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
input[type="number"] {
  -moz-appearance: textfield;
}
</style>
