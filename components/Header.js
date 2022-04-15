import Image from "next/image";
import Link from "next/link";
import { FaTwitter, FaDiscord } from "react-icons/fa";

function Header() {
  return (
    <header className="top-0 z-50 p-5 grid sm:grid-cols-5 grid-cols-1 ">
      {/* left */}
      <div className="relative flex items-center align-middle h-24 cursor-pointer">
        <Image src="/images/PAW-03.png" layout="fill" objectFit="contain" />
      </div>
      <div className="flex items-center justify-end space-x-4 sm:col-span-4">
        <Link href={"https://twitter.com/SoulDogsNFT"}>
          <FaTwitter className="h-10 cursor-pointer w-10 fill-blue-500 hover:scale-105 transform transition duration-300 ease-out" />
        </Link>
        <Link href={"http://Discord.gg/SoulDogs"}>
          <FaDiscord className="h-10 cursor-pointer w-10 fill-white hover:scale-105 transform transition duration-300 ease-out" />
        </Link>
        <a
          href="http://www.souldogs.city"
          className="lg:block text-white hover:scale-105 transform transition duration-300 ease-out  px-4 py-2 rounded-lg
          font-luckiestGuy sm:text-2xl"
        >
          Home
        </a>
        <a
          href="http://shop.souldogs.city"
          className="lg:block text-white hover:scale-105 transform transition duration-300 ease-out  px-4 py-2 rounded-lg
          font-luckiestGuy sm:text-2xl text-lg"
        >
          Shop
        </a>
        <a
          className="lg:block text-white bg-souldogprimaryhover hover:bg-souldogbuttonhover hover:scale-105 transform transition duration-300 ease-out  px-4 py-2 rounded-lg
          font-luckiestGuy sm:text-2xl text-lg"
          href="http://explore.souldogs.city"
        >
          Explore
        </a>
      </div>
    </header>
  );
}

export default Header;
