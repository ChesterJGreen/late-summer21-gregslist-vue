<template>
  <div class="job container-fluid bg-img">
    <div class="row">
      <div class="col">
        <JobForm />
      </div>
    </div>
    <div class="row">
      <div class="col-md-2 col-sm-5" v-for="j in jobs" :key="j.id">
        <JobCard :job="j"/>
      </div>
    </div>
  </div>
</template>

<script>
import { computed, onMounted } from "@vue/runtime-core"
import { AppState } from "../AppState"
import {jobsService} from '../services/JobsService'
import JobCard from '../components/JobCard.vue'
import JobForm from '../components/JobForm.vue'


export default {
  name: 'Job',
  setup() {
    onMounted(async ()=>{
      try {
        await jobsService.getJobs()
      } catch (error){
        console.error(error)
      }
    })
    return {
      jobs: computed(() => AppState.jobs)
    }
  },
  components: {
    JobCard,
    JobForm,
  }
}
</script>
<style scoped>

.bg-img {
  
  background-image: url('https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80');
 
  background-position: center;
  background-size: cover;
  
}

.bg-img .row .col{
  opacity: unset;
}
</style>
