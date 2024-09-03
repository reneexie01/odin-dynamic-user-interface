export { imageCarousel };

const imageCarousel = (function ImageCarousel() {
  const pokedex = [
    {
      url: "https://img.pokemondb.net/sprites/scarlet-violet/normal/chikorita.png",
      name: "chikorita",
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
  let counter = 0;

  const carouselButtonNavigator = () => {
    navigatorButtons.forEach((button) => {
      button.addEventListener("click", (e) => {
        let id = e.target.getAttribute("image");
        container.innerHTML = "";
        const img = document.createElement("img");
        img.setAttribute("src", `${pokedex[id].url}`);
        img.setAttribute("alt", `${(pokedex[id], name)}`);
        img.setAttribute("class", "pokemon");
        container.appendChild(img);
        counter = Number(id) + 1;
      });
    });
  };

  const carouselContainerNavigator = () => {
    container.addEventListener("click", () => {
        if (counter > 4) {
            counter = 0;
            container.innerHTML = "";
            const img = document.createElement("img");
            img.setAttribute("src", `${pokedex[counter].url}`);
            img.setAttribute("alt", `${(pokedex[counter], name)}`);
            img.setAttribute("class", "pokemon");
            container.appendChild(img);
            counter++;
        } else {
            container.innerHTML = "";
            const img = document.createElement("img");
            img.setAttribute("src", `${pokedex[counter].url}`);
            img.setAttribute("alt", `${(pokedex[counter], name)}`);
            img.setAttribute("class", "pokemon");
            container.appendChild(img);
            counter++;
        }
    })
  }

//TODO: If clicking the frame it should move to the next one

  return { carouselButtonNavigator, carouselContainerNavigator };
})();
