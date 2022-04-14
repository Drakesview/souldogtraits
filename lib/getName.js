  import axios from 'axios'
  
  export async function loadDogs() {
    // Call an external API endpoint to get posts
    const res = await axios.get('/api/getdogs')
  
    return res.data
  }