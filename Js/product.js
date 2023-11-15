//ONE SINGLE PRODUCT DATA
export function viewProduct(productData) {
  try {
  const productDetailsContainer = document.getElementById("productDetailsContainer");
  productDetailsContainer.innerHTML = "";
  productDetailsContainer.classList.add("productcontainer");

  const image = document.createElement("img");
  image.src = productData.image;
  image.alt = productData.title;
  productDetailsContainer.appendChild(image);

  const title = document.createElement("h2");
  title.textContent = productData.title;
  productDetailsContainer.appendChild(title);

  const description = document.createElement("p");
  description.textContent = productData.description;
  productDetailsContainer.appendChild(description);

  const genre = document.createElement("p");
  genre.textContent = "Genre: " + productData.genre;
  productDetailsContainer.appendChild(genre);

  const released = document.createElement("p");
  released.textContent = "Released: " + productData.released;
  productDetailsContainer.appendChild(released);

  const ageRating = document.createElement("p");
  ageRating.textContent = "Age Rating: " + productData.ageRating;
  productDetailsContainer.appendChild(ageRating);

  const price = document.createElement("p");
  price.textContent = "Price: $" + productData.price;
  productDetailsContainer.appendChild(price);

  const discountedPrice = document.createElement("p");
  discountedPrice.textContent = "Discounted Price: $" + productData.discountedPrice;
  productDetailsContainer.appendChild(discountedPrice);

  if (productData.favorite) {
    const favorite = document.createElement("p");
    favorite.textContent = "Favorite: Yes";
    productDetailsContainer.appendChild(favorite);
  }

  const buttonsContainer = document.createElement("div");
  buttonsContainer.classList.add("buttons-container");

  const buyNewButton = document.createElement("button");
  buyNewButton.textContent = "BUY NEW";
  buyNewButton.classList.add("button"); 
  buttonsContainer.appendChild(buyNewButton);

  const buyUsedButton = document.createElement("button");
  buyUsedButton.textContent = "BUY USED";
  buyUsedButton.classList.add("button"); 
  buttonsContainer.appendChild(buyUsedButton);

  productDetailsContainer.appendChild(buttonsContainer);
} catch (error) {
  console.error('Error:', error);
  const errorMessageElement = document.getElementById('errorMessage');
  errorMessageElement.textContent = 'An error occurred! ' + error.message;
}
}
