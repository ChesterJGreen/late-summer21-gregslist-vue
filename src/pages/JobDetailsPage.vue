<template>
  <div class="job-details-page">
    <h1>Welcomce to the job details</h1>
    {{job.jobTitle}} - {{job.company}}
    <br>
    <img src="https://th.bing.com/th/id/R.a34c0ef23bdb491b11b88ee606c9eacb?rik=ptclqhHXSpGYbQ&riu=http%3a%2f%2fwww.newdesignfile.com%2fpostpic%2f2013%2f08%2fjob-description-icon_150082.jpg&ehk=UWRln6ytoz6XlmA2paiPa4Sg%2fOBY2I0jVPd%2bAPloqrs%3d&risl=&pid=ImgRaw&r=0" class="w-50" :alt="job.jobTitle">
    {{job.description}}
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
      async destory(){
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
