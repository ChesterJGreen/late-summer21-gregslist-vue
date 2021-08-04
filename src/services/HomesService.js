import { sandbox } from "./AxiosService"
import {AppState} from '../AppState'

class HomesService{

  async getHomes(){
    let res = await sandbox.get('/houses')
    AppState.homes = res.data
  }
  async getHomeById(id){
    let res = await sandbox.get(`/houses/${id}`)
    AppState.activeHome = res.data
  }
  async createHome(home){
    let res = await sandbox.post('/houses', home)
    AppState.homes.push(res.data)
    return res.data.id
  }
  async destroy(id){
    await sandbox.delete(`/houses/${id}`)
    AppState.homes = AppState.homes.filter(home => home.id !==id)
  }
}
export const homesService = new HomesService()