<template>
  <div class="hello">
    <!-- <h1>{{ msg }}</h1>
    <p>
      {{ brandname }}
    </p> -->
    <nav
    class="navbar navbar-expand-lg"
    :class="{'navbar-light bg-light': !useDarkNavbar, 
    'navbar-dark bg-dark': useDarkNavbar}"
    >
      <div class="container-fluid">
      <a class="navbar-brand" href="#">My Vue</a>
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">

        <li v-for="(navBar, index) in navBars" :key="index">

          
        <a  
        :class="{active: activePage == index}"
        aria-current="navBar"
        @click.prevent="activePage = index"
        class="nav-link"
        :href="navBar.menuItem.url"
          >{{ navBar.menuItem.text }}      
        </a>
       </li>
      </ul>
      <form class="d-flex">
                <button 
                class="btn btn-primary"
                @click.prevent="useDarkNavbar = !useDarkNavbar"
                >Toggle Navbar</button>
                <!-- button for changing theme of navbar -->
            </form>
    </div>
   </nav>


   <div id="content" class="container">
    <h1>{{ navBars[activePage].pageTitle }}</h1>
   <p>{{ navBars[activePage].content }}</p>

   </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  navBars: Array,
  props: {
    navBars: Array,
    brandname: String,
  },
  data() {
    return {
    activePage: 0,
    useDarkNavbar: true,
    }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<!-- <style scoped>
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
</style> -->
