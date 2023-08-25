<template>
    <div>
   <nav class="navbar navbar-expand-lg sticky-bottom">
      <div class="container-fluid">
        <router-link to="/"><img src="https://i.postimg.cc/6p9C3Sws/food-logo-removebg-preview.png" alt="LOGO" loading="lazy" class="logo"></router-link>
        <button class="navbar-toggler bg-light food" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
            <li class="nav-item m-2">
              <router-link to="/">Home</router-link>
            </li>
            <li class="nav-item m-2">
              <router-link to="/about">About</router-link>
            </li>
            <li class="nav-item m-2">
              <router-link to="/menu">Menu</router-link>
            </li>
            <li class="nav-item m-2">
              <router-link to="/contact">Contact</router-link>
            </li>
            <li class="nav-item m-2">
                <router-link to="/admin">Admin</router-link>
            </li>
           </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default{

}
</script>

<style scoped>
.navbar{
  z-index: 2;
background: #202020 !important;
}
nav ul li a {
  color: white; /* Change this to the desired color */
}
nav ul li a:hover {
  color: #FFC107; /* Color on hover */
}
.food{
  color: white;
}
.food:hover {
  color: #FFC107;
}
.logo{
  width: 7rem;
}
</style>