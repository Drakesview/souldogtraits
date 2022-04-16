import Head from "next/head";
import { useState, useEffect } from "react";
import { loadDogs, loadPosts } from "../lib/getName";
import MediumCard from "../components/MediumCard";
import Image from "next/image";
import filter from "../lib/filter";
import Header from "../components/Header";

export default function Home({ dogs }) {
  const [visableDogs, setvisableDogs] = useState(dogs);
  const [filters, setFilters] = useState({ rarity: "", trait: "", text: "" });

  useEffect(() => {
    const filteredDogs = filter(dogs, filters);
    setvisableDogs(filteredDogs);
  }, [dogs, filters]);

  const onTraitChange = (e) => {
    setFilters({ ...filters, trait: e.target.value });
  };

  const onRarityChange = (e) => {
    setFilters({ ...filters, rarity: e.target.value });
  };

  const onSearchTextChange = (e) => {
    setFilters({ ...filters, text: e.target.value });
  };
  return (
    <div className="bg-gray-900">
      <Head>
        <title>Soul Dogs Traits</title>
        <meta name="description" content="Soul Dogs Traits and Rarity Tool" />
        <link rel="icon" href="/images/Logo.png" />
      </Head>
      <Header />

      {/* Body container */}
      <div className="flex flex-col sm:flex-row min-h-screen ">
        {/* trait selector */}
        <div className="w-screen sm:w-1/4 flex flex-col items-center">
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
          <div className="hidden sm:flex flex-col sticky top-0 m-10">
            <div className="m-2 border-y-2 border-white">
              <h1 className="font-luckiestGuy text-white text-center text-2xl">
                Search Trait
              </h1>
              <input
                type={"text"}
                onChange={onSearchTextChange}
                placeholder="Enter Trait"
                className="m-6 font-luckiestGuy text-white text-xl w-40 rounded-lg bg-souldogprimary border-2 p-1"
              ></input>
            </div>
            <div className="m-2 border-b-2 border-white">
              <h1 className="font-luckiestGuy text-white text-center text-2xl">
                Select Trait
              </h1>

              <select
                name="trait"
                id="trait"
                onChange={onTraitChange}
                className="border-2 rounded-lg bg-souldogprimary m-6 font-luckiestGuy text-white text-xl"
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
            <div className="m-2 border-b-2 border-white">
              <h1 className="font-luckiestGuy text-center text-white text-2xl">
                Select Rarity
              </h1>
              <label className="block relative pl-9 cursor-pointer  select-none  m-6 font-luckiestGuy text-souldogwhite text-xl">
                All
                <input
                  defaultChecked
                  type="radio"
                  name="rarity"
                  value=""
                  className="absolute opacity-0 cursor-pointer peer"
                  onChange={onRarityChange}
                />
                <span className="radioButton"></span>
              </label>
              <label className="block relative pl-9 cursor-pointer select-none m-6 font-luckiestGuy text-souldogwhite text-xl">
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
              <label className="block relative pl-9 cursor-pointer select-none m-6 font-luckiestGuy text-souldogwhite text-xl">
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
              <label className="block relative pl-9 cursor-pointer select-none m-6 font-luckiestGuy text-souldogwhite text-xl">
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
              <label className="block relative pl-9 cursor-pointer select-none m-6 font-luckiestGuy text-souldogwhite text-xl">
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
              <label className="block relative pl-9 cursor-pointer select-none m-6 font-luckiestGuy text-souldogwhite text-xl">
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
            </div>
          </div>
        </div>

        {/* trait display */}
        <div className="h-full sm:w-3/4 sm:h-full m-5 sm:m-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {visableDogs?.map((dog) => (
              <MediumCard
                key={dog.id}
                img={"/images/" + dog.img}
                title={dog.trait}
                rarity={dog.rarity}
                category={dog.category}
                occurrence={dog.occurrence}
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
    return { ...dog, rarity: parseFloat(dog.rarity), id: (id += 1) };
  });

  return {
    props: {
      dogs,
    },
  };
}
