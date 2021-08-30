<template>
  <div class="content mt-5 pt-2">
    <div class="row-2 justify-content-center">
      <div class="text-center mt-1 mb-2">
        <img
          src="https://mitienda.moda/img/productos-de-entrega-inmediata.9ad72bec.jpg"
          class="rounded"
        />
      </div>
    </div>
    <div class="row justify-content-center">
      <div class="col-4">
        <div>
          <b-carousel
            id="carousel-1"
            v-model="slide"
            :interval="4000"
            label-next=""
            label-prev=""
            controls
            indicators
            background="transparent"
            style="text-shadow: 1px 1px 2px #333"
            @sliding-start="onSlideStart"
            @sliding-end="onSlideEnd"
          >
            <!-- Text slides with image -->
            <b-carousel-slide
              img-src="https://v3.tissini.app/img/categories/multivendor/jeans-prominent.jpg"
            ></b-carousel-slide>

            <!-- Slides with custom text -->
            <b-carousel-slide
              img-src="https://v3.tissini.app/img/categories/multivendor/fajas-prominent.jpg"
            >
            </b-carousel-slide>

            <!-- Slides with image only -->
            <b-carousel-slide
              img-src="https://v3.tissini.app/img/categories/multivendor/blusas-prominent.jpg"
            ></b-carousel-slide>

            <b-carousel-slide
              img-src="https://v3.tissini.app/img/categories/multivendor/zapatos-prominent.jpg"
            ></b-carousel-slide>

            <b-carousel-slide
              img-src="https://v3.tissini.app/img/categories/multivendor/ropa-interior-prominent.jpg"
            ></b-carousel-slide>

            <b-carousel-slide
              img-src="https://v3.tissini.app/img/categories/multivendor/seamless-prominent.jpg"
            ></b-carousel-slide>

            <b-carousel-slide
              img-src="https://v3.tissini.app/img/categories/multivendor/concord-ozzy-prominent.jpg"
            ></b-carousel-slide>

            <b-carousel-slide
              img-src="https://v3.tissini.app/img/categories/multivendor/tapabocas-prominent.jpg"
            ></b-carousel-slide>
          </b-carousel>
        </div>
      </div>
    </div>
    <div class="row justify-content-center">
      <div class="text-center mt-1 mb-2">
        <img
          src="https://v3.tissini.app/img/categories/multivendor/new-products.png?vuetify-preload"
          class="rounded"
          alt="..."
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    onSlideStart() {
      this.sliding = true;
    },
    onSlideEnd() {
      this.sliding = false;
    },
    data() {
      return {
        slide: 0,
        sliding: null,
      };
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
