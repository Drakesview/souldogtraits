import Image from "next/image";
import Link from "next/link";

function MediumCard({ img, title, rarity, category, occurrence }) {
  return (
    <div
      className="flex items-center m-2 mt-2 space-x-4 rounded-xl flex-col
    hover:bg-gray-600 hover:scale-105 transistion transform duration-200 ease-out"
    >
      <div className="relative h-60 w-60">
        <Image
          href="https://twitter.com/SoulDogsNFT"
          src={img}
          layout="fill"
          className="rounded-lg"
        />
      </div>
      <div className="flex flex-col items-center m-0">
        <h2 className="font-luckiestGuy text-white text-xl text-center ">
          {title}
        </h2>
        <h2 className="font-luckiestGuy text-center text-souldogpink">
          Rarity: {rarity}% ({occurrence})
        </h2>
        <h2 className="font-luckiestGuy text-center text-souldogpink">
          Category: {category}
        </h2>
        <a
          className="lg:block text-gray-100 mt-2 mb-2 hover:text-souldogprimaryhover text-center bg-souldogprimary rounded-lg p-1
          font-luckiestGuy text-sm"
          href={`https://www.magiceden.io/marketplace/soul_dogs?attributes=%7B%22${category}%22%3A%5B%22${title.replace(" ", "+")}%22%5D%7D`}
          target="_blank"
          rel="noopener noreferrer"
        >
          Shop trait on Magic Eden
        </a>
      </div>
    </div>
  );
}

export default MediumCard;
