<template>
  <div class="job-form row">
    <form class="d-flex col-md-10 m-2 p-3 border bg-see shadow rounded" @submit.prevent="createJob">
      <div class="row">
      <div class="form-group col-md-5 p-1 pl-3">
         <input
          type="text"
          name="job-title"
          v-model="state.newJob.jobTitle"
          class="form-control"
          placeholder="Title..."
          required
        />
      </div>
      <div class="form-group col-md-3 p-1 pl-3">
        <input
          type="text"
          name="company"
          v-model="state.newJob.company"
          class="form-control"
          placeholder="Company..."
          maxlength="240"
        />
      </div>
      <div class="form-group col-md-1 p-1 pl-3">
         <input
          type="number"
          name="hours"
          v-model="state.newJob.hours"
          class="form-control"
          placeholder="Hrs..."
        />
      </div>
      <div class="form-group col-md-1 p-1 pl-3">
        <input
          type="number"
          name="rate"
          v-model="state.newJob.rate"
          class="form-control"
          placeholder="Rate..."
          required
          min="1"
        />
      </div>
      <div class="col-md-1.5 pt-1 pl-3 sm-order-last">
        <button type="submit" class="btn btn-success">Add Job</button>
      </div>
      <div class="form col-md-12 px-3 ">
        <input
          type="text area"
          name="description"
          v-model="state.newJob.description"
          class="form-control"
          placeholder="Description..."
          maxlength="240"
        />
      </div>
      
      
       </div>
    </form>
    
  </div>
</template>

<script>
import { jobsService } from "../services/JobsService"
import { reactive } from '@vue/reactivity'
import { useRouter } from 'vue-router'

export default {
  name: 'JobForm',
  setup() {
    const router = useRouter()
    const state = reactive({
      newJob: {}
    })
    return {
      state,
      async createJob(){
        try {
          const newId = await jobsService.createJob(state.newJob)
          state.newJob = {}
          router.push({name: 'JobDetails', params: {id: newId}})
        } catch (error) {
          console.error (error)
        }
      }
    }
  },
}
</script>
<style>
  body .container,
  body.debug .container-fluid {
    outline: 2px double blue;
    outline-offset: -2px;
  }

  .border-b {
    outline: 2px rounded  rgba(17, 0, 255, 0.247);
    outline-offset: -2px;
    background: rgba(17, 0, 255, 0.192)
  }
  .bg-see {
    background: rgba(17, 0, 255, 0.192)
  }

  body.debug [class*="col-"] {
    outline: 2px dotted forestgreen;
    outline-offset: -3px;
  }
</style>
