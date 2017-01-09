function ajouterDessert(e) {
    //recuperation de desset

    var dessertPrefere = prompt("veuillez saisir un dessert");

    //ajouter l'element li
    var dessertElt = document.createElement("li");
    dessertElt.textContent = dessertPrefere;
    document.getElementById("desserts").appendChild(dessertElt);


}


//declanchement de fonction
document.querySelector("button").addEventListener("click", ajouterDessert);