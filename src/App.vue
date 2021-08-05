<template>
  <header>
    <nav class="navbar navbar-expand-sm navbar-dark bg-primary">
      <router-link :to="{name: 'Home'}" class="navbar-brand"><h1>Gregslist</h1></router-link>
      <button
        class="navbar-toggler d-lg-none"
        type="button"
        data-toggle="collapse"
        data-target="#collapsibleNavId"
        aria-controls="collapsibleNavId"
        aria-expanded="false"
        aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="collapsibleNavId">
        <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
          <li class="nav-item active">
            <router-link class="nav-link navbar-brand" :to="{name: 'Home'}">Cars </router-link>
          </li>
          <li class="nav-item active">
          <router-link class="nav-link navbar-brand" :to="{name: 'Job'}" >Jobs</router-link>
          </li>
          <li class="nav-item active">
          <router-link class="nav-link navbar-brand" :to="{name: 'House'}" >Houses</router-link>
          </li>
        </ul>
      </div>
    </nav>
  </header>
  <main class="position-relative">
    <router-view />
  </main>
  <footer class="container-fluid bg-primary">
    <div class="row">
      <div class="col text-center p-3 text-light">
        <p>Made with <img class="logo" src="./assets/logo.png" /> by Codeworks</p>
      </div>
    </div>
  </footer>
</template>

<style>
#app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}
main {
  flex-grow: 1;
}
.logo {
  height: 1rem;
}

.bg-img {
  display: block;
  background-image: 'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80';
  background-position: center;
  background-size: cover;
  
}

</style>
