// Find the gallery container
const gallery = document.getElementById("dog-gallery");

// Get the list of dog breeds from the API
fetch("https://dog.ceo/api/breeds/list/all")
    .then(response => response.json())
    .then(data => {

        // Turn the breed data into an array
        const breeds = Object.keys(data.message);

        // Pick 8 breeds from the list
        const featuredBreeds = breeds.slice(0, 8);

        // Go through each breed
        featuredBreeds.forEach(breed => {

            // Get a random picture for each breed
            fetch(`https://dog.ceo/api/breed/${breed}/images/random`)
                .then(response => response.json())
                .then(imageData => {

                    // Create the card
                    const card = document.createElement("div");

                    // Create the dog picture
                    const image = document.createElement("img");
                    image.src = imageData.message;
                    image.alt = breed;
                    image.width = 250;

                    // Create the breed name
                    const name = document.createElement("h2");
                    name.textContent = breed;

                    // Add the picture and name to the card
                    card.appendChild(image);
                    card.appendChild(name);

                    // Add the card to the page
                    gallery.appendChild(card);

                })
                .catch(error => {
                    console.log("Error getting image:", error);
                });

        });

    })
    .catch(error => {
        console.log("Error getting breeds:", error);
    });