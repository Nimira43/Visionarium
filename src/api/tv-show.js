import axios from 'axios'

const baseUrl = import.meta.env.VITE_BASE_URL
const apiKey = import.meta.env.VITE_API_KEY

export class TVShowAPI {
  static async fetchPopulars() {
    const response = await axios.get(`${baseUrl}tv/popular${apiKey}`)
    console.log(response.data.results)
    return response.data.results
  }
}