<template>
  <div class="home-form">
    <form class="d-flex" @submit.prevent="createHome">
      <div class="form-group">
        <label for="year">Year</label>
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
      <div class="form-group">
        <label for="levels">Levels</label>
        <input
          type="number"
          name="levels"
          v-model="state.newHome.levels"
          class="form-control"
          placeholder="LVLs..."
          required
          min=1
          max=20
        />
      </div>
      <div class="form-group">
        <label for="bedrooms">Bed</label>
        <input
          type="number"
          name="bedrooms"
          v-model="state.newHome.bedrooms"
          class="form-control"
          placeholder="Bedrooms..."
          required
          min=1
          max=20
        />
      </div>
      <div class="form-group">
        <label for="bathrooms">Bath</label>
        <input
          type="number"
          name="bathrooms"
          v-model="state.newHome.bathrooms"
          class="form-control"
          placeholder="Bathrooms..."
          required
          />
      </div>
      <div class="form-group">
        <label for="price">Price</label>
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
      <div class="form-group">
        <label for="imgUrl">Image Url</label>
        <input
          type="text"
          name="imgUrl"
          v-model="state.newHome.imgUrl"
          class="form-control"
          placeholder="Url..."
        />
      </div>
      <div class="form-group">
        <label for="description">Description</label>
        <input
          type="text"
          name="description"
          v-model="state.newHome.description"
          class="form-control"
          placeholder="Description..."
          maxlength="240"
        />
      </div>
      <div class="d-flex align-items-center">
        <button type="submit" class="btn btn-outline-success">Add</button>
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

