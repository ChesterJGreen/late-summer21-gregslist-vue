import { reactive } from "vue"

export const AppState = reactive({
  cars: [],
  activeCar: {},
  homes: [],
  activeHome: {},
  jobs: [],
  activeJob: {}
})