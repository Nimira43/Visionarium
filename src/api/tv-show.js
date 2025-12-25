import axios from 'axios'

export class TVShowAPI {
  static async fetchPopulars() {
    const response = await axios.get('urlencoded')

    return response.data.results
  }
}