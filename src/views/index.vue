<template>
  <div id="app">
    <div class="content">
      <div class="row">
        <nav class="navbar navbar-light fixed-top">
          <div class="container-fluid">
            <a class="navbar-brand">Ferchitos Store Tissini App</a>
            <form class="d-flex">
              <a href="tel:786-547-0213" class="efectoLink">
                <i class="bi bi-telephone"></i>
              </a>
              <button v-b-modal.modal-center type="button" class="buttonStyle">
                <i class="bi bi-box-arrow-right"></i>
              </button>
              <b-modal
                header-class="headerClass"
                ok-title-html="<p style='color: hotpink'>SALIR DE LA TIENDA<p>"
                ok-variant="muted"
                cancel-title="VOLVER"
                cancel-variant="muted"
                cancel-title-html="<p style='color: hotpink'>VOLVER<p>"
                id="modal-center"
                centered
                title="¿Quieres Salir?"
              >
                <p class="my-4">
                  Dándole un toque a este botón sales de la Tienda. Si quieres
                  navegar en la Tienda utiliza las opciones de la parte
                  inferior: <br />
                  <i style="color: #f06292" class="bi bi-cart3"></i> Carrito
                  Catalogo
                  <i style="color: #f06292" class="bi bi-person-badge"></i
                  >Categorías
                </p>
              </b-modal>
            </form>
          </div>
        </nav>
        <router-view />
        <footer class="fixed-bottom sombraFooter">
          <div class="text-center justify-content-center">
            <nav class="navbar navbar-expand-lg">
              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mx-auto">
                  <li class="nav-item active">
                    <router-link to="/" class="nav-link nav-linkMenu" href="#"
                      ><i
                        style="color: #f06292"
                        class="bi bi-house-door-fill"
                      ></i
                      ><span style="color: #f06292" class="sr-only"
                        >Categorías</span
                      ></router-link
                    >
                  </li>
                  <li class="nav-item active">
                    <router-link to="/" class="nav-link nav-linkMenu" href="#">
                      <i class="bi bi-person-badge"></i>
                      <span class="sr-only">Catálogo</span></router-link
                    >
                  </li>
                  <li class="nav-item active">
                    <router-link to="/" class="nav-link nav-linkMenu" href="#"
                      ><i class="bi bi-cart3"></i
                      ><span class="sr-only">Carrito</span></router-link
                    >
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </footer>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  mounted() {
    this.$root.$on("bv::modal::hidden",function () {
      this.cerrarSesion();
    });
  },
  computed: {},
  data() {
    return {};
  },
  methods: {
    cerrarSesion() {
      this.$store.dispatch("getValidnum", false);
      this.$router.go("/");
    },
  },
};
</script>
<style lang="scss">
.headerClass {
  background-color: #f06292;
  color: white;
}
.headerClass button {
  display: none;
}
.sombraFooter {
  box-shadow: -2px -3px 3px -1px grey;
  background-color: white;
}
.nav-item {
  margin-left: 70px;
}
.nav-linkMenu {
  display: flex !important;
  flex-direction: column;
  align-items: center;
  color: rgba(0, 0, 0, 0.55) !important;
}
.navbar-brand {
  color: #f06292 !important;
  font-weight: 400;
  letter-spacing: 0.02em;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.navbar-light {
  box-shadow: 1px 2px 3px -1px grey;
  background-color: white;
}
.efectoLink {
  margin-right: 0.5em;
  width: 40px;
  font-size: 25px;
  text-decoration: none;
  color: #f06292;
  text-align: center;
}
.efectoLink:hover {
  color: hotpink;
  width: 40px;
  border-radius: 50%;
  background-color: rgba(240, 98, 146, 0.2);
}
.buttonStyle {
  width: 40px;
  font-size: 25px;
  color: #f06292;
  text-align: center;
  border: none;
  text-decoration: none;
  background: transparent;
  cursor: pointer;
}
.buttonStyle:hover {
  color: hotpink;
  width: 40px;
  border-radius: 50%;
  background-color: rgba(240, 98, 146, 0.2);
}

.nav-linkMenu:hover {
  background-color: rgba(240, 98, 146, 0.2);
}
</style>
