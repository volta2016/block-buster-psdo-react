import { API_KEY } from './constants.js'

class API {
  // inicializamos con el API_KEY
  constructor(API_KEY) {
    this.API_KEY = API_KEY
  }
  baseAPI = 'https://api.themoviedb.org/3/'
  // get Movie
  get discoverMovie() {
    return `${this.baseAPI}discover/movie?api_key=${this.API_KEY}`
  }
  //get movie by page fetch
  async moviePage(page) {
    const response = await fetch(`${this.discoverMovie}&page=${page}`)
    const data = await response.json()
    return data
  }
}
// instanciamos el API
export default new API(API_KEY)


