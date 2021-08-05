<template>
  <div class="car-form row">
    <form class="d-flex col-md-10 m-2 p-3 border bg-see shadow rounded" @submit.prevent="createCar">
      <div class="row">
      <div class="form-group col-md-2">
         <input
          type="text"
          name="make"
          v-model="state.newCar.make"
          class="form-control"
          placeholder="Make..."
          required
        />
      </div>
      <div class="form-group col-md-2">
        <input
          type="text"
          name="model"
          v-model="state.newCar.model"
          class="form-control"
          placeholder="Model..."
          required
        />
      </div>
      <div class="form-group col-md-1.5">
         <input
          type="number"
          name="year"
          v-model="state.newCar.year"
          class="form-control"
          placeholder="Year"
          required
          min="1950"
          max="2021"
        />
      </div>
      <div class="form-group col-md-1">
        <input
          type="number"
          name="price"
          v-model="state.newCar.price"
          class="form-control"
          placeholder="Price..."
          required
          min="1"
        />
      </div>
      <div class="form-group col-md-4 mx-2">
        <input
          type="text"
          name="imgUrl"
          v-model="state.newCar.imgUrl"
          class="form-control"
          placeholder="Image Url..."
        />
      </div>
      <div class="d-flex flex-column align-items-end col-md-1.5 mx-3">
        <button type="submit" class="btn btn-success">Add Job</button>
      </div>
      <div class="form-group col-md-12">
        <input
          type="text"
          name="description"
          v-model="state.newCar.description"
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
import { reactive } from '@vue/reactivity'
import { carsService } from '../services/CarsService'
import { useRouter } from 'vue-router'
export default {
  setup() {
    const router = useRouter()
    const state = reactive({
      newCar: {}
    })
    return {
      state,
      async createCar(){
        try {
          const newId = await carsService.createCar(state.newCar)
          // NOTE clears the form
          state.newCar = {}
          router.push({name: 'CarDetails', params: {id: newId}})
        } catch (error) {
          console.error(error)
        }
      }
    }
  }
}
</script>


<style scoped>
.bg-see {
    background: rgba(17, 0, 255, 0.192)
  }
</style>