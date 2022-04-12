import Head from "next/head";
import { useState, useEffect } from "react";
import { loadDogs, loadPosts } from "../lib/getName";
import MediumCard from "../components/MediumCard";
import Image from "next/image";
import filter from "../lib/filter";

export default function Home({ dogs }) {
  const [visableDogs, setvisableDogs] = useState(dogs);
  const [filters, setFilters] = useState({ rarity: "", trait: "" });

  console.log(JSON.stringify(dogs))

  useEffect(() => {
    const filteredDogs = filter(dogs, filters);
    setvisableDogs(filteredDogs);
  }, [filters]);

  const onTraitChange = (e) => {
    setFilters({ ...filters, trait: e.target.value });
  };

  const onRarityChange = (e) => {
    setFilters({ ...filters, rarity: e.target.value });
  };
  return (
    <div className="bg-souldogwhite min-h-screen">
      <Head>
        <title>Soul Dogs Traits</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/images/Logo.png" />
      </Head>
      {/* Body container */}
      <div className="flex flex-col sm:flex-row ">
        {/* trait selector */}
        <div className="w-screen h-52 sm:w-1/4 sm:h-screen flex flex-col items-center">
          <div className="relative w-56 h-56 sm:w-full sm:h-1/4">
            <Image src={"/images/Logo.png"} layout="fill"></Image>
          </div>
          <div className="flex w-full justify-around sm:hidden">
            <select
              name="trait"
              id="trait"
              onChange={onTraitChange}
              className="border-2 rounded-lg bg-souldogprimary font-luckiestGuy text-white h-12 text-center"
            >
              <option value={""} className="rounded-lg p-2">
                Any Trait
              </option>
              <option value="Background">Background</option>
              <option value="Breed">Breed</option>
              <option value="Clothes">Clothes</option>
              <option value="Eyes">Eyes</option>
              <option value="Head">Head</option>
              <option value="Mouth">Mouth</option>
              <option value="Neck">Neck</option>
            </select>
            <select
              name="rarity"
              className="border-2 rounded-lg bg-souldogprimary  font-luckiestGuy text-white h-12 text-center"
              onChange={onRarityChange}
            >
              <option defaultValue={""} disabled hidden>
                Choose rarity
              </option>
              <option value={""} className="rounded-lg p-2">
                Any Rarity
              </option>
              <option value="Common">Common</option>
              <option value="Cool">Cool</option>
              <option value="Groovy">Groovy</option>
              <option value="Fly">Fly</option>
              <option value="Dynomite">Dynomite</option>
            </select>
          </div>

          {/* desktop view */}
          <div className="hidden sm:flex flex-col">
            <div className="border-y-2 border-souldogprimary rounded-lg m-2">
              <h1 className="font-luckiestGuy text-lg text-souldogtext text-center">
                Select Trait
              </h1>

              <select
                name="trait"
                id="trait"
                onChange={onTraitChange}
                className="border-2 rounded-lg bg-souldogprimary m-6 font-luckiestGuy text-white"
              >
                <option value="" defaultValue="" disabled hidden>
                  Choose trait
                </option>
                <option value={""} className="rounded-lg p-2">
                  Any Trait
                </option>
                <option value="Background">Background</option>
                <option value="Breed">Breed</option>
                <option value="Clothes">Clothes</option>
                <option value="Eyes">Eyes</option>
                <option value="Head">Head</option>
                <option value="Mouth">Mouth</option>
                <option value="Neck">Neck</option>
              </select>
            </div>
            <div className="border-y-2 border-souldogprimary rounded-lg m-2 ">
              <h1 className="font-luckiestGuy text-lg text-souldogtext text-center">
                Select Rarity
              </h1>
              <label className="block relative pl-9 cursor-pointer  select-none  m-6 font-luckiestGuy text-souldogprimary">
                All
                <input
                  type="radio"
                  name="rarity"
                  value=""
                  className="absolute opacity-0 cursor-pointer peer"
                  onChange={onRarityChange}
                />
                <span className="radioButton"></span>
              </label>
              <label className="block relative pl-9 cursor-pointer select-none m-6 font-luckiestGuy text-souldogprimary">
                Common
                <input
                  type="radio"
                  name="rarity"
                  value="common"
                  className="absolute opacity-0 cursor-pointer peer"
                  onChange={onRarityChange}
                />
                <span className="radioButton"></span>
              </label>
              <label className="block relative pl-9 cursor-pointer select-none m-6 font-luckiestGuy text-souldogprimary">
                Cool
                <input
                  type="radio"
                  value="Cool"
                  name="rarity"
                  className="absolute opacity-0 cursor-pointer peer"
                  onChange={onRarityChange}
                />
                <span className="radioButton"></span>
              </label>
              <label className="block relative pl-9 cursor-pointer select-none m-6 font-luckiestGuy text-souldogprimary">
                Groovy
                <input
                  type="radio"
                  value="Groovy"
                  name="rarity"
                  className="absolute opacity-0 cursor-pointer peer"
                  onChange={onRarityChange}
                />
                <span className="radioButton"></span>
              </label>
              <label className="block relative pl-9 cursor-pointer select-none m-6 font-luckiestGuy text-souldogprimary">
                Fly
                <input
                  type="radio"
                  value="Fly"
                  name="rarity"
                  className="absolute opacity-0 cursor-pointer peer"
                  onChange={onRarityChange}
                />
                <span className="radioButton"></span>
              </label>
              <label className="block relative pl-9 cursor-pointer select-none m-6 font-luckiestGuy text-souldogprimary">
                Dynomite
                <input
                  type="radio"
                  value="Dynomite"
                  name="rarity"
                  className="absolute opacity-0 cursor-pointer peer"
                  onChange={onRarityChange}
                />
                <span className="radioButton"></span>
              </label>
              {/* <label className="block relative pl-9 mb-3 cursor-pointer select-none">one
              <input type="checkbox" className="opacity-0 cursor-pointer h-0 w-0 peer"/>
              <span className="absolute top-0 left-0 h-6 w-6 bg-gray-400
               after:peer-checked:block peer-checked:bg-blue-400
              after:content-none after:absolute after:hidden
              after:left-2 after:top-1 after:w-1 after:h-3 
              after:border-white after:border-solid after:border-r-4 
              after:border-b-4 after:border-t-0 after:border-l-0 
              rotate-45"></span>
            </label> */}
            </div>
          </div>
        </div>

        {/* trait display */}
        <div className="w-screen h-full sm:w-3/4 sm:h-full m-5 sm:m-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {visableDogs?.map((dog) => (
              <MediumCard
                key={dog.id}
                img={"/images/"+ dog.img}
                title={dog.trait}
                rarity={dog.rarity}
                category={dog.category}
              ></MediumCard>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  let id = 0;
  const preLoadDogs = await loadDogs();
  const dogs = preLoadDogs.map((dog) => { 
    return {...dog,rarity:parseFloat(dog.rarity), id: (id += 1)} });

  return {
    props: {
      dogs,
    },
  };
}