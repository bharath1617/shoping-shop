function check() {
  if (!localStorage.getItem("currentUser")) {
    window.location.href = "../login/index.html";
    alert("login first")
  }
}
check();

const productsContainer = document.getElementById("products");

fetch("https://fakestoreapi.com/products")
    .then((response) => response.json())
    .then((data) => {
        data.forEach((product) => {
            const productDiv = document.createElement("div");
            productDiv.className = "product cards";

            const image = document.createElement("img");
            image.className = "image";
            image.src = product.image;
            productDiv.appendChild(image);

            const title = document.createElement("h3");
            title.className = "title";
            title.textContent = product.title;
            productDiv.appendChild(title);

            const category = document.createElement("p");
            category.className = "category";
            category.textContent = "Category: " + product.category;
            productDiv.appendChild(category);

            const price = document.createElement("p");
            price.className = "price";
            price.textContent = "$" + product.price;
            productDiv.appendChild(price);

            if (product.category === "men's clothing" || product.category === "women's clothing") {
                const sizes = document.createElement("P");
                sizes.className = "sizes";
                sizes.textContent = "S | M | L";
                productDiv.appendChild(sizes);
            }

            const rating = document.createElement("p");
            rating.className = "rating";
            rating.textContent = "Rating: " + product.rating.rate + " out of 5 (" + product.rating.count + " ratings)";
            productDiv.appendChild(rating);

            const buttons = document.createElement("button");
            buttons.className = "buttons";
            buttons.textContent = "Add To Cart";
            productDiv.appendChild(buttons);

            productsContainer.appendChild(productDiv);
        });
    });
