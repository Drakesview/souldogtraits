export default (dogs, { trait, rarity, text, socialClub }) => {
  return dogs
    .filter((dog) => {
      const traitMatch = trait
        ? dog.category.toLowerCase() == trait.toLowerCase()
        : true;
      const rarityMatch = rarity.length
        ? dog.rarityClass.toLowerCase() == rarity.toLowerCase()
        : true;
        const textMatch = text ?  dog.trait.toLowerCase().includes(text.toLowerCase()) : true
        const socialMatch = socialClub.length > 0 ? socialClub.includes(dog.trait) : true

      return traitMatch && rarityMatch && textMatch && socialMatch;
    }).sort((a,b) => {
      if (a.category === b.category) {
        return a.rarity - b.rarity
      }
      return a.category > b.category ? 1 : -1
    })
};
