<template>
      <div class="car m-2 bg-light shadow rounded">
        <!-- passing required param ':id' -->
        <router-link :to="{name: 'CarDetails', params: {id: car.id}}">
          <img :src="car.imgUrl" class="w-100" :alt="car.make">
          <div class="p-3">
              <div class="text-center">
                  <p><b>{{car.year}} - {{car.make}} {{car.model}}</b></p>
              </div>
          </div>
        </router-link>
      </div>
</template>


<script>
export default {
  props: {
    // value captured from the parent data
    car: {
      type: Object,
      required: true
    }
  },
  setup(){
    return {}
  }}
</script>


<style scoped>
.car:hover{
  color: aqua;
  transform: scale(1.02);
  cursor: pointer;
}

</style>