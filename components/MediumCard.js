import Image from "next/image";

function MediumCard({ img, title, rarity, category }) {
  return (
    <div
      className="flex items-center m-2 mt-5 space-x-4 rounded-xl cursor-pointer flex-col
    hover:bg-gray-100 hover:scale-105 transistion transform duration-200 ease-out"
    >
      <div className="relative h-60 w-60">
        <Image src={img} layout="fill" className="rounded-lg" />
      </div>
      <div>
        <h2 className="font-luckiestGuy text-souldogprimary text-center ">{title}</h2>
        <h2 className="font-luckiestGuy text-center text-souldogpink" >Rarity: {rarity}%</h2>
        <h2 className="font-luckiestGuy text-center text-souldogpink" >Category: {category}</h2>
      </div>
    </div>
  );
}

export default MediumCard;
