export default function (){

        const jsonFileContent = require("../json/alerts.json");

        let newSection = document.createElement("section");

        jsonFileContent.forEach(element => {

        let pElement = document.createElement("p");

        pElement.style.background = element.background;
        pElement.style.color = element.color;
        pElement.innerText = element.message;

        newSection.appendChild(pElement);
           
        });

        return newSection;  
    }
    

