import { sandbox } from "./AxiosService"
import {AppState} from '../AppState'

class HomesService{

  async getHomes(){
    let res = await sandbox.get('/houses')
    AppState.homes = res.data
  }
}
export const homesService = new HomesService()