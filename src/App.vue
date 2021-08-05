<template>
  <header>
    <nav class="navbar navbar-expand-sm navbar-dark bg-primary">
      <router-link :to="{name: 'Home'}" class="navbar-brand text"><h1>Gregslist</h1></router-link>
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
            <router-link class="nav-link navbar-brand text" :to="{name: 'Home'}">Cars </router-link>
          </li>
          <li class="nav-item active">
          <router-link class="nav-link navbar-brand text" :to="{name: 'Job'}" >Jobs</router-link>
          </li>
          <li class="nav-item active">
          <router-link class="nav-link navbar-brand  text" :to="{name: 'House'}" >Houses</router-link>
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

.text {
  color: rgb(255, 255, 255);
	text-shadow: -1px 1px 12px #23430C,
			1px 1px 2px #23430C,
       1px -1px 2px #23430C,
      -1px -1px 2px #23430C;
}
.text:hover {
  text-shadow: 1px 1px 2px black, 
  0 0 5px rgb(253, 253, 253),
    0 0 5px rgb(128, 4, 0);
  cursor: pointer;
}


</style>
