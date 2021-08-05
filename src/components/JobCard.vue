<template>
      <div class="job m-2 bg-light shadow rounded">
        <!-- passing required param ':id' -->
        <router-link :to="{name: 'JobDetails', params: {id: job.id}}">
          <img src="https://th.bing.com/th/id/R.a34c0ef23bdb491b11b88ee606c9eacb?rik=ptclqhHXSpGYbQ&riu=http%3a%2f%2fwww.newdesignfile.com%2fpostpic%2f2013%2f08%2fjob-description-icon_150082.jpg&ehk=UWRln6ytoz6XlmA2paiPa4Sg%2fOBY2I0jVPd%2bAPloqrs%3d&risl=&pid=ImgRaw&r=0" class="w-100" :alt="job.jobTitle">
          <div class="p-3">
              <div class="text-center">
                  <p><b>{{job.jobTitle}} - {{job.company}}</b></p>
              </div>
          </div>
        </router-link>
      </div>
</template>


<script>
export default {
  props: {
    // value captured from the parent data
    job: {
      type: Object,
      required: true
    }
  },
  setup(){
    return {}
  }}
</script>


<style scoped>

.job:hover{
  color: aqua;
  transform: scale(1.05);
  cursor: pointer;
}


</style>