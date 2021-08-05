<template>
      <div class="home m-2 bg-light shadow">
        <!-- passing required param ':id' -->
        <router-link :to="{name: 'HomeDetails', params: {id: home.id}}">
          <img :src="home.imgUrl" class="w-100" :alt="home.year">
          <div class="p-3">
              <div class="text-center">
                  <p><b>{{home.year}} - {{home.price}}</b></p>
              </div>
          </div>
        </router-link>
      </div>
</template>


<script>
export default {
  props: {
    // value captured from the parent data
    home: {
      type: Object,
      required: true
    }
  },
  setup(){
    return {}
  }}
</script>


<style scoped>
.home:hover{
  color: aqua;
  transform: scale(1.05);
  cursor: pointer;
}
</style>