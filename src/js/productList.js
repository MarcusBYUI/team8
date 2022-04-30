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

  async renderList(list) {
    const productsContainer = document.querySelector(".product-list");

    list.forEach((element) => {
      // Creating cards
      const templateElement = this.element.cloneNode(true);
      const content = templateElement.content;

      content.querySelector("a").href += `${element.Id}`; // Completing link URL
      content.querySelector("img").setAttribute("src", `${element.Image}`); // Setting image source
      content
        .querySelector("img")
        .setAttribute("alt", `Image of ${element.NameWithoutBrand}`); // Setting image text
      content.querySelector("h3").innerHTML = `${element.Brand.Name}`; // Writing brand name on card
      content.querySelector("h2").innerHTML = `${element.NameWithoutBrand}`; // Writing product name
      content.querySelector("p").innerHTML += `${element.FinalPrice}`; // Adding price

      productsContainer.appendChild(content); // Appending to cards container
    });
  }
}

export default ProductList;
