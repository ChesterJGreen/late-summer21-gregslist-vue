<template>
  <div class="job-details-page row">
    <div class="col-md-12 text-center">
    <h1>Here are the job details</h1>
    <h3>{{job.jobTitle}} - {{job.company}}</h3>
    </div>
    <div class="col-md-4">
    <img src="https://th.bing.com/th/id/R.a34c0ef23bdb491b11b88ee606c9eacb?rik=ptclqhHXSpGYbQ&riu=http%3a%2f%2fwww.newdesignfile.com%2fpostpic%2f2013%2f08%2fjob-description-icon_150082.jpg&ehk=UWRln6ytoz6XlmA2paiPa4Sg%2fOBY2I0jVPd%2bAPloqrs%3d&risl=&pid=ImgRaw&r=0" class="w-75" :alt="job.jobTitle">
    </div>
    <div class="col-md-8 pt-5">
    <h5>{{job.description}}</h5>
    </div>

  </div>
  <div class="row justify-content-end pr-5">

    <button class="btn btn-danger" @click="destroy">Delete</button>
  </div>
</template>

<script>
import { computed, onMounted } from "@vue/runtime-core"
import { useRoute, useRouter } from "vue-router"
import { jobsService } from "../services/JobsService"
import { AppState } from "../AppState"


export default{
  name: 'JobDetails',
  setup() {
    const route = useRoute()
    const router = useRouter()
    onMounted(async() => {
      try {
        await jobsService.getJobById(route.params.id)
      }catch (error) {
        console.error (error)
      }
    })
    return {
      job: computed(()=> AppState.activeJob),
      async destroy(){
        try{
          await jobsService.destroy(route.params.id)
          router.push({name: 'Job'})
        } catch (error) {
          console.error(error)
        }
      }
    }
  },
}
</script>
<style scoped>

</style>
