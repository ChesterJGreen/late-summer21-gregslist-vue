<template>
  <div class="home-form row">
    <form class="d-flex col-md-10 m-2 p-3 border bg-see shadow rounded" @submit.prevent="createHome">
      <div class="row">
      <div class="form-group col-md-1.5 p-1 pl-3">
        <input
          type="number"
          name="year"
          v-model="state.newHome.year"
          class="form-control"
          placeholder="Year..."
          required
          min=1900
          max=2021
        />
      </div>
      <div class="form-group col-md-1.5 p-1 pl-3">
        <input
          type="number"
          name="levels"
          v-model="state.newHome.levels"
          class="form-control"
          placeholder="Levels..."
          required
          min=1
          max=20
        />
      </div>
      <div class="form-group col-md-1.5 p-1 pl-3">
        <input
          type="number"
          name="bedrooms"
          v-model="state.newHome.bedrooms"
          class="form-control"
          placeholder="Beds..."
          required
          min=1
          max=20
        />
      </div>
      <div class="form-group col-md-1 p-1 pl-3">
        <input
          type="number"
          name="bathrooms"
          v-model="state.newHome.bathrooms"
          class="form-control"
          placeholder="Baths..."
          required
          />
      </div>
      <div class="form-group col-md-1 p-1 pl-3">
        <input
          type="number"
          name="price"
          v-model="state.newHome.price"
          class="form-control"
          placeholder="Price..."
          required
          min="1"
        />
      </div>
      <div class="form-group col-md-5 p-1 pl-3">
        <input
          type="text"
          name="imgUrl"
          v-model="state.newHome.imgUrl"
          class="form-control"
          placeholder="Image Url..."
        />
      </div>
      <div class="col-md-1.5 pt-1 pl-1 sm-order-last">
        <button type="submit" class="btn btn-success">Add Home</button>
      </div>
      <div class="form-group col-md-12 px-3">
        <input
          type="text"
          name="description"
          v-model="state.newHome.description"
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
import { useRouter } from "vue-router"
import { homesService } from "../services/HomesService"

export default {
  name: 'HomeForm',
  setup() {
    const router = useRouter()
    const state = reactive({
      newHome: {}
    })
    return {
      state,
      async createHome(){
        try {
          const newId = await homesService.createHome(state.newHome)
          state.newHome = {}
          router.push({name: 'HomeDetails', params: {id: newId}})
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

