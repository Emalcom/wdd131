
const temples = [
    // Original temple objects...
        {
          templeName: "Aba Nigeria",
          location: "Aba, Nigeria",
          dedicated: "2005, August, 7",
          area: 11500,
          imageUrl:
          "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
        },
        {
          templeName: "Manti Utah",
          location: "Manti, Utah, United States",
          dedicated: "1888, May, 21",
          area: 74792,
          imageUrl:
          "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
        },
        {
          templeName: "Payson Utah",
          location: "Payson, Utah, United States",
          dedicated: "2015, June, 7",
          area: 96630,
          imageUrl:
          "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
        },
        {
          templeName: "Yigo Guam",
          location: "Yigo, Guam",
          dedicated: "2020, May, 2",
          area: 6861,
          imageUrl:
          "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
        },
        {
          templeName: "Washington D.C.",
          location: "Kensington, Maryland, United States",
          dedicated: "1974, November, 19",
          area: 156558,
          imageUrl:
          "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
        },
        {
          templeName: "Lima Perú",
          location: "Lima, Perú",
          dedicated: "1986, January, 10",
          area: 9600,
          imageUrl:
          "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
        },
        {
          templeName: "Mexico City Mexico",
          location: "Mexico City, Mexico",
          dedicated: "1983, December, 2",
          area: 116642,
          imageUrl:
          "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
        },
        {
          templeName: "Ghana Accra",
          location: "Accra City, Ghana",
          dedicated: "2004, January, 11",
          area: 17500,
          imageUrl:
          "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/accra-ghana/400x225/accra-ghana-temple-detail-249022-2400x1200.jpg"
        }, 
        {
          templeName: "Albuquerque New Mexico",
          location: "San Francisco, USA",
          dedicated: "2000, March, 5",
          area: 34245,
          imageUrl:
          "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/albuquerque-new-mexico/400x250/albuquerque-temple-lds-137883-wallpaper.jpg"
        }, 
        {
          templeName: "Apia Samoa Temple",
          location: "Vaitele St, Apia, Samoa",
          dedicated: "1983, August, 5",
          area: 18691,
          imageUrl:
          "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/apia-samoa/400x250/apia-samoa-temple-lds-460475-wallpaper.jpg"
        },
        
        // Add more temple objects here...
      ];

  
// Utility to create temple cards
function createTempleCard(temple) {
  const card = document.createElement("div");
  card.className = "temple-card";

  const img = document.createElement("img");
  img.src = temple.imageUrl;
  img.alt = temple.name;
  img.loading = "lazy";

  const name = document.createElement("h2");
  name.textContent = temple.name;

  const location = document.createElement("p");
  location.textContent = `Location: ${temple.location}`;

  const dedicated = document.createElement("p");
  dedicated.textContent = `Dedicated: ${temple.dedicated}`;

  const area = document.createElement("p");
  area.textContent = `Area: ${temple.area.toLocaleString()} sq ft`;

  card.appendChild(img);
  card.appendChild(name);
  card.appendChild(location);
  card.appendChild(dedicated);
  card.appendChild(area);

  return card;
}

// Render temples based on filter criteria
function renderTemples(filter) {
  const templeCardsContainer = document.getElementById("temple-cards");
  templeCardsContainer.innerHTML = ""; // Clear previous results

  temples.forEach(temple => {
      const dedicatedYear = parseInt(temple.dedicated.split(" ").pop());
      const isOld = dedicatedYear < 1900;
      const isNew = dedicatedYear > 2000;
      const isLarge = temple.area > 90000;
      const isSmall = temple.area < 10000;

      if (
          filter === "home" ||
          (filter === "old" && isOld) ||
          (filter === "new" && isNew) ||
          (filter === "large" && isLarge) ||
          (filter === "small" && isSmall)
      ) {
          const card = createTempleCard(temple);
          templeCardsContainer.appendChild(card);
      }
  });
}

// Set up event listeners for filtering
document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", event => {
      const filter = event.target.getAttribute("data-filter");
      renderTemples(filter);
  });
});

// Initialize the page with all temples
renderTemples("home");

// Footer date setup
document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("last-modified").textContent = document.lastModified;