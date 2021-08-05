<template>
  <div class="home container-fluid bg-img">
    <div class="row">
      <div class="col">
        <CarForm />
      </div>
    </div>
    <div class="row">
      <div class="col-md-3" v-for="c in cars" :key="c.id">
        <!-- Data passed through prop ':car' to child -->
        <CarCard :car="c"/>
      </div>
    </div>
  </div>
</template>

<script>
import { computed, onMounted } from '@vue/runtime-core'
import {AppState} from '../AppState.js'
import {carsService } from '../services/CarsService'
import CarCard from '../components/CarCard.vue'
import CarForm from '../components/CarForm.vue'


export default {
  name: 'Home',
  setup(){
    // state

    // mounted
    onMounted(async ()=>{
      try {
        await carsService.getCars()
      } catch (error) {
        console.error(error)
      }
    })
    
    return {
      // state,
      // computeds
      cars: computed(() => AppState.cars),
     
      // jobs: computed(() => AppState.jobs)
      // methods
    }
  },
  components: {
    CarCard,
    CarForm,
    // HomeCard,
    // HomeForm
  }
}
</script>
<style scoped>
.bg-img {
  background-image: url('https://images.unsplash.com/photo-1494783367193-149034c05e8f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80');
  background-position: top;
  background-size: cover;
  
}
</style>
