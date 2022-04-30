import ProductData from "./productData";

class ProductList{

    constructor(category,listElement,dataSource){
        this.category = category;
        this.listElement = listElement;
        this.dataSource = dataSource;
    }

async init() {

    const list = await this.dataSource.getData();
    // Rendering the List
    this.renderList(list);
}

renderList(list){
    const template = document.getElementById("product-card-template")
    //Selecting the class from index.html to add items
    const new_products = document.querySelector(".product-list");

    list.forEach(element => {
        // const clone = template.contentEditable.clone(true);
        const clone = template.cloneNode(true);
        this.listElement.appendChild(clone);    
        const newhtml = clone.content;

        //Assigning dinamic values to each attribute of the template
        newhtml.querySelector("a").href += `${element.Id}`;
        newhtml.querySelector("img").setAttribute("src", `${element.Image}`);
        newhtml.querySelector(".card__brand").innerHTML += element.Brand.Name;
        newhtml.querySelector(".card__name").innerHTML += element.NameWithoutBrand;
        newhtml.querySelector(".product-card__price").innerHTML += element.ListPrice;
        // Adding the clone to the element in HTML
        new_products.appendChild(newhtml); 
    
    });

    // document.getElementById("divLst").appendChild(this.listElement);

}

}

export default ProductList