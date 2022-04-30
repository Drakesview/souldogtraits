import axios from "axios";
import data from './data2'

export async function loadDogs() {
 const res = await axios.get('https://souldogtraits.vercel.app/api/getdogs')
const dogs2 = res.data

  const dogs = data

  return dogs2;
}
