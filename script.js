let arr;

fetch("https://dummyjson.com/products/")
  .then((res) => res.json())
  .then((json) => {
    const arr = json.products;
    const productListDiv = document.getElementById("productList");

    for (let index = 0; index < arr.length; index++) {
      const product = arr[index];
      if (product.price > 40) {
        const productContainer = document.createElement("div");
        const productTitle = document.createElement("p");
        productTitle.classList.add("title");
        const productPrice = document.createElement("p");
        productPrice.classList.add("price");

        productTitle.textContent = product.title;
        productPrice.textContent = `Price: ${product.price}`;

        productListDiv.appendChild(productContainer);
        productContainer.appendChild(productTitle);
        productContainer.appendChild(productPrice);

        console.log(product.title);
      }
    }
  });
