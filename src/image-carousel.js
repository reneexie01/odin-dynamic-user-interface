export { imageCarousel };

const imageCarousel = (function ImageCarousel() {
  const pokedex = [
    {
      url: "https://img.pokemondb.net/sprites/scarlet-violet/normal/chikorita.png",
      name: "chikotira",
    },
    {
      url: "https://img.pokemondb.net/sprites/scarlet-violet/normal/squirtle.png",
      name: "squirtle",
    },
    {
      url: "https://img.pokemondb.net/sprites/scarlet-violet/normal/charmander.png",
      name: "charmander",
    },
    {
      url: "https://img.pokemondb.net/sprites/scarlet-violet/normal/bulbasaur.png",
      name: "bulbasaur",
    },
    {
      url: "https://img.pokemondb.net/sprites/scarlet-violet/normal/mew.png",
      name: "mew",
    },
  ];

  const container = document.querySelector(".image-carousel");
  const navigatorButtons = document.querySelectorAll(".navigator-button");

  const generateDefaultCarousel = () => {
    navigatorButtons.forEach((button) => {
      button.addEventListener("click", (e) => {
        let id = e.target.getAttribute("image");
        container.innerHTML = "";
        const img = document.createElement("img");
        img.setAttribute("src", `${pokedex[id].url}`);
        img.setAttribute("alt", `${(pokedex[id], name)}`);
        img.setAttribute("class", "pokemon");
        container.appendChild(img);
      });
    });
  };

  return { generateDefaultCarousel };
})();
