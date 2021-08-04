<template>
  <div class="house container-fluid">
    <div class="row">
      <div class="col">
        <HomeForm />
      </div>
    </div>
        <div class="row">
      <div class="col-4" v-for="h in homes" :key="h.id">
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
