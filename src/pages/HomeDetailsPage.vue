<template>
  <div class="home-details-page">
    <h1>Welcome to the home details</h1>
    {{home.year}} - {{home.price}}
    <br>
    <img :src="home.imgUrl" class="w-50 h-10" :alt="home.price">
    {{home.description}} 

 <button class="btn btn-danger" @click="destroy">Delete</button>
  </div>
</template>


<script>
import { computed, onMounted } from '@vue/runtime-core'
import {AppState} from '../AppState'
import {homesService} from '../services/HomesService'
import {useRoute, useRouter} from 'vue-router'

export default {
  name: 'HomeDetails',
    setup(){
      const route = useRoute()
      const router = useRouter()
      onMounted(async()=>{
        try {
          await homesService.getHomeById(route.params.id)
        } catch (error) {
          console.error(error)
        }
      })
    return {
      home: computed(()=> AppState.activeHome),
      async destroy(){
        try {
          await homesService.destroy(route.params.id)
          router.push({name: 'Home'})
        } catch (error) {
          console.error(error)
        }
      }
    }
  },
  components:{}
}
</script>


<style lang="scss" scoped>

</style>