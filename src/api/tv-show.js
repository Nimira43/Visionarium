// import axios from 'axios'
import { FAKE_POPULARS } from './fake_data'
// import { baseUrl, apiKey } from '../config'


export class TVShowAPI {
  static async fetchPopulars() {
    // const response = await axios.get(`${baseUrl}tv/popular${apiKey}`)
    // console.log(response.data.results)
    // return response.data.results
    return FAKE_POPULARS
  }
}