import { fetchProduct } from './api.js';

//GENERATES PRODUCTS ON GAMES.HTML
export function generateProductContainers(data) {
  const productContainer = document.getElementById("productContainer");
  const loader = document.getElementById("loader");

  loader.style.display = "block";

  data.forEach((product, index) => {
    const productContainerDiv = document.createElement("div");
    productContainerDiv.classList.add("product-container");

    const image = document.createElement("img");
    image.id = `prod${index + 1}`;
    image.src = product.image;
    image.alt = product.name;
    image.addEventListener("click", (event) => {
      event.preventDefault();
      handleReadMoreClick(product.id);
    });
    productContainerDiv.appendChild(image);

    const description = document.createElement("p");
    description.textContent = product.description;
    productContainerDiv.appendChild(description);

    const readMoreLink = document.createElement("a");
    readMoreLink.href = "product.html";
    readMoreLink.textContent = "Read More";
    readMoreLink.addEventListener("click", (event) => {
      event.preventDefault();
      handleReadMoreClick(product.id);
    });
    productContainerDiv.appendChild(readMoreLink);

    const buttonContainer = document.createElement("div");
    buttonContainer.classList.add("buttoncontainer");

    const buyNewLink = document.createElement("a");
    buyNewLink.href = "cart.html";
    buyNewLink.textContent = "BUY NEW";
    buyNewLink.classList.add("button"); 
    buttonContainer.appendChild(buyNewLink);
    
    const buyUsedLink = document.createElement("a");
    buyUsedLink.href = "cart.html";
    buyUsedLink.textContent = "BUY USED";
    buyUsedLink.classList.add("button"); 
    buttonContainer.appendChild(buyUsedLink);

    productContainerDiv.appendChild(buttonContainer);

    productContainer.appendChild(productContainerDiv);
  });

  loader.style.display = "none";
}

//ON CLICK TO GET TO PRODUCT
function handleReadMoreClick(productId) {
  const loader = document.getElementById("loader");
  loader.style.display = "block";

  fetchProduct(productId)
    .then(productData => {
      localStorage.setItem('productData', JSON.stringify(productData));
      window.location.href = 'product.html';
    })
    .catch(error => console.error('Error:', error))
    .catch(error => {
  console.error('Error:', error);
  console.log('This is where the error is being handled.');
})

    .finally(() => {
      loader.style.display = "none";
    });
}
