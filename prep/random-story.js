function getRandomStory() {
  const adjectives = [
    "The disco-dancing",
    "The sleep-deprived",
    "The suspiciously sober",
    "The glitter-covered",
    "The permanently confused",
    "The karaoke-loving",
    "The pantsless",
  ];
  const tribes = [
    "Neanderthals",
    "Vikings",
    "Red District Ladies",
    "Red hot Chilli peppers",
    "Murderers",
    "Slaves",
    "Americans",
  ];
  const actions = [
    "Were feasting wildly",
    "Got lost praising some monkeys",
    "Thought their heads were shrinking",
    "couldn't feel any better",
    "took too much drugs on the afterparty",
    "woke up in the middle of the square butt naked",
    "were shoving down their pants showing of their guns",
  ];
  const places = [
    "While checking chicks at the beach",
    "talking about the next killing at their grandmothers place",
    "while having one of the biggest bukake of their life",
    "taking blows along the club cue",
    "feeling lonely having a dead wishes",
    "during a wild karaoke night in the local prison",
    "while stealing sausages from the butcher's window",
    "in the middle of a potato sack race gone wrong",
  ];
  const objects = [
    "balancing a pizza on their head",
    "wielding a rubber chicken as a weapon",
    "carrying a briefcase full of spaghetti",
    "juggling three angry cats",
    "using a selfie stick to poke the mayor",
    "wearing sunglasses at night",
    "trying to sell invisible ice cream",
  ];
  const endings = [
    "and nobody ever spoke of it again.",
    "which made the mayor cry tears of joy.",
    "and the police are still looking for clues.",
    "and that's how the legend was born.",
    "leaving everyone confused but happy.",
    "and the party never stopped.",
    "and their grandma died from sodomy.",
  ];

  const adjectivesIndex = Math.floor(Math.random() * adjectives.length);
  const tribesIndex = Math.floor(Math.random() * tribes.length);
  const actionsIndex = Math.floor(Math.random() * actions.length);
  const placesIndex = Math.floor(Math.random() * places.length);
  const objectsIndex = Math.floor(Math.random() * objects.length);
  const endingsIndex = Math.floor(Math.random() * endings.length);

  return `${adjectives[adjectivesIndex]} 
  ${tribes[tribesIndex]} ${actions[actionsIndex]} 
  ${places[placesIndex]} ${objects[objectsIndex]} 
  ${endings[endingsIndex]}`;
}

console.log(getRandomStory());
