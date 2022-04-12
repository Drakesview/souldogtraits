export default (dogs, { trait, rarity }) => {
  return dogs
    .filter((dog) => {
      const traitMatch = trait
        ? dog.category.toLowerCase() == trait.toLowerCase()
        : true;
      const rarityMatch = rarity.length
        ? dog.rarityClass.toLowerCase() == rarity.toLowerCase()
        : true;
      return traitMatch && rarityMatch;
    }).sort((a,b) => {
      if (a.category === b.category) {
        return a.rarity - b.rarity
      }
      return a.category > b.category ? 1 : -1
    })
};
