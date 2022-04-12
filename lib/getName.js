  export async function loadDogs() {
    // Call an external API endpoint to get posts
    const res = await fetch('https://soul-dogs-rarity.vercel.app/api/getdogs').then(res => res.json())
  
    return res
  }