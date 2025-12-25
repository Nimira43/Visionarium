import axios from 'axios'

const baseUrl = import.meta.env.VITE_BASE_URL
const apiKey = import.meta.env.VITE_API_KEY

export class TVShowAPI {
  static async fetchPopulars() {
    const response = await axios.get('urlencoded')

    return response.data.results
  }
}