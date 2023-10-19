<template>
  <navbar
    :pages="pages"
    :active-page="activePage"
    @nav-link-click="handleNavLinkClick"
  ></navbar>

<page-viewer
    :page="pages[activePage]"
>

</page-viewer>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import PageViewer from "./components/PageViewer.vue";

export default {
  components: {
    Navbar,
    PageViewer
  },
  created() {
    this.getPages();
  },
  data() {
    return {
      activePage: 0,
      pages: this.getPages()
    };
  },
  methods: {
    async getPages() {
      let res = await fetch('pages.json');
      let data = await res.json();

      this.pages = data;
    }
  }
}
</script>