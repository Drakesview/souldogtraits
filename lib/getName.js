import axios from "axios";


export async function loadDogs() {
 const res = await axios.get('https://souldogtraits.vercel.app/api/getdogs')
const dogs2 = res.data
  return dogs2;
}
