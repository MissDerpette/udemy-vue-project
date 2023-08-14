<!-- <template>
  <div>

  </div>
</template>

<script>

export default {
  name: 'App',

}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style> -->


<template>
  <div id="exchangario">
    <!-- NAVBAR -->
     <ExchangeNavbar />
    <!-- NAVBAR END -->

    <!-- HERO START -->
    <ExchangeHero />
    <!-- HERO END -->

    <!-- POST LIST START -->
   <ExchangeList />
    <!-- POST LIST END -->

    <!-- PAGINATION START -->
    <ExchangePagination />
    <!-- PAGINATION END -->
  </div>
</template>

<script>
import ExchangeNavbar from "./components/nav-bar.vue";
import ExchangeHero from "./components/hero-banner.vue";
import ExchangeList from "./components/exchange-list.vue";
import ExchangePagination from "./components/ex-pagination.vue";
export default {
  name: 'App',
  components: {
    ExchangeNavbar,
    ExchangeHero,
    ExchangeList,
    ExchangePagination
  }
}
</script>

<style lang="scss">
 @import 'assets/styles/variables.scss';
  @import '~bulma/bulma.sass';
  @import 'assets/styles/main.scss';

  
</style>