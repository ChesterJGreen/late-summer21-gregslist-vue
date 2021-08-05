<template>
  <div class="house container-fluid bg-img">
    <div class="row">
      <div class="col">
        <HomeForm />
      </div>
    </div>
        <div class="row">
      <div class="col-md-4" v-for="h in homes" :key="h.id">
        <!-- Data passed through prop ':car' to child -->
        <HomeCard :home="h"/>
      </div>
    </div>
  </div>
</template>

<script>
import { computed, onMounted } from '@vue/runtime-core'
import {AppState} from '../AppState.js'
import {homesService} from '../services/HomesService'
import HomeCard from '../components/HomeCard.vue'
import HomeForm from '../components/HomeForm.vue'

export default {
  name: 'House',
  setup(){
    // state

    // mounted
    
    onMounted(async ()=>{
      try {
        await homesService.getHomes()
      } catch (error) {
        console.error (error)
      }
    })
    return {
      // state,
      // computeds
     
      homes: computed(() => AppState.homes),
      // jobs: computed(() => AppState.jobs)
      // methods
    }
  },
  components: {
    HomeCard,
    HomeForm
  }
}
</script>
<style scoped>
.bg-img {
  background-image: url('https://images.unsplash.com/photo-1518965377251-de929fb61f2b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80');
  background-position: top;
  background-size: cover;
  
}
</style>