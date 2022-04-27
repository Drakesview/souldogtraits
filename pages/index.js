import Head from "next/head";
import { useState, useEffect } from "react";
import { loadDogs, loadPosts } from "../lib/getName";
import MediumCard from "../components/MediumCard";
import filter from "../lib/filter";
import Header from "../components/Header";
import { BiMenuAltLeft } from "react-icons/bi";
import { AiOutlineCloseCircle } from "react-icons/ai";
import Image from "next/image";
import { FaTwitter, FaDiscord } from "react-icons/fa";
import Link from "next/link";

export default function Home({ dogs }) {
  const [visableDogs, setvisableDogs] = useState(dogs);
  const [filters, setFilters] = useState({ rarity: "", trait: "", text: "", socialClub: [] });
  const [mobileMenuClicked, setMobileMenuClicked] = useState(false);
  const [menuDiv, setMenuDiv] = useState("");

  useEffect(() => {
    const filteredDogs = filter(dogs, filters);
    setvisableDogs(filteredDogs);
  }, [dogs, filters]);

  useEffect(() => {
    const menu = document.getElementById("testmenu");
    setMenuDiv(menu);
  });

  const onTraitChange = (e) => {
    setFilters({ ...filters, trait: e.target.value });
  };

  const onRarityChange = (e) => {
    setFilters({ ...filters, rarity: e.target.value });
  };

  const onSearchTextChange = (e) => {
    setFilters({ ...filters, text: e.target.value });
  };

  const onClubChange = (e) => {
    switch (e.target.value) {
      case "Area51": 
        setFilters({...filters, socialClub: ['Alien','Mutant']}) 
        break;
      case "MambaDAO":
        setFilters({...filters, socialClub: ['Rebels Jersey']}) 
        break;
      case "Smokers Club":
        setFilters({...filters, socialClub: ['Joint','Cigar','Smoking Jacket','Pipe']})
        break;
      case "DegenDogDAO":
        setFilters({...filters, socialClub: ['Sol Glasses', 'BTC Glasses', 'ETH Glasses', 'Solana Necklace', 'BTC Necklace', 'ETH Necklace', 'DOGE Necklace', 'Black Solana Tee', 'ETH Tee', 'BTC Tee', 'Solana Special']}) 
        break;
      case "Bucket Club":
        setFilters({...filters, socialClub: ['Red Bucket Hat','White Bucket Hat','Black Bucket Hat']})
        break;
      case "Hang10":
        setFilters({...filters, socialClub: ['Red Hawaiian Shirt','Blue Hawaiian Shirt']})
        break;
        default: setFilters({...filters, socialClub:[]})
    }
 
  }

// //"MambaDAO">MambaDAO </option>
// <option value="Smokers Club">Smokers Club</option>
// <option value="DegenDogDAO">DegenDogDAO </option>
// <option value="Bucket Club">Bucket Club</option>
// <option value="Hang10">Hang10</option>

  const onMobileMenuClick = () => {
    menuDiv.style.width = "100%";
    setMobileMenuClicked(true);
  };

  const onCloseMobileMenuClick = () => {
    menuDiv.style.width = "0%";
    setMobileMenuClicked(false);
  };
  return (
    <div className="bg-gray-900">
      <Head>
        <title>Soul Dogs Traits</title>
        <meta name="description" content="Soul Dogs Traits and Rarity Tool" />
        <link rel="icon" href="/images/Logo.png" />
      </Head>
      <Header />
      <div
        id="testmenu"
        className="h-full w-0 fixed z-10 left-0 top-0 bg-gray-900 overflow-x-hidden transition duration-1000"
      >
        <AiOutlineCloseCircle
          className="h-8 w-8 absolute top-9 left-4 fill-white z-10"
          onClick={onCloseMobileMenuClick}
        ></AiOutlineCloseCircle>
        <div className="relative w-full top-0 text-center mt-8 flex flex-col">
          <div className="relative flex items-center h-24 cursor-pointer mb-4">
            <Image src="/images/PAW-03.png" layout="fill" objectFit="contain" />
          </div>
          <div className="m-2">
            <h1 className="font-luckiestGuy text-white text-center text-lg">
              Search Trait
            </h1>
            <input
              type={"text"}
              onChange={onSearchTextChange}
              placeholder="Enter Trait"
              className="m-4 font-luckiestGuy text-white text-xl w-40 rounded-lg bg-souldogprimary border-2 px-0.5"
            ></input>
          </div>
          <div className="m-2">
            <h1 className="font-luckiestGuy text-white text-center text-lg">
              Select Trait
            </h1>

            <select
              name="trait"
              id="trait"
              onChange={onTraitChange}
              className="border-2 rounded-lg bg-souldogprimary m-4 font-luckiestGuy text-white text-lg"
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
          <div className="m-2">
            <h1 className="font-luckiestGuy text-white text-center text-lg">
              Select Rarity
            </h1>

            <select
              name="rarity"
              id="rarity"
              onChange={onRarityChange}
              className="border-2 rounded-lg bg-souldogprimary m-4 font-luckiestGuy text-white text-lg"
            >
              <option value="" defaultValue="" disabled hidden>
                Choose Rarity
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
          <div className="m-2">
            <h1 className="font-luckiestGuy text-white text-center text-lg">
              Select Club
            </h1>

            <select
              name="club"
              id="club"
              onChange={onClubChange}
              className="border-2 rounded-lg bg-souldogprimary m-4 font-luckiestGuy text-white text-lg"
            >
              <option value="" defaultValue="" disabled hidden>
                Choose club
              </option>
              <option value={""} className="rounded-lg p-2">
                Any Club
              </option>
              <option value="Area51">Area51 </option>
              <option value="MambaDAO">MambaDAO </option>
              <option value="Smokers Club">Smokers Club</option>
              <option value="DegenDogDAO">DegenDogDAO </option>
              <option value="Bucket Club">Bucket Club</option>
              <option value="Hang10">Hang10</option>
            </select>
          </div>
          <div className="flex items-center justify-evenly p-5">
            <Link href="https://twitter.com/SoulDogsNFT">
              <a target="_blank" className="none">
                <FaTwitter className="h-8 cursor-pointer w-8 fill-white hover:scale-105 transform transition duration-300 ease-out" />
              </a>
            </Link>
            <Link href={"http://Discord.gg/SoulDogs"}>
              <a target="_blank" className="none">
                <FaDiscord className="h-8 cursor-pointer w-8 ml-2 fill-white hover:scale-105 transform transition duration-300 ease-out" />
              </a>
            </Link>
            <a
              href="http://www.souldogs.city"
              target="_blank"
              rel="noopener noreferrer"
              className="lg:block text-white hover:scale-105 transform transition duration-300 ease-out px-2 py-2 rounded-lg
          font-luckiestGuy lg:text-2xl"
            >
              Home
            </a>
            <a
              href="http://shop.souldogs.city"
              target="_blank"
              rel="noopener noreferrer"
              className="lg:block text-white hover:scale-105 transform transition duration-300 ease-out px-2 py-2 rounded-lg
          font-luckiestGuy lg:text-2xl text-lg"
            >
              Shop
            </a>
            <a
              className="lg:block text-white bg-souldogprimaryhover hover:bg-souldogbuttonhover hover:scale-105 transform transition duration-300 ease-out  px-4 py-2 rounded-lg
          font-luckiestGuy lg:text-2xl text-lg"
              href="http://explore.souldogs.city"
              target="_blank"
              rel="noopener noreferrer"
            >
              Explore
            </a>
          </div>
        </div>
      </div>
      {!mobileMenuClicked && (
        <BiMenuAltLeft
          className="h-10 cursor-pointer w-10 ml-2 fill-white lg:hidden absolute top-6"
          onClick={onMobileMenuClick}
        />
      )}
      {/* Body container */}
      <div className="grid lg:grid-cols-5 grid-cols-1 min-h-screen p-5">
        {/* desktop view */}
        <div className="hidden lg:flex flex-col sticky top-0 m-10 max-h-screen items-center">
          <div className="m-2 border-t-2 border-white">
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
          <div className="m-2 border-t-2 border-white">
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
          <div className="m-2 border-t-2 border-white">
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
          <div className="m-2 border-t-2 border-b-2 border-white">
            <h1 className="font-luckiestGuy text-white text-center text-2xl">
              Select Club
            </h1>

            <select
              name="club"
              id="club"
              onChange={onClubChange}
              className="border-2 rounded-lg bg-souldogprimary m-6 font-luckiestGuy text-white text-xl"
            >
              <option value="" defaultValue="" disabled hidden>
                Choose club
              </option>
              <option value={""} className="rounded-lg p-2">
                Any club
              </option>
              <option value="Area51">Area51 </option>
              <option value="MambaDAO">MambaDAO </option>
              <option value="Smokers Club">Smokers Club</option>
              <option value="DegenDogDAO">DegenDogDAO </option>
              <option value="Bucket Club">Bucket Club</option>
              <option value="Hang10">Hang10</option>
            </select>
          </div>
        </div>

        {/* trait display */}
        <div className="h-full col-span-4 m-5">
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
