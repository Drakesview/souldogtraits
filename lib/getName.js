import axios from "axios";

export async function loadDogs() {
  // Call an external API endpoint to get posts
  const res = await axios.get("http://souldogtraits.vercel.app/api/getdogs")
  


  return res.data;
}
