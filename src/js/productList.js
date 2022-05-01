class ProductList {
  constructor(category, element, dataSource) {
    this.category = category;
    this.dataSource = dataSource;
    this.element = element;
    this.products = [];
  }

  async init() {
    this.products = await this.dataSource.getData();
    // console.log(this.products); // checking if we got the products
    this.renderList(this.products);
  }

  renderList(list) {
    list.forEach((element) => {
      // Creating cards
      const templateElement = document
        .getElementById("product-card-template")
        .cloneNode(true);

      this.prepareTemplate(templateElement, element);
    });
  }

  prepareTemplate(templateClone, product) {
    const content = templateClone.content;

    content.querySelector("a").href += `${product.Id}`; // Completing link URL
    content.querySelector("img").setAttribute("src", `${product.Image}`); // Setting image source
    content
      .querySelector("img")
      .setAttribute("alt", `Image of ${product.NameWithoutBrand}`); // Setting image text
    content.querySelector("h3").innerHTML = `${product.Brand.Name}`; // Writing brand name on card
    content.querySelector("h2").innerHTML = `${product.NameWithoutBrand}`; // Writing product name
    content.querySelector("p").innerHTML += `${product.FinalPrice}`; // Adding price

    this.element.appendChild(content); // Appending to cards container
  }
}

export default ProductList;
