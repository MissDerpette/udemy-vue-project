<template>
  <h1>This is ABOUT ME page</h1>

  <h2>{{ fullName }}</h2>
  <h3> {{ position }} </h3>
  <p> {{ aboutMe }} </p>
  <p> {{ experience }} </p>

  <h5> Socials </h5>

  <div class="social-media">
    <ul>
      <li v-for="item in SocialList" :key="item">
        <a :href="item.to" class="social-button" target="_blank">
          <i :class="item.class" class="spin circle" aria-hidden="true"></i>
        </a>
        <div class="info">
          <p> {{ item.name }}</p>
        </div>
      </li>
    </ul>
  </div>

</template>

<script>
export default {
    data() {
        return {
            fullName : 'Kirstine Pineda',
            position: 'Front End Developer',
            aboutMe: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',  
            experience: 'no experience yet',
            SocialList: [
                {
                    to: 'https://codepen.io/andrewfuentes/' ,
                    class : 'fa-brands fa-codepen',
                    name: 'codepen'
                },
                {
                    to: 'https://github.com/codeandrew' ,
                    class : 'fa-brands fa-github',
                    name: 'github'
                },
                {
                    to: 'https://twitter.com/code_drew/' ,
                    class : 'fa-brands fa-twitter',
                    name : 'twitter'
                },
                {
                    to: 'https://www.linkedin.com/in/jeanandrew/' ,
                    class : 'fa-brands fa-linkedin',
                    name : 'linkedin'
                },
            ]        
        }
    }

}
</script>

<style>

</style>