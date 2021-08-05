<template>
  <div class="home container-fluid bg-img">
    <div class="row bg-img row-grow">
      <div class="col-md-6 offset-4">
        <h1 class="text-light">Welcome to Greg's List!</h1>
      </div>
    </div>
  </div>
</template>

<script>



export default {
  name: 'Home',
  setup(){
    // state

    // mounted
  
    
    return {
      // state,
      // computeds
      
     
      // jobs: computed(() => AppState.jobs)
      // methods
    }
  },
  components: {
  
    // HomeCard,
    // HomeForm
  }
}
</script>
<style scoped>
.bg-img {
  background-image: url('https://images.unsplash.com/photo-1578916171728-46686eac8d58?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=667&q=80');
  background-position: center;
  background-size: cover;

  
}

.row-grow{
  min-height: 79.59vh;
}
</style>
