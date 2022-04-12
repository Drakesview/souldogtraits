  export async function loadDogs() {
    // Call an external API endpoint to get posts
    const res = await fetch('http://localhost:3000/api/getdogs/?limit=10').then(res => res.json())
  
    return res
  }