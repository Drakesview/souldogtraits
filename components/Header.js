import Image from "next/image";
import Link from "next/link";
import { FaTwitter, FaDiscord } from "react-icons/fa";


function Header() {
  return (
    <header className="top-0 z-50 p-5 grid lg:grid-cols-5 grid-cols-1 ">
      {/* left */}
      <div className="relative flex items-center h-24 cursor-pointer">
        <Image src="/images/PAW-03.png" layout="fill" objectFit="contain" />
      </div>

      <div className="lg:flex items-center justify-end space-x-2 lg:col-span-4 hidden">
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
    </header>
  );
}

export default Header;
